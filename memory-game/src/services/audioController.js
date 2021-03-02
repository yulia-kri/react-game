export default class AudioController {
  constructor(bgMusic, musicVolume, sounds, soundsVolume) {
    this.bgMusic = new Audio('audio/Hedwigs_Theme.mp3');
    this.flipSound = new Audio('audio/flip.mp3');
    this.matchSound = new Audio('audio/match.mp3');
    this.isMusicOn = bgMusic;
    this.bgMusic.volume = musicVolume;
    this.bgMusic.loop = true;
    this.isSoundsOn = sounds;
    this.flipSound.volume = soundsVolume;
    this.flipSound.crossOrigin = 'anonymous';
    this.matchSound.volume = soundsVolume;
    this.matchSound.crossOrigin = 'anonymous';
  }

  startMusic() {
    if (this.isMusicOn) this.bgMusic.play();
  }

  stopMusic() {
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
    this.isSoundsOn = false;
  }

  flip() {
    if (this.isSoundsOn) {
      this.flipSound.currentTime = 0;
      this.flipSound.play();
    }
  }

  match() {
    if (this.isSoundsOn) {
      this.matchSound.currentTime = 0;
      this.matchSound.play();
    }
  }
}
