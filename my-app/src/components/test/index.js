setTimeout(()=>{
  console.log(1)
})

const data = {}

for (var i = 0; i < 10; i ++) {
  data[i] = function (){
    console.log(i)
  }
}

var p = new Promise((res, rej) =>{
  console.log(2);
  res(3)
})

p.then(r => {
  console.log(r)
})

console.log(data['8']())


class A {
  name = 'a';
  count = 1;

  getName () {
    return 'a' + 1
  }

  getCount = ()=>{
    return this.count
  }
}

class B extends A {
  name = 'b';
  count = 2;
  getName = ()=>{
    return this.name + this.count
  }

  getCount (){
    return this.count + 'count'
  }
}

const c = new A();

const d = new B();

c.getName();

d.getName();

delete d.getName()

d.getName()

d.__proto__.getName()

d.__proto__.getCount()



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

const array = [[]];
const len = 5;
let temp = 0;
for(let i = 0; i < arr.length; i ++) {
  const num = Math.floor(i / len);
  if(num <= temp) {
    array[temp].push(arr[i])
  } else {
    temp = num;
    array.push([]);
    array[temp].push(arr[i])
  }
}

console.log(array)
