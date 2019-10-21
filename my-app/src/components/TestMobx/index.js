import React, { Component }from 'react';
import {action, computed, observable} from 'mobx';
import {observer} from 'mobx-react';

class Store {

  @observable p = {
    a: 'a'
  };

  p3 = observable.map({
    a: 'a'
  });


  @computed get p1 (){
    console.log('p1');
    return this.p.a + this.p.b
  }

  get p2 () {
    console.log('p2');
    return this.p3.get('a') + this.p3.get('b')
  }

  @action.bound
  do1 () {
    this.p.b = 'b';
  }

  @action.bound
  do2 () {
    this.p3.set('b', 'b');
  }

  do3 () {
    this.p.a = 'aa';
    this.p3.set('a', 'aa');
  }
}

@observer class Test extends Component{
  constructor (props){
    super(props);
    this.store = new Store()
  }

  componentDidMount () {
    setTimeout(()=> {
      console.log('do1--------')
      this.store.do1()
    }, 1000);
    setTimeout(()=> {
      console.log('do2--------')
      this.store.do2()
    }, 2000)
    setTimeout(()=> {
      console.log('do3--------')
      this.store.do3()
    }, 3000)
  }

  render () {
    const {p1, p2} = this.store;
    console.log('render', p1, p2);
    return (
      <div>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
    )
  }
}

export default Test
