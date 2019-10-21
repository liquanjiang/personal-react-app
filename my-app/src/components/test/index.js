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
