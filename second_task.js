var set1 = [3, 1, 7, 9];
var set2 = [2, 4, 1, 9, 3];
var set3 = set1.concat(set2);
var sum = 0;
var obj = {};
for (var i = 0; i < set3.length; i++) {
  if (obj[set3[i]]) {
    obj[set3[i]] += 1;
  } else {
    obj[set3[i]] = 1;
  }
}
console.log(obj);
var set2 = [2, 4, 1, 9, 3];
for (var elm in obj) {
  console.log(obj[elm]); //obj.key obj[key]
  if (obj[elm] === 1) {
    sum += +elm;
  }
}
console.log(sum);
