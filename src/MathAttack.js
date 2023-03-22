import Character from './Character';

export default class MathAttack extends Character {
  get damage() {
    return this._damage < 0 ? 0 : Math.round(this._damage);
  }

  set damage(distance) {
    this._damage = this.attack * ((11 - distance) / 10);

    if (this.stoned) {
      this._damage -= Math.log2(distance) * 5;
    }
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(status) {
    this._stoned = typeof status === 'boolean' ? status : this._stoned;
  }
}
