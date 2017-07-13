import R                        from 'ramda'
import React, { Component }     from 'react'
import { Link }                 from 'react-router-dom'
import { mapIndexed, notEmpty, createMarkup, isSafari } from '../lib/helpers'

import Logo from '../containers/public/logo'
import Form from '../components/form.js'
import SponsorImg from '../img/sponsor-logos.png'
import buyTixGif from '../img/buytickets.gif'
import buyTixPng from '../img/buy_tix.png'
import buySingleDay from '../img/SingleDay_Tickets_5-4.png'


const _renderFirstRow = item => (
  <div key={item.ID} className='row'>
    <section className='section-content section-header'>
      <div className={
        R.join(' ', [
          'columns',
          item.show_form ? 'large-7 hide' : 'large-10 hide',
          item.show_form ? 'large-push-1 hide' : 'large-push-2 hide',
          'medium-14 hide small-14 hide'
        ])
      }>
        <div className="copy-hero">
          <div className="copy">
            <h1 className='pink_on title'>
              {item.title}
            </h1>
            <div dangerouslySetInnerHTML={createMarkup(item.description)} />
          </div>
        </div>
      </div>

      {/* <!-- CTA/FORM BLOCK --> */}
      {
        item.show_form ?
          <div className="columns large-12 large-push-1 medium-14 small-14">
            <div className="row flexy">
              <div className="columns large-5 medium-14 small-14 centered-logo">
                <Logo />
              </div>
              <div className="columns large-8  large-push-1 medium-14 small-14">
                {
                  // <div className="copy-hero">
                  //     <h1 className='pink_on title'>DOWNTOWN LAS VEGAS<br />SEPTEMBER 22-24, 2017</h1>
                  //     <br />
                  //     <div className="_button-wrapper">
                  //       <Link to='/ticket/' className='btn'>BUY TICKETS</Link>
                  //     </div>
                  // </div>
                }
                <div
                  className='copy-hero'
                  dangerouslySetInnerHTML={createMarkup(item.description)}
                />
              </div>
            </div>
          </div>
        : null
      }
      {/* <!-- CTA/FORM BLOCK --> */}

    </section>
    <div className='row parallax show-for-large'>
      <div className='music-icon large-push-7' />
    </div>
  </div>
)
const _renderSecondRow = item => {
  if (item) {
    return(
      <div key={item.ID} className='row featured'>
        <section className='section-content section-main large-14 column'>
          <div className='small-14 large-14 column'>
            <div className='hide-for-small-only large-2 column column-height' />
            <div className='small-14 large-10 column'>
              <div className='row ten-row'>
                <div className='small-full large-4 column title-col'>
                  <div className='vertical-centered-title'>
                    <h1 className='section-title'> {item.title} </h1>
                  </div>
                  <button className='btn-underline default'>
                    <Link to='/lineup' >{item.link_text}</Link>
                    <hr/>
                  </button>
                </div>
                <div className='small-full large-8 column'>
                  <div>
                    <img src={item.image} />
                  </div>
                </div>
              </div>
            </div>
            <div className='large-2 column column-height' />
          </div>
        </section>
      </div>
    )
  } else { return null }
}


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
          <button className='btn-underline default'>
            <a href={item.link}>{item.link_text}</a>
            <hr/>
          </button>
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
            <button className='btn-underline default'>
              <a href={item.link}>{item.link_text}</a>
              <hr className='pink'/>
            </button>
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
          <div className='row parallax show-for-large'>
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
            <div className='row parallax show-for-large'>
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
