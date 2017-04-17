import R           from 'ramda'
import Qs          from 'qs'
import React       from 'react'
import { connect } from 'react-redux'
var Packery = require('react-packery-component')(React)

import SelectField from 'material-ui/SelectField'
import MenuItem    from 'material-ui/MenuItem'

import { Vibe } from '../../actions/index'
import {
  mapIndexed,
  notEmpty,
  getNextVibe,
  getPrevVibe,
  getQueryUrl
} from '../../lib/helpers'

const VIBE_PATH = '/vibe'

const packeryOptions = {
  transitionDuration: '0.8s'
}


const _renderFilter = ({categories, onSelect, selected_cat}) => {
  return (
    <div className='row fixed filter-wrapper'>
      <div className='large-7 large-up-3'>
        <div className='column'>
          <SelectField
            className='select-filter select-filter-cat'
            value={selected_cat}
            onChange={onSelect}
            underlineStyle={{display: 'none'}}
            labelStyle={{
              color: 'white',
              paddingLeft: '20px'
            }}
            fullWidth
          >
            {
              R.map(
                cat => <MenuItem
                  key={cat}
                  value={cat}
                  primaryText={cat.toUpperCase()}
                />
              )(categories)
            }
          </SelectField>
        </div>
        <div className='column'>
          <SelectField
            className='select-filter select-filter-tag'
            value={selected_cat}
            onChange={onSelect}
            underlineStyle={{display: 'none'}}
            labelStyle={{
              color: 'white',
              paddingLeft: '20px'
            }}
            fullWidth
          >
            {
              R.map(
                cat => <MenuItem
                  key={cat}
                  value={cat}
                  primaryText={cat.toUpperCase()}
                />
              )(categories)
            }
          </SelectField>
        </div>
        <div className='column'>
          <SelectField
            className='select-filter select-filter-order'
            value={selected_cat}
            onChange={onSelect}
            underlineStyle={{display: 'none'}}
            labelStyle={{
              color: 'white',
              paddingLeft: '20px'
            }}
            fullWidth
          >
            {
              R.map(
                cat => <MenuItem
                  key={cat}
                  value={cat}
                  primaryText={cat.toUpperCase()}
                />
              )(categories)
            }
          </SelectField>
        </div>
      </div>
    </div>
  )
}


const _in_selected_cat = selected_cat => R.compose(
  R.contains(selected_cat),
  R.pluck('slug'),
  R.prop('categories')
)


const _mapData = ({selected_cat, onClick}) => mapIndexed( (item, index) => {
  let hide_class = ''

  // if selected is not 'all' or not in selected cat, hide vibe
  if (selected_cat !== 'all' && !_in_selected_cat(selected_cat)(item))
    hide_class = ' hide'

  return (
  <div key={index} className={'small-full column ' + item.box_size + hide_class}>
    <div className={'column-' + item.box_size}>
      <div
        className='small-full column image'
        onClick={onClick(item)}
      >
        <span className='name'>{item.name}</span>
        <img className={'gutter-' + item.box_gutter} src={item.profile_image} />
      </div>
    </div>
  </div>
  )
})


const _createMarkup = (content) => {
  return {__html: content}
}


const _renderPopover = props => vibe => (
  <div
    key={vibe.ID}
    className={R.join(' ', [
      'twelve-row row fixed overflow-scroll vibe-popover animated',
      props.selected_vibe.ID === vibe.ID ? 'show fadeIn' : ''
    ])}
  >
    <div className='large-10 large-push-2 column vibe-content'>
      <div className='small-14 large-7 column pl-2 pr-2'>
        <div className='title-container'>
          <img src={vibe.profile_image} />
          <h1>{vibe.name}</h1>
        </div>
        <p dangerouslySetInnerHTML={_createMarkup(vibe.description_left)} />
      </div>
      <div className='small-14 large-7 column navigation-btns pl-2 pr-2'>
        <div className='row large-up-3 small-up-3 align-left'>
          <button className='column btn-underline' onClick={props.onClickCancel}>
            <div>
              <i className='fa fa-times fa-lg' /> BACK
              <hr className='pink'/>
            </div>
          </button>
          <button className='column btn-underline' onClick={props.onClickPrev}>
            <div>
              <i className='fa fa-arrow-left fa-lg' /> PREV
              <hr/>
            </div>
          </button>
          <button className='column btn-underline' onClick={props.onClickNext}>
            <div>
              NEXT <i className='fa fa-arrow-right fa-lg' />
              <hr/>
            </div>
          </button>
          {/* <div className='column small-3'/> */}
        </div>
        <div className='row'>
          <p dangerouslySetInnerHTML={_createMarkup(vibe.description_right)} />
        </div>
      </div>
    </div>
  </div>
)


class Lineup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected_cat      : 'all',
      selected_vibe     : {},
      current_vibe_list : []
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (R.isEmpty(prevState.current_vibe_list) && notEmpty(this.props.vibe))
      this.setState({current_vibe_list: this.props.vibe}, () => R.when(
        R.complement(R.isEmpty),
        query => {
          if (query.cat)
            this.setState({current_vibe_list: R.filter(
              _in_selected_cat(query.cat), this.props.vibe)
            })

          if (query.slug)
            this.setState({selected_vibe: R.find(
              R.propEq('slug', query.slug), this.props.vibe)
            })
        }
      )(this.props.query))
  }


  componentDidMount() {
    if (R.isEmpty(this.props.vibe)) {
      this.props.onMount()
    }
  }


  onSelect = (e, index, value) => {
    const current_vibe_list = R.ifElse(
      R.equals('all'),
      R.always(this.props.vibe),
      cat => R.filter(_in_selected_cat(cat))(this.props.vibe)
    )(value)

    this.setState({selected_cat: value, current_vibe_list})
  }


  showDetails = item => e => {
    this.setState({selected_vibe : item}, () => {
      this.props.history.push('/vibe?slug=' + item.slug)

      document.querySelector('body')
        .classList.add('overflow-hidden')

      document
        .querySelector('#content-wrapper')
        .classList.remove('gridSet')
    })
  }


  next = e => this.setState({
    selected_vibe: getNextVibe(
      this.state.current_vibe_list, this.state.selected_vibe
    )
  }, () => this.props.history.push(
    getQueryUrl(VIBE_PATH, R.merge(
      this.props.query, { slug: this.state.selected_vibe.slug }
    )))
  )


  prev = e => this.setState({
    selected_vibe: getPrevVibe(
      this.state.current_vibe_list, this.state.selected_vibe
    )
  }, () => this.props.history.push(
    getQueryUrl(VIBE_PATH, R.merge(
      this.props.query, { slug: this.state.selected_vibe.slug }
    )))
  )


  cancel = e => {
    document
      .querySelector('#content-wrapper')
      .classList.add('gridSet')

    document
      .querySelector('body')
      .classList.remove('overflow-hidden')

    this.setState({selected_vibe: {}}, () => this.props.history.push('/vibe'))
  }


  render() {
    const data = this.props.vibe

    return (
      <div id='vibe-page' className='content'>
        <div className='large-1 columns column-height relative'></div>
        {data ?
          <div className='large-12 columns'>
            {
              R.map(
                _renderPopover({
                  onClickNext      : this.next,
                  onClickPrev      : this.prev,
                  onClickCancel    : this.cancel,
                  selected_vibe  : this.state.selected_vibe
                })
              )(data)
            }
            <div
              className={R.join(' ', [
                'twelve-row row',
                this.state.selected_vibe.ID ? 'blur-10' : ''
              ])}
            >
              <div className='row page-title'>
                <div className='large-7 column'>
                  <h1>VIBE</h1>
                </div>
              </div>
              {
                _renderFilter({
                  categories: this.props.vibe_cats,
                  onSelect: this.onSelect,
                  selected_cat: this.state.selected_cat
                })
              }
              <Packery
                className={'vibe-list'} // default ''
                elementType={'div'} // default 'div'
                options={packeryOptions} // default {}
                disableImagesLoaded={false} // default false
                >
                  {
                    _mapData({
                      selected_cat: this.state.selected_cat,
                      onClick: this.showDetails
                    })(data)
                  }
              </Packery>
            </div>
          </div>
        :null}
        <div className='large-1 columns column-height'></div>
      </div>
    )
  }
}


const _getCats = R.compose(
  R.prepend('all'),
  R.uniq,
  R.flatten,
  R.map(R.pluck('slug')),
  R.pluck('categories'),
)


const mapStateToProps = state => ({
  vibe: R.path(['vibe'])(state),
  vibe_cats: _getCats(state.vibe)
})

const dispatchPropsToState = dispatch => ({
  onMount: () => dispatch(Vibe.fetchProfile())
})


export default connect(mapStateToProps, dispatchPropsToState)(Lineup)
