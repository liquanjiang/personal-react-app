import React, {Component} from 'react'
import store from '../../store/store'
import './select.css'
import { observer } from 'mobx-react'

@observer class Clock extends Component {

  constructor (props) {
    super(props)
    this.state = {
      array: [
        {
          name: '选项一',
          value: 1
        },
        {
          name: '选项二',
          value: 2
        },
        {
          name: '选项三',
          value: 3
        },
        {
          name: '选项四',
          value: 4,
        },
      ],
      tiger: store.getState(),
      showUl: false,
      selectedValue: 1
    }
    store.subscribe(() => {
      this.setState({tiger: store.getState() })
    })
  }

  componentDidMount () {

  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

    showList = () =>{
      this.setState({showUl: true})
    }

    hideList = () => {
      this.setState({showUl: false})
    }

    selectValue = (value) => {
      this.setState({selectedValue: value, showUl: false})
    }

    render () {
      const { tiger, array, showUl, selectedValue } = this.state;

      const list = array.map((item, index) =>
        <li className={ item.value === selectedValue ? 'active' : ''}
          onClick={() => this.selectValue(item.value)}
        >
          {item.name}
        </li>)

      return (
        <div className={'clock'} tabIndex={-1} onBlur={this.hideList}>
          <div className={'content'} onClick={this.showList}>
            {selectedValue}
            <div className={'triangle'}></div>
          </div>
          { showUl ? <ul>{list}</ul> : null }
        </div>
      )
    }
}

export default Clock
