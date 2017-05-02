import R            from 'ramda'
import React, { Component } from 'react'
import { connect }  from 'react-redux'

import { Post } from '../../actions/index'
import { createMarkup, loadingLogo } from '../../lib/helpers'


class newsPost extends Component {
  componentDidMount() {
    const keys = {slug: this.props.match.params.slug}
    this.props.fetchPost({keys})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      const keys = {slug: this.props.match.params.slug}
      this.props.fetchPost({keys})
    }
  }

  render() {
    const data = this.props.post
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
                  <div className='featured-image news-post-img' style={{background: `url(${data.image}) center no-repeat` }} />
                  <div className='large-14 column'>
                    <h1 className='news-post-title'>{data.title}</h1>
                  </div>
                </div>
                <div className='row'>
                  <div className='' dangerouslySetInnerHTML={createMarkup(data.description)}></div>
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
  post: R.path(['post'])(state)
})

const mapDispatchToProps = dispatch => ({
  fetchPost: ({keys}) => dispatch(Post.fetchPost({keys}))
})

export default connect(mapStateToProps, mapDispatchToProps)(newsPost)
