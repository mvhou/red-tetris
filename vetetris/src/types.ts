// export type position = [number,number]

export class Position extends Array<number> {
  x:number
  y:number
  constructor(x:number=1,y:number=0, ) {
    super()
    this[0] = x
    this[1] = y
    this.x = x
    this.y = y
  }

  update(x:number, y:number) {
    this[0] = x;
    this[1] = y;
    this.x = x;
    this.y = y;
  }
}

export class Game {
  position:Position
  board:string[][]

  constructor(height:number, width:number) {
    this.position = new Position(Math.floor(width/2), 0);
    this.board = Array(height).fill(null).map(() => Array(width).fill("grey"));
  }

  set(x:number,y:number) {
    this.board[y][x] = "red";
  }

  toggle(x:number, y:number) {
    this.board[y][x] = (this.board[y][x] == "grey") ? "red": "grey";
  }
}