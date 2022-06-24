import Worlds from '../aaa/Worlds.js';

class Asia extends Worlds {
  constructor(nation) {
    super(nation);
  }
  whereRUFrom() {
    console.log(`I live in ${this.nation}.`)
  }
}

export default Asia;
