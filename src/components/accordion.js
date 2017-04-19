import R     from 'ramda'
import React from 'react'

class Accordion extends React.Component {
  constructor() {
    super()
    this.state = {
      expand: false
    }
  }


  toggleExpand = e => this.setState({expand: !this.state.expand})


  render() {
    return (
      <div className='accordion-lib'>
        <div>
          <div className='small-12 column'>
            <h6>{this.props.title}</h6>
          </div>
          <div className='small-2 column'>
            <button
              style={{width: '100%'}}
              onClick={this.toggleExpand}
            >
              <i className={R.join(' ', [
                'fa fa-2x',
                this.state.expand ? 'fa-angle-down' : 'fa-angle-right '
              ])} 
            />
            </button>
          </div>
        </div>
        <div 
          className={R.join(' ', [
            'accordion-lib-content', 
            this.state.expand ? 'show' : ''
          ])}
        >
          <div className='small-12 column'>
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Accordion
