export const presets: Record<typeof settings['keymapPreset'], Record<string, string>> = {
  Default: {},
  YouTube: {
    like: 'shift l',
    pause: 'space k',
    longJumpForward: 'j',
    longJumpBackward: 'l',
    videoSpeedIncrease: 'shift > 》',
    videoSpeedDecrease: 'shift < 《',
    previousFrame: ', ，',
    nextFrame: '. 。',
    seekBegin: '0 Home',
  },
  HTML5Player: {
    coin: 'shift c',
    danmaku: 'shift d',
    quickFavorite: 'ctrl shift s',
    fullscreen: 'enter',
    webFullscreen: 'shift enter',
    pictureInPicture: 'shift p',
    longJumpBackward: 'ctrl arrowLeft',
    longJumpForward: 'ctrl arrowRight',
    videoSpeedIncrease: 'c',
    videoSpeedDecrease: 'x',
    videoSpeedReset: 'z',
    previousFrame: 'd',
    nextFrame: 'f',
    takeScreenshot: 'shift s',
  },
  PotPlayer: {
    coin: 'shift c',
    danmaku: 'shift d',
    fullscreen: 'enter',
    webFullscreen: '6',
    longJumpBackward: 'ctrl arrowLeft',
    longJumpForward: 'ctrl arrowRight',
    videoSpeedIncrease: 'c',
    videoSpeedDecrease: 'x',
    videoSpeedReset: 'z',
    previousFrame: 'd',
    nextFrame: 'f',
    seekBegin: 'backspace',
  },
}

export default {
  export: { presets },
}
