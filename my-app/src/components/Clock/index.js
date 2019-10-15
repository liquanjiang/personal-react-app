import React, {Component} from 'react'
import store from '../../store'
import './clock.css'
import { observer } from 'mobx-react'

 @observer class Clock extends Component {
   constructor (props) {
     super(props)
     this.state = {
       date: new Date(),
       tiger: store.getState()
     }
     store.subscribe(() => {
       this.setState({tiger: store.getState() })
     })
   }

   componentDidMount () {
     this.timer = setInterval(() => {
       this.tick()
     }, 1000)
   }

   componentWillUnmount () {
     clearInterval(this.timer)
   }

   tick () {
     this.setState({
       date: new Date(),
     })
   }

   render () {
     const { tiger } = this.state;
     return (
       <div className={'clocked'}>
         <div>{this.state.date.toLocaleTimeString()}</div>
         <div>{tiger}</div>
       </div>
     )
   }
 }
export default Clock
