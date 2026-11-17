// 1. The Move class handles the attacks, export it to use it in other classes
export class Move {
  constructor(
    public readonly name: string,
    public readonly power: number,
    public readonly type: string,
  ) {}
}
