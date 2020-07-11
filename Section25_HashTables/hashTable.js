class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let position = this._hash(key);

    if (!this.keyMap[position]) {
      this.keyMap[position] = [];
    }
    this.keyMap[position].push([key, value]);
  }

  get(key) {
    let position = this._hash(key);

    if (!this.keyMap[position]) {
      return undefined;
    } else {
      return this.keyMap[position].filter((element) => {
        if (element[0] === key) {
          return element;
        }
      })[0][1];
    }
  }

  keys() {
    let keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }
  values() {
    let values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }

  remove(key) {
    let position = this._hash(key);

    if (!this.keyMap[position]) {
      return undefined;
    } else {
      let thing = this.keyMap[position].filter((element) => {
        if (element[0] !== key) {
          return element;
        }
      });
      // .filter((element) => {
      //   if (element[0] !== key) {
      //     return element;
      //   }
      // });
      console.log('removed', thing);
    }
  }
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
// console.log('PLUM ==>', ht.get('plum'));
console.log('KEYS => ', ht.keys());
console.log('VALUES => ', ht.values());
ht.remove('olive');

// console.log(ht.keyMap);
