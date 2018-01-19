AFRAME.registerComponent('ar-scan', {
  schema: {
    type: 'vec2', default: {x: 1, y: 1}
  },
  init: function () {
    debug('init!');
    let self = this;
    let geometry = new THREE.BoxGeometry(0.01, 0.01, 0.01);
    let material = new THREE.MeshPhongMaterial('0x0000ff');
    self.threeScene = this.el.sceneEl.object3D;
    this.cubes = new Array(this.data.y)
      .fill()
      .map(() => new Array(this.data.x).fill()
        .map(() => {
          try{
            const box = new THREE.Mesh(geometry, material);
            box.position.set(0,0,0);
            self.threeScene.add(box);
            return box;
          } catch(err) {
            debug('ah shit')
            debug(err)
          }
        }));
    THREE.ARUtils.getARDisplay()
      .then((display) => self.display = display);
  },
  update: function () {},
  tick: function () {
      if(this.display) {
        let x, y, hits, hit;
        for(let i = 0; i < this.data.x; i++){
          for(let j = 0; j < this.data.y; j++){
            x = i / this.data.x;
            y = j / this.data.y;
            hits = this.display.hitTest(x, y);

            if (hits && hits.length) {
              hit = hits[0];
              THREE.ARUtils.placeObjectAtHit(this.cubes[y][x],
                hit,
                1,
                true);
            }
          }
        }
      }


  },
  remove: function () {},
  pause: function () {},
  play: function () {}
});