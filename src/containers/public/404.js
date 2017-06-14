import R      from 'ramda'
import React, { Component }  from 'react'
import Loader from '../../img/lib_loader.png'

const REDIRECT_PATH = [
  'amazonexclusive',
  'redbullexclusive',
  'partner',
  'titos',
  'zappos',
  'toyota',
  'dosequis'
]
const REDIRECT_LINK = [
  'https://www.ticketfly.com/purchase/event/1477134',
  'https://www.ticketfly.com/purchase/event/1477134',
  'https://www.ticketfly.com/purchase/event/1477134',
  'https://contests.lifeisbeautiful.com/?profile=titos',
  'https://contests.lifeisbeautiful.com/?profile=zappos',
  'https://contests.lifeisbeautiful.com/?profile=toyota',
  'https://contests.lifeisbeautiful.com/?profile=dosequis'
]
const pathname = R.toLower(R.slice(1, Infinity, window.location.pathname))

class NotFound extends React.Component {
  render() {

    console.log(R.indexOf(pathname, REDIRECT_PATH))

    if ( R.indexOf(pathname, REDIRECT_PATH) > -1 ){
      window.location.replace( REDIRECT_LINK[R.indexOf(pathname, REDIRECT_PATH)] )
      return (
        <div className='content content-page 404'>
          <div className='row align-center'>
            <div className='small-14 large-10 large-push-2 column'>
              <div className='row page-title'>
                <h1>Redirecting...</h1>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
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
}




export default NotFound
