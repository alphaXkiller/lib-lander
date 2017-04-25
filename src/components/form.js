import R         from 'ramda'
import React     from 'react'
import Axios     from 'axios'
import Qs        from 'qs'
import Validator from 'validator'

const SUBMIT_PATH = 'https://lifeisbeautiful.activehosted.com/proc.php'


const _checkInputs = values => {
  const err = {}

  Validator.isAlpha(values.firstname) ? true : err.firstname = 'Invalid First Name'
  Validator.isAlpha(values.lastname) ? true : err.lastname = 'Invalid Last Name'
  Validator.isEmail(values.email) ? true : err.email = 'Invalid Email'

  return err
}


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
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        jsonp:true
      },
      form_error: {},
      submitted: false
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const validate_err = _checkInputs(this.state.form_value)
    const query = Qs.stringify(this.state.form_value)

    if (R.isEmpty(validate_err)) {
      Axios.get([SUBMIT_PATH, query].join('?'))
      this.setState({
        form_error: {},
        submitted: true
      })
    }
    else
      this.setState({form_error: validate_err})
  }


  onChange = e => {
    const name = e.target.name
    const value = e.target.value
    const form_value = R.merge(this.state.form_value, {[name]: value})

    this.setState({form_value})
  }

  render() {
    const err = this.state.form_error

    if (this.state.submitted)
      return <p>Congratulations, you're on the list!'</p>
    else
      return (
        <form 
          onSubmit={this.onSubmit} 
          noValidate 
          className='form-content'
          style={{marginTop: '20px'}}
        >
          <div className='row'>
            <div
              className='small-7 column'
            >
              <input 
                type="text" 
                name="firstname" 
                placeholder="First Name*"
                onChange={this.onChange}
              />  
            { err.firstname ? <p className='err-msg'>{err.firstname}</p> : null}
            </div>
            <div
              className='small-7 column'
            >
              <input 
                type="text" 
                name="lastname" 
                placeholder="Last Name*"
                onChange={this.onChange}
              />
              { err.lastname ? <p className='err-msg'>{err.lastname}</p> : null }
            </div>
          </div>
          <input type="text" name="email" placeholder="your@email.com*"
            onChange={this.onChange}
          />
          { err.email ? <p className='err-msg'>{err.email}</p> : null }
          <input type="text" name="phone" placeholder="Mobile Phone (Get On Sale SMS!)"
            onChange={this.onChange}
          />
          <span>
            <a 
              href="https://lifeisbeautiful.com/policy.html#sms" 
              target="_blank"
              style={{
                float: 'right',
                fontSize: '0.75rem',
                color: 'white',
                letterSpacing: '0px'
              }}
            >
              (Read our phone policy.)
            </a>
          </span>
          <br />
          <div className="_button-wrapper">
            <button type="submit" className="submit_btn">REMIND ME</button>
          </div>
        </form>
      )
  }
}


export default Form
