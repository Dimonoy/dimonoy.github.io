const soundFilesDictionary = {
  lamp_on: "../public/audio/lamp_on.wav",
  lamp_off: "../public/audio/lamp_off.wav",
};

const audioContext = new window.AudioContext();

/**
 * Plays a sound.
 * @param {string} soundFile - the sound type specified from the sound files dictionary
 */
function playSound(soundFile) {
  fetch(soundFilesDictionary[soundFile])
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      const soundSource = audioContext.createBufferSource();
      soundSource.buffer = audioBuffer;
      soundSource.connect(audioContext.destination);
      soundSource.start();
    });
}

export { playSound };
