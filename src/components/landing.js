import R                        from 'ramda'
import React, { Component }     from 'react'
import { Link }                 from 'react-router-dom'
import { mapIndexed, notEmpty, createMarkup, isSafari } from '../lib/helpers'

import Form         from '../components/form.js'
import SponsorImg   from '../img/sponsor-logos.png'
import buyTixGif    from '../img/buytickets.gif'
import buyTixPng    from '../img/buy_tix.png'
import buySingleDay from '../img/SingleDay_Tickets_5-4.png'
import soldOutImg   from '../img/soldout_stamp_optimized.png'
import pinkBarImg   from '../img/sm_divider.png'
import cssColors    from '../constants/cssColors'

const _replaceClassIfSafari = R.ifElse(
  () => isSafari,
  R.replace('pink_on', 'pink_on_safari'),
  R.identity
)

const _renderFirstRow = item => (
  <div key={item.ID} className='row'>
    <section className='section-header'>
      <a href='http://lineup.lifeisbeautiful.com/'>
        <div className='row' style={{marginBottom: '30px'}}>
          <img
            className='columns large-push-1 large-12 show-for-large'
            src='https://s3.amazonaws.com/lib-wp-library-assets/wp-content/uploads/2017/08/09075312/lineup_full.png'
          />
          <img
            className='columns large-6 large-push-1 small-14 hide-for-large'
            src='https://s3.amazonaws.com/lib-wp-library-assets/wp-content/uploads/2017/08/09064805/lineup1.png' />
          <img
            className='columns large-6 large-pull-1 small-14 hide-for-large'
            src='https://s3.amazonaws.com/lib-wp-library-assets/wp-content/uploads/2017/08/09064807/lineup2.png' />
        </div>
      </a>
      <div className='row'>
        <div className="columns large-12 large-push-1 medium-14 small-14">
          <div
            dangerouslySetInnerHTML={
              createMarkup(_replaceClassIfSafari(item.description))
            }
          />
        </div>
      </div>
      <div className='row'>
        <div className='columns large-push-2 large-10 soldout-headline' >
          <img className='columns large-4 small-5' src={`/assets/${soldOutImg}`}/>
          <div className='columns large-11'>
            <h3>CAN'T MAKE IT THIS YEAR?</h3>
            <div className='context'>
              <div>
                <p>CATCH THE DAILY LIVE STREAM FROM 5PM (PST) ON YAHOO!<br/>& ENTER TO WIN 4 VIP TICKETS + TRAVEL $ FOR NEXT YEAR!</p>
                {
                  <div className='_button-wrapper'>
                    <a href='https://contests.lifeisbeautiful.com/?profile=live-stream' className='btn'>GET ACCESS</a>
                  </div>
                }
              </div>
              <img src={`/assets/${pinkBarImg}`}/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className='row parallax show-for-large hide'>
      <div className='music-icon large-push-7' />
    </div>
  </div>
)


const _renderCenter = item => {
  if (item) {
    return (
      <div className='large-12 column left-col six-row large-push-1'>
        <div className='small-full large-4 column title-left-col'>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <button className='btn-underline default'>
            <a href={item.link}>{item.link_text}</a>
            <hr/>
          </button>
        </div>
        <div className='image'>
          <img src={item.image} />
        </div>
      </div>
    )
  }
}


const _renderLeftPost = item => {
  if (item) {
    return(
      <div key={item.ID} className='large-6 column large-push-1 left-col six-row'>
        <div className='small-full large-4 column title-left-col'>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <a href={item.link}>
            <button className='btn-underline default'>
              {item.link_text}
              <hr/>
            </button>
        </a>
        </div>
        <div className='image'>
          <img
            style={item.title === 'IDEAS' ? {height: '400px'}: null}
            src={item.image} />
        </div>
      </div>
    )
  }
}
const _renderRightPost = item => {
  if (item) {
    return(
      <div key={item.ID} className='large-6 column six-row'>
        <div className='right-col'>
          <div className='small-full large-4 column title-right-col'>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <a href={item.link}>
              <button className='btn-underline default'>
                {item.link_text}
                <hr className='pink'/>
              </button>
            </a>
          </div>
          <div className='small-full large-4 column image-right-col'>
            <img src={item.image} />
          </div>
        </div>
      </div>
    )
  }
}

const _renderTwoColumns = is_last_row => list => {
  if (!is_last_row) {
    return(
      <div className='row'>
        <div className='section-main'>
          <div className='row parallax show-for-large hide'>
            <div className='art-icon large-push-12 column' />
          </div>
          <div className='row'>
            {_renderLeftPost(list[0])}
            {_renderRightPost(list[1])}
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div className='row'>
        <div className='section-content'>
          <div className='row last-row'>
            <div className='row parallax show-for-large hide'>
              <div className='ideas-icon large-push-9 column' />
            </div>
            {_renderLeftPost(list[0])}
            {_renderRightPost(list[1])}
          </div>
        </div>
      </div>
    )

  }
}


const _renderForm = ticket => (
  <div className='row'>
    <div className='section-content'>
      <div className='row ' style={{width: '100%'}}>
        <div className='large-14 small-14 column'>
            {_renderCenter(ticket)}
        </div>
      </div>
    </div>
  </div>
)


const _renderVideo = data => (
  <div className='row homepage-lineup'>
    <div className='section-content'>
      <div className='small-14 large-10 column large-push-2'>
        <iframe
          width='100%'
          style={{height: '80vh'}}
          src={"https://www.youtube.com/embed/"+data.video}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  </div>
)


const HomeContainer = props => {
  const welcomeMessage = props.data[0]
  const elements = R.splitEvery(2, R.slice(1, Infinity, props.data))
  const imgUrl = 'https://s3.amazonaws.com/lib-wp-library-assets/wp-content/uploads/2017/04/24100424/lib_poster_final_web.jpg'
  return notEmpty(props.data) ?
  (
    <div style={{color: 'white'}}>
      { _renderFirstRow(welcomeMessage) }
      { R.map( _renderTwoColumns() )(elements) }
    </div>
  )

  : null
}


export default HomeContainer
