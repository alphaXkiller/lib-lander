import R           from 'ramda'
import React       from 'react'
import { connect } from 'react-redux'
import { Link }    from 'react-router-dom'

import { News }         from '../../actions/index.js'
import { createMarkup } from '../../lib/helpers.js'


const _renderNewRow = news_list => {
  const news_left = news_list[0]
  const news_right = news_list[1]

  return (
    <div key={news_left.ID} className='row news-row'>
      <div className='large-7 medium-14 small-14 column'>
        <div className='article'>
          <h2 className='planning-title left-title'>
            {
              news_left.is_external_link ?
                <a href={news_left.external_link}>{news_left.title}</a>
              :
                <a href={`/news/${news_left.slug}`}>{news_left.title}</a>
            }
          </h2>
          <div className='planning-img'><img src={news_left.image} /></div>
          <div className='large-12 column end'>
            <p
              dangerouslySetInnerHTML={createMarkup(news_left.excerpt)}
            />
            <button className='btn-underline default'>
              {
                news_left.is_external_link ?
                  <a href={news_left.external_link}>{news_left.link_text}</a>
                :
                  <a href={`/news/${news_left.slug}`}>{news_left.link_text}</a>
              }
              <hr/>
            </button>
          </div>
        </div>
      </div>
      {
        news_right ?
          <div key={news_right.ID} className='large-7 medium-14 small-14 column'>
            <div className='article'>
              <h2 className='planning-title'>
              {
                news_right.is_external_link ?
                  <a href={news_right.external_link}>{news_right.title}</a>
                :
                  <a href={`/news/${news_right.slug}`}>{news_right.title}</a>
              }
              </h2>
              <div className='planning-img'><img src={news_right.image} /></div>
              <div className='large-12 column end'>
                <p
                  dangerouslySetInnerHTML={createMarkup(news_right.excerpt)}
                />
                <button className='btn-underline default'>
                  {
                    news_right.is_external_link ?
                      <a href={news_right.external_link}>{news_right.link_text}</a>
                    :
                      <a href={`/news/${news_right.slug}`}>{news_right.link_text}</a>
                  }
                  <hr className='pink'/>
                </button>
              </div>
            </div>
          </div>
        : null
      }

    </div>
  )
}

class NewsPage extends React.Component {
  componentDidMount() {
    this.props.fetchNews()
  }


  render() {
    return (
      <div className='content'>
        <div className='row align-center'>
          <div className='large-2 column column-height' />
          <div className='small-14 large-12 large-pull-1 column align-center'>
            <div className='row page-title' style={{paddingBottom: 0}}>
              <div className='large-14 column'>
                <h1>NEWS</h1>
                <p>Find out what’s new with Life is Beautiful and what&apos;s happening in Downtown Las Vegas.</p>
              </div>
            </div>
            { R.map(_renderNewRow)(this.props.news) }
          </div>
          <div className='large-2 column column-height' />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  news: R.splitEvery(2, state.news)
})


const mapDispatchToProps = (dispatch, getState) => ({
  fetchNews: () => dispatch(News.fetchNews())
})


export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)
