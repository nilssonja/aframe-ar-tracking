const socket = io();

const send = (data) => {
  socket.emit('debug', 'frame data:' + data.position)
};

AFRAME.registerComponent('ar-controls', {
  init: function () {
    this.frameData = new VRFrameData();
    socket.emit('debug', "in component");
  },
  tick: function () {
    THREE.ARUtils.getARDisplay()
        .then((display) => display.getFrameData(this.frameData))
        .then(() => send(this.frameData.pose))
  }
});
