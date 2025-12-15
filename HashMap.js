export class HashMap {
  #LoadFactor = 0.75;
  #BucketsLength = 16;
  constructor() {
    this.buckets = Array.from(new Array(this.#BucketsLength), () => []);
  }
  entry(bucket, key) {
    for (let e of bucket) {
      if (e.key === key) {
        return e;
      }
    }
    return null;
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.buckets.length;
    }
    return hashCode;
  }
  checkLoad() {
    if (this.length() / this.buckets.length > this.#LoadFactor) {
      const entries = this.entries();
      this.clear();
      this.#BucketsLength = this.#BucketsLength * 2;
      this.buckets = Array.from(new Array(this.#BucketsLength), () => []);
      for (const { key, value } of entries) {
        this.set(key, value);
      }
      console.log("update bucket size");
    }
  }
  set(key, value) {
    let h = this.hash(key);
    let b = this.buckets[h];
    let e = this.entry(b, key);
    if (e) {
      e.value = value;
      return;
    }
    b.push({ key, value });
    this.checkLoad()
  }
  get(key) {
    let h = this.hash(key);
    let b = this.buckets[h];
    let e = this.entry(b, key);
    if (e) {
      return e.value;
    }
    return null;
  }
  has(key) {
    let h = this.hash(key);
    let b = this.buckets[h];
    let e = this.entry(b, key);
    if (e) {
      return true;
    }
    return false;
  }
  remove(key) {
    let h = this.hash(key);
    let b = this.buckets[h];
    let e = this.entry(b, key);
    if (e) {
      b.filter((item) => item !== e);
      return true;
    }
    return false;
  }
  length() {
    let n = 0;
    for (const bucket of this.buckets) {
      for (const e of bucket) {
        n++;
      }
    }
    return n;
  }
  clear() {
    this.buckets = Array.from(new Array(this.#BucketsLength), () => []);
  }
  keys() {
    let keys = [];
    for (const bucket of this.buckets) {
      for (const e of bucket) {
        keys.push(e.key);
      }
    }
    return keys;
  }
  values() {
    let values = [];
    for (const bucket of this.buckets) {
      for (const e of bucket) {
        values.push(e.value);
      }
    }
    return values;
  }
  entries() {
    let entries = [];
    for (const bucket of this.buckets) {
      for (const e of bucket) {
        entries.push({ key: e.key, value: e.value });
      }
    }
    return entries;
  }
}
