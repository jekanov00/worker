'use strict';

class Worker {
  constructor (name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this._rate = rate;
    this._days = days;
  }

  set rate (value) {
    if (typeof value !== 'number') {
      throw new TypeError('Not a number');
    }
    if (value < 0) {
      throw new RangeError();
    }

    this._rate = value;
  }

  get rate () {
    return this._rate;
  }

  set days (value) {
    if (typeof value !== 'number') {
      throw new TypeError('Not a number');
    }
    if (value < 0) {
      throw new RangeError();
    }

    this._days = value;
  }

  get days () {
    return this._days;
  }

  getSalary () {
    return this.rate * this.days;
  }
}

const worker1 = new Worker('Vasya', 'Pupkin', 12, 22);

console.log(`Full name = ${worker1.name} ${worker1.surname}`);
console.log(worker1.getSalary());