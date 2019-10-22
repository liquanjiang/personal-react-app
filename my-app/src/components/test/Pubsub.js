class Pubsub {
  constructor () {
  }

  list = {};

  // 添加消息监听的方法
  subscribe (topic, func) {
    if (typeof topic !== 'string') {
      throw 'topic为字符串类型'
    }
    if (typeof func !== 'function') {
      throw 'func为函数类型'
    }
    const list = this.list;
    if (!list[topic]) {
      list[topic] = [];
    }
    list[topic].push(func);
    return () => this.unsubscribe(topic, func);
  }

  // 发布消息的方法
  publish (topic, data) {
    if (typeof topic !== 'string') {
      throw 'topic必须是字符串类型'
    }
    const list = this.list;
    if(!list[topic]) {
      throw '不存在该事件的监听'
    } else {
      list[topic].forEach((func)=>{
        func.call(this, data)
      })
    }
  }

  // 移除消息监听的方法
  unsubscribe (topic, func){
    if(typeof topic !== 'string') {
      throw 'topic为字符串类型'
    }

    if(func && (typeof func !== 'function')) {
      throw 'func为函数类型'
    }
    const list = this.list;
    if(!list[topic]) {
      throw '不存在该topic监听'
    }

    if(!func) { // 如果没有第二个参数，就移除所有的监听事件
      if(list[topic]) {
        delete list[topic]
      }
    } else {
      if(!list[topic].includes(func)) {
        throw '要移除的事件不存在'
      } else {
        const index = list[topic].findIndex(item => item === func);
        list[topic].splice(index, 1);
        if(list[topic].length === 0) {
          delete list[topic]
        }
      }
    }
  }
}

const event = new Pubsub();

const remove2 = event.subscribe('123', function (param) {
  console.log(param)
});

const remove3 = event.subscribe('123', function (param) {
  console.log(param)
});

event.publish('123', 'test')
