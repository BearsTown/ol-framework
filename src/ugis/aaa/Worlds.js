import uGisConfig from '../test_static/uGisConfig.js';

class Worlds {
  static count = 10;

  #aaa = 111;

  _waterAmount = 0;

  constructor(opt_) {
    this.nation = opt_.nation;
    this.count = opt_.count;
  }

  whereURrom() {
    console.log(`I'm from ${this.nation}.`);
  }

  static increaseCount() {
    this.count += 1;
  }

  static getCount() {
    return this.count;
  }

  getA() {
    return this.#aaa;
  }

  setA(a) {
    this.#aaa = a;
  }

  run() {
    console.log(uGisConfig.proxy);
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Exception");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }
}

export default Worlds;
