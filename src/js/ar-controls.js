AFRAME.registerComponent('ar-position', {
  init: function () {
    this.frameData = new VRFrameData();
  },
  tick: function () {
    THREE.ARUtils.getARDisplay()
        .then((display) => display.getFrameData(this.frameData))
        .then(() => {
          this.el.setAttribute('position', this.frameData.pose.position.join(' '));
        })
  }
});
