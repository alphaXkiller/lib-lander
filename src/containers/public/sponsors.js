import R from 'ramda'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sponsors } from '../../actions/index'
import { loadingLogo } from '../../lib/helpers'

class SponsorsContainer extends Component {
  componentDidMount() {
    this.props.fetchSponsors()
  }

  render() {
    const sponsors = this.props.sponsors
    return(
      <div className='content content-pages'>
        {
          R.isEmpty(sponsors) ?
            loadingLogo
          :
            <div className='row align-center'>
              <div className='small-14 large-10 large-push-2 column align-center'>
                <div className='row page-title'>
                  <div className='large-7 column'>
                    <h1>SPONSORS</h1>
                  </div>
                </div>
                <div className='row twelve-row'>
                  <div className='large-12 column'>
                    {
                      R.map( sponsor =>
                        <div key={sponsor.ID} className='large-3 small-6 column sponsor-img'>
                          {
                            sponsor.url ?
                              <a href={sponsor.url} target="_blank">
                                <img src={sponsor.logo} />
                              </a>
                            :
                              <img src={sponsor.logo} />
                          }
                        </div>
                      )(sponsors)
                    }
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sponsors: R.path(['sponsors'])(state)
})

const mapDispatchToProps = dispatch => ({
  fetchSponsors: () => dispatch(Sponsors.fetchSponsors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SponsorsContainer)
