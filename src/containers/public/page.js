import R from 'ramda'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PageActions } from '../../actions/index'
import { createMarkup } from '../../lib/helpers'

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
    return(
      <div className='content'>
        <div className='row align-center'>
          <div className='large-2 column column-height' />
          <div className='small-10 column align-center'>
            <div className='row page-title'>
              <div className='large-7 column'>
                <h1>{data.title}</h1>
              </div>
            </div>
            <div className='row'>
              <div className='featured-image' style={{background: `url(${data.feature_image}) center no-repeat` }} />
            </div>
            <div className='row'>
              <div className='page-content' dangerouslySetInnerHTML={createMarkup(data.content)}></div>
            </div>
          </div>
          <div className='large-2 column column-height' />
        </div>
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