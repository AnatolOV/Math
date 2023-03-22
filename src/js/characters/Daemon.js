import MathAttack from '../../MathAttack';

export default class Daemon extends MathAttack {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
