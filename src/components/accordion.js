import R     from 'ramda'
import React from 'react'

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: props.disabled ? true : false
    }
  }


  toggleExpand = e => this.setState({expand: !this.state.expand})


  render() {
    return (
      <div className='accordion-lib'>
        <div onClick={this.props.disbaled ? null : this.toggleExpand}>
          <div className='large-8 column accordion-toggle'>
            <h2>{this.props.title}</h2>
          </div>
          <div className='large-2 column accordion-toggle arrow'>
            <i className={R.join(' ', [
                'fa' ,
                'fa-2x',
                'animated',
                // this.state.expand ? 'jello fa-angle-down pink-arrow' : 'bounceIn fa-angle-right blue-arrow'
              ])}
            />
          </div>
        </div>
        <div
          className={R.join(' ', [
            'accordion-lib-content',
            this.state.expand ? 'show' : ''
          ])}
        >
          <div className='small-14 column'>
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}

export default Accordion
