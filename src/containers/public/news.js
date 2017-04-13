import R     from 'ramda'
import React from 'react'

class NewsPage extends React.Component {
  render() {
    return (
      <div className='content'>
        <div className='row page-title'> 
          <div className='large-2 columns column-height' />
          <h1 className='large-12 columns'>NEWS</h1>
          <div className='large-2 columns column-height' />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({})


const mapDispatchToProps = (dispatch, getState) => ({})


export default NewsPage
