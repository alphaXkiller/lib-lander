import R            from 'ramda'
import React, { Component } from 'react'
import { connect }  from 'react-redux'

import { Post } from '../../actions/index'
import { createMarkup, loadingLogo } from '../../lib/helpers'

const triggerInstEmbed = () => {
  const script = document.createElement('script')
  script.src = 'https://platform.instagram.com/en_US/embeds.js'
  script.async = true
  script.id = 'embedScript'

  const blockquote = document.createElement('blockquote')
  blockquote.className = 'instagram-media'

  const link = document.createElement('a')
  link.href = 'https://www.instagram.com/p/BS7JvgDlErQ/'
  blockquote.appendChild(link)

  document.body.appendChild(script)
  document.body.appendChild(blockquote)
}

const hasInstBlockquote = R.test(/<blockquote class="instagram-media"/g)

const removeTrigger = () => {
  // remove trigger iframe
  document.getElementById('body').lastChild.remove()
}

class newsPost extends Component {
  constructor(){
    super()
    this.state = {
      runScript : false
    }
  }

  componentDidMount() {
    const keys = {slug: this.props.match.params.slug}
    this.props.fetchPost({keys})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      const keys = {slug: this.props.match.params.slug}
      this.props.fetchPost({keys})
    }

    if (this.props.post.description) {
      // If description has instagram embedded, run the trigger
      if (hasInstBlockquote(this.props.post.description) && !this.state.runScript)
        this.setState({runScript: true}, () => triggerInstEmbed())
      // If the trigger already ran, remove the trigger iframe
      if (this.state.runScript && document.getElementById('body').lastChild.tagName === 'IFRAME') {
        removeTrigger()
      }
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
