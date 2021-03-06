import React from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';

import SoundCloud from '../utils/soundcloud';
import multiSoundDisabled from '../utils/multi-sound-disabled';

const PLAYBACK_RATES = [0.5, 0.75, 1, 1.25, 1.5, 2];

const soundProvider = (Player, events) => {
    class EnhancedPlayer extends React.Component {
        constructor(props) {
            super(props);

            const { volume, cycleTracks } = this.props;

            this.state = {
                tracks: [],
                activeIndex: 0, // Determine active track by index
                playStatus: Sound.status.STOPPED,
                position: 0,
                duration: 0,
                playbackRate: 1,
                volume: volume == null ? 100 : volume,
                cycleTracks,
                repeatingTrackIndex: null,
                isMultiSoundDisabled: multiSoundDisabled(),
            };
            this.clearTrack = this.clearTrack.bind(this);
            this.playTrack = this.playTrack.bind(this);
            this.pauseTrack = this.pauseTrack.bind(this);
            this.togglePlay = this.togglePlay.bind(this);
            this.nextTrack = this.nextTrack.bind(this);
            this.prevTrack = this.prevTrack.bind(this);
            this.setPosition = this.setPosition.bind(this);
            this.setVolume = this.setVolume.bind(this);
            this.skipPosition = this.skipPosition.bind(this);
            this.setPlaybackRate = this.setPlaybackRate.bind(this);
            this.toggleTracklistCycling = this.toggleTracklistCycling.bind(this);
            this.setTrackCycling = this.setTrackCycling.bind(this);
            this.reverseTracks = this.reverseTracks.bind(this);
            this.getFinalProps = this.getFinalProps.bind(this);
            this.onPlaying = this.onPlaying.bind(this);
            this.onFinishedPlaying = this.onFinishedPlaying.bind(this);
        }

        componentDidMount() {
            const { tracksUrl, soundcloudClientId, reverseTrackOrder } = this.props;
            const tracksPromised = fetch(tracksUrl).then(res => res.json());

            if (!soundcloudClientId) {
                tracksPromised.then(tracks =>
                    this.setState({ tracks }, () => {
                        if (reverseTrackOrder) {
                            this.reverseTracks();
                        }
                    }),
                );
                return;
            }

            const sc = new SoundCloud(soundcloudClientId);
            const scTracks = tracksPromised
                .then(tracks => sc.fetchSoundCloudStreams(tracks))
                .catch(err => console.error(err)); // eslint-disable-line no-console

            // Make sure if SoundCloud fetching fails
            // we delegate and load our tracks anyway
            const promiseArray = [tracksPromised, scTracks].map(p =>
                p.catch(error => ({
                    status: 'error',
                    error,
                })),
            );

            Promise.all(promiseArray).then(res => {
                if (res[1].status === 'error') {
                    return this.setState({ tracks: res[0] });
                }

                return this.setState(
                    () => ({ tracks: sc.mapStreamsToTracks(...res) }),
                    () => {
                        if (reverseTrackOrder) {
                            this.reverseTracks();
                        }
                    },
                );
            });
            //document.getElementsByClass("ai-tracklist-prev")[0].focus();
        }

        // Events
        onPlaying({ duration, position }) {
            this.setState(
                () => ({ duration, position }),
                () => {
                    if (events && events.onPlaying) {
                        events.onPlaying(this.getFinalProps());
                    }
                },
            );
        }

        onFinishedPlaying() {
            this.setState(() => ({ playStatus: Sound.status.STOPPED }));

            if (events && events.onFinishedPlaying) {
                events.onFinishedPlaying(this.getFinalProps());
            }
        }

        getFinalProps() {
            const { tracks, activeIndex } = this.state;
            const currentTrack = tracks[activeIndex] || {};

            return {
                clearTrack: this.clearTrack,
                playTrack: this.playTrack,
                pauseTrack: this.pauseTrack,
                togglePlay: this.togglePlay,
                nextTrack: this.nextTrack,
                prevTrack: this.prevTrack,
                setPosition: this.setPosition,
                skipPosition: this.skipPosition,
                setPlaybackRate: this.setPlaybackRate,
                setVolume: this.setVolume,
                toggleTracklistCycling: this.toggleTracklistCycling,
                setTrackCycling: this.setTrackCycling,
                currentTrack,
                ...this.props,
                ...this.state,
            };
        }

        setVolume(volume) {
            this.setState(() => ({ volume }));
        }

        setPosition(position) {
            this.setState(() => ({ position }));
        }

        skipPosition(direction = 1) {
            const { position } = this.state;
            const { skipAmount } = this.props;
            const amount = parseInt(skipAmount, 10) * 1000;
            console.log(amount);
            this.setPosition(position + amount * direction);
        }

        setTrackCycling(index, event) {
            const { activeIndex, cycleTracks } = this.state;
            //const index = activeIndex;
            if (event) {
                event.preventDefault();
            }


            if (cycleTracks && index != null) {
                this.toggleTracklistCycling();
            }

            this.setState(
                ({ repeatingTrackIndex }) => ({
                    repeatingTrackIndex: repeatingTrackIndex === index ? null : index,
                }),
                () => {
                    if (index != null && activeIndex !== index) {
                        this.playTrack(index);
                    }
                },
            );
        }

        setPlaybackRate = () => {
            this.setState(({ playbackRate }) => {
                const currentIndex = PLAYBACK_RATES.findIndex(
                    rate => rate === playbackRate,
                );
                const nextIndex =
                    (PLAYBACK_RATES.length + (currentIndex + 1)) % PLAYBACK_RATES.length;

                return {
                    playbackRate: PLAYBACK_RATES[nextIndex],
                };
            });
        };

        playTrack(index, event) {
            const { position } = this.state;
            if (event) {
                event.preventDefault();
            }

            const { repeatingTrackIndex, isMultiSoundDisabled } = this.state;

            if (isMultiSoundDisabled) {
                window.soundManager.pauseAll();
            }

            this.setState(() => ({
                position: position,
                activeIndex:index,
                playStatus: Sound.status.PLAYING,
            }));

            // Reset repating track index if the track is not the active one.
            if (index !== repeatingTrackIndex && repeatingTrackIndex != null) {
                this.setTrackCycling(null);
            }
        }

        pauseTrack(event) {
            if (event) {
                event.preventDefault();
            }

            const { playStatus } = this.state;

            if (playStatus === Sound.status.PLAYING) {
                this.setState(() => ({ playStatus: Sound.status.PAUSED }));
            }
        }
        clearTrack() {
            const element = document.getElementsByClassName("ai-audio-control");
            for (let i = 0; i < element.length; i++) {
                if (element[i].classList.contains("ai-audio-playing")) {
                    element[i].click();

                }
            }
        }
        togglePlay(event) {
            if (event) {
                event.preventDefault();
            }

            const { activeIndex } = this.state;

            // if (typeof index === 'number' && index !== activeIndex) {
            //   this.playTrack(index);
            //   return;
            // }
            //alert(event.target.nodeName);
            if (event.target.classList.contains('ai-audio-playing') || event.target.parentNode.parentNode.classList.contains('ai-audio-playing') || event.target.parentNode.classList.contains('ai-audio-playing')) {

            } else {
                this.clearTrack();
            }

            this.setState(({ playStatus, isMultiSoundDisabled }) => {
                if (playStatus !== Sound.status.PLAYING && isMultiSoundDisabled) {
                    window.soundManager.pauseAll();
                }

                return {
                    playStatus: playStatus === Sound.status.PLAYING ?
                        Sound.status.PAUSED : Sound.status.PLAYING,
                };
            });
        }

        nextTrack(event) {
            const { activeIndex, playStatus } = this.state;
            //this.playTrack(activeIndex === tracks.length - 1 ? 0 : activeIndex + 1);
            if (activeIndex === 1) {

            } else {
                //this.clearTrack();
                // this.setState(() => ({
                //     activeIndex: activeIndex + 1,
                // }));
                if (playStatus == 'PLAYING'){
                    this.playTrack(activeIndex + 1);
                }else{
                    this.setState(() => ({
                        activeIndex: activeIndex + 1,
                    }));
                }
                event.target.style.backgroundColor = '#CB5019';
                event.target.parentNode.childNodes[2].style.backgroundColor = '#67686B';
                event.target.parentNode.childNodes[1].childNodes[0].childNodes[0].style.backgroundColor = '#CB5019';
                // $(event.target).parent().find(".ai-tracklist-next").css("background-color", "#CB5019");
                // $(event.target).parent().find(".ai-tracklist-prev").css("background-color", "#67686B");
                // $(event.target).parent().find(".ai-track-progress").css("background-color", "#CB5019");
            }
        }

        prevTrack() {
            const { activeIndex, playStatus } = this.state;
            
            //this.playTrack(activeIndex === 0 ? tracks.length - 1 : activeIndex - 1);
            if (activeIndex === 0) {

            } else {
                //this.clearTrack();
                // this.setState(() => ({
                //     activeIndex: activeIndex - 1,

                // }));
                if (playStatus == 'PLAYING'){
                    this.playTrack(activeIndex - 1);
                }else{
                    this.setState(() => ({
                        activeIndex: activeIndex - 1,
                    }));
                }
                event.target.style.backgroundColor = '#3B393D';
                event.target.parentNode.childNodes[3].style.backgroundColor = '#67686B';
                event.target.parentNode.childNodes[1].childNodes[0].childNodes[0].style.backgroundColor = '#3B393D';
                // $(event.target).parent().find(".ai-tracklist-prev").css("background-color", "#3B393D");
                // $(event.target).parent().find(".ai-tracklist-next").css("background-color", "#67686B");
                // $(event.target).parent().find(".ai-track-progress").css("background-color", "#3B393D");
            }
        }

        toggleTracklistCycling() {
            const { repeatingTrackIndex } = this.state;

            if (repeatingTrackIndex !== null) {
                this.setTrackCycling(null);
            }

            this.setState(state => ({
                cycleTracks: !state.cycleTracks,
            }));
        }

        reverseTracks() {
            this.setState(state => ({
                tracks: state.tracks.slice().reverse(),
            }));
        }

        render() {
            const { tracks, playStatus, position, volume, playbackRate } = this.state;
            const finalProps = this.getFinalProps();

            return (
                <div className="ai-audioigniter" >
                    <input type='hidden'
                        id='act-id'
                        class='act-class'
                        value='d' >
                    </input>   <Player {...finalProps} />

                    {
                        tracks.length > 0 && (

                            <Sound url={finalProps.currentTrack.audio}
                                playStatus={playStatus}
                                position={position}
                                volume={volume}
                                onPlaying={this.onPlaying}
                                onFinishedPlaying={this.onFinishedPlaying}
                                onPause={
                                    () => this.pauseTrack()
                                }
                                playbackRate={playbackRate}
                            />
                        )
                    } </div>
            );
        }
    }

    EnhancedPlayer.propTypes = {
        volume: PropTypes.number,
        cycleTracks: PropTypes.bool,
        tracksUrl: PropTypes.string,
        soundcloudClientId: PropTypes.string,
        reverseTrackOrder: PropTypes.bool,
    };

    return EnhancedPlayer;
};

export default soundProvider;