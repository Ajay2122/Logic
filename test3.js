function dup(a) {
    console.log(a.sort((a,b)=> a-b));
    
  return a.filter((item, index) => a.indexOf(item) !== index);
}
console.log(dup([3, 0, 1, 1, 2, 4, 2, 4, 6, 5]));
