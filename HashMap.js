export class HashMap {
  constructor() {
    this.buckets = [new Array(16)];
  }
  log() {
    console.log(this.buckets);
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
  set(key, value) {}
  get(key) {}
  has(key) {}
  remove(key) {}
  length() {}
  clear() {}
  keys(){}
  values(){}
  entries(){}

}

let hash = new HashMap();
hash.log();
