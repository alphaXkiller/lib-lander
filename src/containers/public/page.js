import R from 'ramda'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import NotFound                      from './404.js'
import { PageActions }               from '../../actions/index'
import { createMarkup, loadingLogo } from '../../lib/helpers'

class Page extends Component {
  componentDidMount() {
    const keys = {slug: this.props.match.params.slug}
    this.props.onMount({keys})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      const keys = {slug: this.props.match.params.slug}
      this.props.onMount({keys})
    }
  }

  render() {
    const data = this.props.page
    const err_status = R.path(['error', 'status'])(this.props.page)

    if (err_status === 404)
      return <NotFound />
    else
      return(
        <div className='content content-pages'>
          {
            R.isEmpty(data) ?
              loadingLogo
            :
              <div className='row align-center'>
                <div className='large-2 column column-height' />
                <div className='small-14 large-10 column align-center'>
                  <div className='row page-title'>
                    <div className='large-7 column'>
                      <h1>{data.title}</h1>
                    </div>
                  </div>
                  {
                    data.feature_image ?
                      <div className='row'>
                        <div className='featured-image' style={{background: `url(${data.feature_image}) center no-repeat` }} />
                      </div>
                    : null
                  }
                  <div className='row'>
                    <div className='column-two' dangerouslySetInnerHTML={createMarkup(data.content)}></div>
                  </div>
                </div>
                <div className='large-2 column column-height' />
              </div>
          }
        </div>
      )
  }
}

const mapStateToProps = state => ({
  page: R.path(['page'])(state)
})

const mapDispatchToProps = dispatch => ({
  onMount: ({keys}) => {
    dispatch(PageActions.fetchPage({keys}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
