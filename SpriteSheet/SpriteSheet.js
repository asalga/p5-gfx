/*
 *
 */
class SpriteSheet {

  constructor() {
    this.sheet = null;
    this.sprite = null;
    this.sprites = new Map();

    /*
     *
     */
    this.parse = function(responseText) {
      let json = JSON.parse(responseText);
      let frames = json.frames;

      for (let currFrame of frames) {
        let coords = currFrame.frame;
        let img = new p5.Image();
        img = this.sheet.get(coords.x, coords.y, coords.w, coords.h);
        this.sprites.set(currFrame.filename, img);
      }
    };
  }

  load(p5Image, spriteMetaDataPath) {
    this.sheet = p5Image;
    this.sprite = new p5.Image();

    let ajax = function(url) {
      let xhr = new XMLHttpRequest;
      xhr.open("GET", url, false);
      xhr.send(null);
      if (xhr.status !== 200 && xhr.status !== 0) {
        throw "XMLHttpRequest failed, status code " + xhr.status;
      }
      return xhr.responseText;
    };

    this.parse(ajax(spriteMetaDataPath));
  }

  get(key) {
    return this.sprites.get(key);
  }
}
