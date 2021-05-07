// / <reference types="react-scripts" />

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;

  // ? Video Calls
  __openMediaStream: MediaStream | undefined;
  __videoCallStatus: string | undefined;
}

declare module '*.png';
