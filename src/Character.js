const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export const nameError = 'Name is not a string or Name must be between 2-10 characters.';
export const typeError = 'Invalid type.';

export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error(nameError);
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error(typeError);
    }

    this.health = 100;
    this.level = 1;
  }
}
