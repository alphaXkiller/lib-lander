import R     from 'ramda'
import React from 'react'
import Axios from 'axios'
import Qs    from 'qs'

const SUBMIT_PATH = 'https://lifeisbeautiful.activehosted.com/proc.php'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      form_value: {
        u: '5',
        f: '5',
        c: '0',
        m: '0',
        act: 'sub',
        v: '2',
        s: '',
        jsonp:true
      }
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const query = Qs.stringify(this.state.form_value)

    Axios.get(
      [SUBMIT_PATH, query].join('?'), { withCredentials: true }
    )
  }


  onChange = e => {
    const name = e.target.name
    const value = e.target.value
    const form_value = R.merge(this.state.form_value, {[name]: value})

    this.setState({form_value})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} noValidate className='form-content'>
        <input type="text" name="firstname" placeholder="First Name*"
          onChange={this.onChange}
        />  
        <input type="text" name="lastname" placeholder="Last Name*"
          onChange={this.onChange}
        />
        <input type="text" name="email" placeholder="your@email.com*"
          onChange={this.onChange}
        />
        <input type="text" name="phone" placeholder="Mobile Phone (Get Pre-Sale SMS!)"
          onChange={this.onChange}
        />
        <span>
          <a 
            href="https://lifeisbeautiful.com/policy.html#sms" 
            target="_blank"
          >
            (Read our phone policy.)
          </a>
        </span>
        <br />
        <div className="_button-wrapper">
          <button type="submit" className="submit_btn">JOIN THE PARTY</button>
        </div>
      </form>
    )
  }
}


export default Form
