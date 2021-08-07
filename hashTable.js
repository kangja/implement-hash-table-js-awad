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
  table = new Array(3);

  setItem = (key, value) => {
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
    return this.table[idx].find((x) => x[0] === key)[1];
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "bob");
// myTable.getItem("firstName");
myTable.setItem("lastName", "tim");
myTable.setItem("age", "5");
myTable.setItem("dob", "1/2/3");
// console.log(myTable.table);

console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
