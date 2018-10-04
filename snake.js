class Snake {
  constructor() {
    this.len = 1;
    this.body = [];
    this.body[0] = createVector(floor(w / 2), floor(h / 2));
    this.xdir = 0;
    this.ydir = 0;
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }

  show() {
    let bodyArr = Array.from(Array(this.body.length), (_, x) => x)
    bodyArr.forEach((e) => {
      rect(this.body[e].x, this.body[e].y, 1, 1)
    })
  }

  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.len++;
    this.body.push(head);
  }

  eat(pos) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (pos.x == x && pos.y == y) {
      this.grow();
      return true;
    }
    return false;
  }

  endGame() {
    let headX = this.body[this.body.length - 1].x;
    let headY = this.body[this.body.length - 1].y;
    if (headX > w - 1 || headX < 0 || headY < 0 || headY > h - 1) {
      return true;
    }
    console.log(this.body);
    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i]
      if (headX == part.x && headY == part.y) {
        return true;
      }
    }
    return false;
  }


}