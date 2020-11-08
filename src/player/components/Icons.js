/* eslint-disable max-len, react/no-multi-comp */
import React from 'react';

export class PlayIcon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <svg className="ele-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 24" >
        <path className='ele-path' d="M18 12c0 .712-.37 1.355-.99 1.72L3.159 23.625C2.757 23.889 2.382 24 2 24c-1.103 0-2-.897-2-2V2C0 .897.897 0 2 0c.385 0 .76.111 1.085.323l13.962 9.981c.583.34.953.983.953 1.695z" />
      </svg>
    );
  }
}

export class PauseIcon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M9 2v20c0 1.103-.897 2-2 2H2c-1.103 0-2-.897-2-2V2C0 .897.897 0 2 0h5c1.103 0 2 .897 2 2zm13-2h-5c-1.103 0-2 .897-2 2v20c0 1.103.897 2 2 2h5c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z" />
      </svg>
    );
  }
}

export class NextIcon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M24 1.999v19.989c0 1.102-.897 1.999-2 1.999h-5c-1.103 0-2-.897-2-1.999v-6.837L3.16 23.612C1.597 24.635 0 23.472 0 21.988V1.999C0 .897.897 0 2 0c.384 0 .76.111 1.085.322L15 8.837V1.999C15 .897 15.897 0 17 0h5c1.103 0 2 .897 2 1.999z" />
      </svg>
    );
  }
}

export class PreviousIcon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M24 2.014v19.987C24 23.103 23.103 24 22 24c-.385 0-.76-.111-1.085-.323L9 15.164v6.838c0 1.102-.897 1.999-2 1.999H2c-1.103 0-2-.897-2-1.999V2.015C0 .913.897.016 2 .016h5c1.103 0 2 .897 2 1.999v6.837L20.841.391C22.41-.636 24 .533 24 2.016z" />
      </svg>
    );
  }
}

export class PlaylistIcon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M.871 5h10.758c.488 0 .871-.439.871-1s-.383-1-.871-1H.871C.383 3 0 3.439 0 4s.383 1 .871 1zM.871 10.25h10.758c.488 0 .871-.439.871-1s-.383-1-.871-1H.871c-.488 0-.871.439-.871 1s.383 1 .871 1zM23.595 3.129l-.002-.001c-.254-.156-.574-.17-.833-.036l-7.449 3.756c-.291.148-.472.442-.472.77v8.259c-.5-.234-1.055-.356-1.626-.356-1.841 0-3.339 1.229-3.339 2.74s1.498 2.74 3.339 2.74 3.338-1.229 3.338-2.74V8.15l5.736-2.893v8.116c-.5-.233-1.056-.355-1.627-.355-1.841 0-3.338 1.229-3.338 2.739s1.497 2.74 3.338 2.74 3.339-1.229 3.339-2.74V3.862c0-.3-.151-.574-.405-.733zM8.129 13.5H.871c-.488 0-.871.439-.871 1s.383 1 .871 1h7.258c.488 0 .871-.439.871-1s-.383-1-.871-1z" />
      </svg>
    );
  }
}

export class VolumeUpIcon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M24 11v2c0 1.103-.897 2-2 2h-7v7c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-7H2c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h7V2c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v7h7c1.103 0 2 .897 2 2z" />
      </svg>
    );
  }
}

export class VolumeDownIcon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 24">
        <path d="M24 11v2c0 1.103-.897 2-2 2H2c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2z" />
      </svg>
    );
  }
}

export class MusicNoteIcon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 24">
        <path d="M18 2v16c0 1.654-1.794 3-4 3s-4-1.346-4-3 1.794-3 4-3V4.5L8 6.374V21c0 1.654-1.794 3-4 3s-4-1.346-4-3 1.794-3 4-3V5c0-.966.691-1.793 1.645-1.966L15.238.157c.204-.097.481-.157.763-.157 1.103 0 2 .897 2 2z" />
      </svg>
    );
  }
}

export class CartIcon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M8.707 15h9.898c1.042 0 1.985-.657 2.346-1.636l2.94-7.979c.072-.196.109-.402.109-.616 0-.976-.794-1.77-1.77-1.77H5.734l-.339-1.188C5.09.744 4.101-.001 2.991-.001H.5c-.276 0-.5.224-.5.5s.224.5.5.5h2.491c.666 0 1.259.447 1.442 1.088l3.505 12.267-2.379 2.379c-.361.36-.56.841-.56 1.356 0 1.054.857 1.91 1.91 1.91h15.59c.276 0 .5-.224.5-.5s-.224-.5-.5-.5H6.909c-.502 0-.91-.408-.91-.916 0-.243.095-.472.267-.644l2.44-2.44zM18 12h-7.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5H18c.276 0 .5.224.5.5s-.224.5-.5.5zm.5-2.5H10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8.5c.276 0 .5.224.5.5s-.224.5-.5.5zM9.5 6H20c.276 0 .5.224.5.5s-.224.5-.5.5H9.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zM21 20c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM8 20c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
      </svg>
    );
  }
}

export class RefreshIcon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M24 12c0 2.756-2.243 4.999-5 4.999-.004 0-.02.001-.047.001-.295 0-1.919-.082-3.953-1.398v.397c0 .553-.447 1-1 1s-1-.447-1-1v-2.5c0-.553.447-1 1-1h2.5c.553 0 1 .447 1 1 0 .403-.241.745-.584.903 1.193.589 2.011.604 2.055.597 1.683 0 3.028-1.345 3.028-3s-1.346-3-3-3c-2.151 0-4.213 1.832-6.396 3.772-2.338 2.078-4.756 4.227-7.604 4.227-2.757 0-5-2.243-5-4.999S2.242 7 4.999 7c.046-.002 1.777-.044 4 1.394V8c0-.553.447-1 1-1s1 .447 1 1v2.5c0 .553-.447 1-1 1h-2.5c-.553 0-1-.447-1-1 0-.403.241-.746.585-.904-1.186-.587-1.997-.6-2.056-.596C3.345 9 2 10.346 2 12s1.346 3 3 3c2.089 0 4.122-1.807 6.275-3.722C13.641 9.176 16.087 7.001 19 7.001c2.757 0 5 2.243 5 4.999z" />
      </svg>
    );
  }
}

export class DownloadIcon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M24 15c0 2.757-2.243 5-5 5h-.183c-.177 0-.333-.092-.422-.23-.05-.078-.078-.17-.078-.269 0-.078.018-.153.05-.219.419-.882.632-1.819.632-2.782 0-3.584-2.916-6.5-6.5-6.5s-6.5 2.916-6.5 6.5c0 .923.196 1.823.583 2.676.074.087.119.2.119.324 0 .276-.224.5-.5.5-.005.001-.013 0-.02 0h-.183c-3.309 0-6-2.691-6-6 0-2.158 1.143-4.121 3.003-5.193C3.104 5.036 6.203 2 9.998 2c2.759 0 5.205 1.58 6.35 4.062.227-.042.439-.063.65-.063 2.206 0 4 1.794 4 4 0 .142-.008.283-.024.428 1.825.785 3.024 2.572 3.024 4.572zm-6 1.5c0 3.032-2.468 5.5-5.5 5.5S7 19.532 7 16.5 9.468 11 12.5 11s5.5 2.468 5.5 5.5zm-3.146.646c-.195-.195-.512-.195-.707 0l-1.146 1.146v-4.793c0-.276-.224-.5-.5-.5s-.5.224-.5.5v4.793l-1.146-1.146c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l2 2c.046.046.1.083.161.108.059.025.124.038.192.038.065 0 .129-.013.19-.038h.002c.002-.001.003-.003.005-.004.057-.024.111-.058.157-.105l2-2c.195-.195.195-.512 0-.707z" />
      </svg>
    );
  }
}

export class LyricsIcon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 4.5C0 3.673.673 3 1.5 3h21c.827 0 1.5.673 1.5 1.5S23.327 6 22.5 6h-21C.673 6 0 5.327 0 4.5zM1.5 11h15c.827 0 1.5-.673 1.5-1.5S17.327 8 16.5 8h-15C.673 8 0 8.673 0 9.5S.673 11 1.5 11zm15 7h-15c-.827 0-1.5.673-1.5 1.5S.673 21 1.5 21h15c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5zm6-5h-21c-.827 0-1.5.673-1.5 1.5S.673 16 1.5 16h21c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5z" />
      </svg>
    );
  }
}
