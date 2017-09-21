import R      from 'ramda'
import React, { Component }  from 'react'
import Loader from '../../img/lib_loader.png'

class NotFound extends React.Component {
  render() {
    return(
      <div className='content content-page 404'>
        <div className='row align-center'>
          <div className='small-14 large-10 large-push-2 column'>
            <div className='row page-title'>
              <div className='large-7 column'>
                <img src={`/assets/${Loader}`}/>
              </div>
              <div className='large-7 column'>
                <br/><br/><br/><br/>
                <h1>404 page not found</h1>
                <h3>We are sorry but the page you are looking for does not exist.</h3>
              </div>
            </div>
            <div className='row'>
              <div className='large-10 large-push-2 column small-14'>
                { /*<img src={`/assets/${Loader}`}/> */ }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default NotFound
