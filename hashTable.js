// const person = {};
// person["firstName"] = "bob";
// person["l astName"] = "bobby";
// console.log(person["lastName"]);

function hashStringToInt(s, tableSize) {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

// console.log("ben".charCodeAt());

class HashTable {
  // table = new Array(100);
  //   table = new Array(3);
  table = new Array(3);

  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            // this.table[idx] = value;
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  loadFactor = this.numItems / this.table.length;

  setItem = (key, value) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      // resize
      //   console.log("resize happening");
      this.resize();
    }

    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      // this.table[idx] = value;
      this.table[idx] = [[key, value]];
    }
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);

    if (!this.table[idx]) {
      return null;
    }

    // return this.table[idx];
    // O(n)
    return this.table[idx].find((x) => x[0] === key)[1];
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "bob");
// console.log(myTable.table.length);
// myTable.getItem("firstName");
myTable.setItem("lastName", "tim");
// console.log(myTable.table.length);
myTable.setItem("age", "5");
// console.log(myTable.table.length);
myTable.setItem("dob", "1/2/3");
// console.log(myTable.table);
// console.log(myTable.table[0]);
// console.log(myTable.table.length);
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
console.log(myTable.getItem("age"));
console.log(myTable.getItem("dob"));
