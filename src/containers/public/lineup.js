import R           from 'ramda'
import Qs          from 'qs'
import React       from 'react'
import { connect } from 'react-redux'
import { Link }    from 'react-router-dom'
var Packery = require('react-packery-component')(React)


import SelectField from 'material-ui/SelectField'
import MenuItem    from 'material-ui/MenuItem'

import { Lineup } from '../../actions/index'
import FilterOption from '../../constants/filter-option'
import cssColors from '../../constants/cssColors'

import {
  mapIndexed,
  notEmpty,
  getQueryUrl,
  getCompleteList,
  inSelectedCat,
  sortByOption,
  createMarkup,
  isSafari,
  getRandomIntInclusive,
  loadingLogo,
  notNilOrEmpty ,
  getNextVibe,
  getPrevVibe,
  unlockScreen,
  lockScreen
} from '../../lib/helpers'

const LINEUP_PATH    = '/lineup'
const CAT_ALL      = 'all'
const DEFAULT_DAY  = 'all'
const DEFAULT_TAG  = 'all'
const DEFAULT_SORT = FilterOption.Order[0]

const FILTER_NAME = {
  cat: 'Category',
  tag: 'Genre',
  day: 'Day'
}

const packeryOptions = {
  transitionDuration: '0.8s',
  horizontal: true
}

const _renderCat = cat => (
  <MenuItem
    key={cat}
    value={cat}
    primaryText={cat.toUpperCase()}
  />
)


const _renderOptions = (option, index) => (
  <MenuItem
    key={index}
    value={option}
    primaryText={option.toUpperCase()}
    disabled={index === 0}
  />
)

const _renderFilter = ({list, onSelect, selected, class_name}) => (
  <div className='column'>
    <SelectField
      className={ R.join(' ', ['select-filter', class_name]) }
      value={selected}
      onChange={onSelect}
      underlineStyle={{display: 'none'}}
      labelStyle={{
        color: 'white',
        paddingLeft: '20px'
      }}
      fullWidth
    >
      { mapIndexed( _renderOptions )(list) }
    </SelectField>
  </div>
)


const _socialIcons = (value, key, obj) => {
  return(
    <a href={value} key={key} className='column social-icons pink_on' target='_blank'>
      <i className={`fa fa-${key} fa-2x`} />
    </a>
  )
}


const _mapData = ({selected_cat, query}) => mapIndexed( (item, index) => {
  let hide_class = ''
  const artist=item.slug

  // if selected is not 'all' or not in selected cat, hide lineup
  if (selected_cat !== CAT_ALL && !inSelectedCat(selected_cat)(item))
    hide_class = ' hide'
  return (
    <div key={index} className={'artist-name animated zoomIn ' + hide_class}>
      <Link 
        className='animated fadeIn' 
        to={getQueryUrl(LINEUP_PATH, R.merge(query, { artist }))}
      >
        <span className={
          R.join( ' ', [
            'name',
            'link-to-vibe',
            isSafari ? cssColors.colors[getRandomIntInclusive()] + '_safari' : cssColors.colors[getRandomIntInclusive()]]
          )
        }>
          {item.name}
        </span>
      </Link>
      <span className='separator'>/</span>
    </div>
  )
})


const _renderPopover = props => (
  <div
    className={R.join(' ', [
      'row overflow-scroll popover animated show fadeIn',
    ])}
  >
    <div className='large-10 large-push-2 column'>
      <div className='row top-row'>
        <div className='small-14 large-7 column img-container pl-2 pr-2'>
          <div className='title-container' style={{
            background: `url(${props.selected_lineup.profile_image}) center no-repeat`}}
          >
            <h1>{props.selected_lineup.name}</h1>
          </div>
        </div>
        <div className='small-14 large-7 column large-up-3 small-up-3 align-left navigation-btns'>
          <button className='column btn-underline' onClick={props.onClickCancel}>
            <div>
              <i className='fa fa-times fa-lg' /> CLOSE
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
        </div>
      </div>
      <div className='row'>
        <div className='large-2 column large-up-4 small-up-4' style={{marginTop: 40}}>
          {
            props.selected_lineup.social_media ?
              R.compose(
                R.values,
                R.mapObjIndexed(_socialIcons),
                R.filter(R.complement(R.isEmpty))
              )(props.selected_lineup.social_media)
            : null
          }
        </div>
      </div>
      <div className='row'>
        <div className='small-14 large-14 column'>
          <div 
            className='popover-content' 
            dangerouslySetInnerHTML={
              createMarkup(props.selected_lineup.description)
            } 
          />
        </div>
      </div>
    </div>
  </div>
)


class LineupPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      init_loading        : true,
      selected_cat        : props.query.cat ? props.query.cat : FILTER_NAME.cat,
      selected_lineup     : {},
      selected_order      : props.query.sort ? props.query.sort : DEFAULT_SORT,
      selected_tag        : props.query.tag ? props.query.tag : FILTER_NAME.tag,
      selected_day        : props.query.day ? props.query.day : FILTER_NAME.day,
      current_lineup_list : props.lineup
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props
    const { selected_lineup } = this.state
    // First time loading
    if (prevProps.lineup !== this.props.lineup && this.state.init_loading) {
      this.setState({
        current_lineup_list: getCompleteList(this.props.query, this.props.lineup),
        init_loading: false
      })
    }

    // When url query change, recalculate the lineup
    if (!(R.equals(prevProps.query, this.props.query))) {
      this.setState({
        current_lineup_list: getCompleteList(this.props.query, this.props.lineup)
      })
    }


    // 
    if (query.artist !== selected_lineup.slug) {
      this.setState({selected_lineup: R.find(
        R.propEq('slug', this.props.query.artist), this.props.lineup
      )}, () => lockScreen())
    }

    if (!query.artist && prevProps.query.artist) {
      this.setState({selected_lineup: {}}, () => unlockScreen())
    }
  }

  componentDidMount() {
    if (R.isEmpty(this.props.lineup)) {
      this.props.fetchLineup()
    }
  }


  componentWillUnmount () {
    unlockScreen()
  }


  _onSelectFilter = (type, selected_value) => {
    const _all = {
      cat: CAT_ALL,
      tag: DEFAULT_TAG,
      day: DEFAULT_DAY
    }

    this.setState({['selected_' + type]: selected_value}, () => R.ifElse(
      R.equals(_all[type]),
      () => this.props.history.push(
        getQueryUrl(LINEUP_PATH, R.dissoc(type, this.props.query))
      ),
      () => this.props.history.push(
        getQueryUrl(LINEUP_PATH, R.merge(this.props.query, { [type]: selected_value }))
      )
    )(selected_value))
  }


  onSelect = (e, index, value) => {
    const selected_cat = value
    const current_lineup_list = getCompleteList({cat: selected_cat}, this.props.lineup)

    this.setState({selected_cat, current_lineup_list}, () =>
      R.ifElse(
        R.equals(CAT_ALL),
        () => this.props.history.push(getQueryUrl(LINEUP_PATH, R.dissoc(
          'cat', this.props.query
        ))),
        cat => this.props.history.push(getQueryUrl(LINEUP_PATH, R.merge(
          this.props.query, { cat }
        )))
      )(this.state.selected_cat)
    )
  }


  onSelectTag = (e, index, value) => this._onSelectFilter('tag', value)


  onSelectDay = (e, index, value) => this._onSelectFilter('day', value)


  onSelectSort = (e, index, value) => {
    const default_order = FilterOption.Order[1]
    const current_lineup_list = sortByOption(this.state.current_lineup_list)(value)

    this.setState({current_lineup_list, selected_order: value}, () =>
      R.ifElse(
        R.equals(default_order),
        () => this.props.history.push(getQueryUrl(LINEUP_PATH, R.dissoc(
          'sort', this.props.query
        ))),
        sort => this.props.history.push(getQueryUrl(LINEUP_PATH, R.merge(
          this.props.query, { sort }
        )))
      )(value)
    )
  }


  onCancelPopover = () => this.props.history.push(getQueryUrl(
    LINEUP_PATH, R.dissoc('artist', this.props.query)
  ))


  onNext = () => R.compose(
    this.props.history.push,
    artist => getQueryUrl(LINEUP_PATH, R.merge(this.props.query, {artist})),
    R.prop('slug'),
    () => getNextVibe(this.state.current_lineup_list, this.state.selected_lineup)
  )()


  onPrev = () => R.compose(
    this.props.history.push,
    artist => getQueryUrl(LINEUP_PATH, R.merge(this.props.query, {artist})),
    R.prop('slug'),
    () => getPrevVibe(this.state.current_lineup_list, this.state.selected_lineup)
  )()


  render() {
    const data = this.state.current_lineup_list

    return (
       <div className='content'>
        <div className='row align-center'>
          {
            R.and(R.isEmpty(data), this.state.init_loading) ?
              loadingLogo
            : <div className='small-14 large-12 large-push-1 column align-center'>
                <div 
                  className={R.join(' ', [
                    'twelve-row row',
                    notEmpty(this.state.selected_lineup) ? 'blur-10' : ''
                  ])}
                >
                  <div className='row page-title' style={{paddingBottom: 0}}>
                    <div className='large-14 column lineup-title'>
                      <h1 className='large-3 column'>LINEUP</h1>
                      <p className='large-11 column end'>MORE THAN JUST A LINEUP, IT&apos;S A THREE-DAY, MULTISENSORY EXPERIENCE. <br /> Explore the amazing artists, performers, influencers and culinary offerings that make the 2017 Life is Beautiful lineup unforgettable.</p>
                    </div>
                  </div>
                  <div className='row filter-wrapper'>
                    <div className='small-14 small-up-1 medium-up-3'>
                      {
                        _renderFilter({
                          list       : this.props.lineup_days,
                          onSelect   : this.onSelectDay,
                          selected   : this.state.selected_day,
                          class_name : 'select-filter-cat'
                        })
                      }
                      {
                        _renderFilter({
                          list       : this.props.lineup_tags,
                          onSelect   : this.onSelectTag,
                          selected   : this.state.selected_tag,
                          class_name : 'select-filter-tag'
                        })
                      }
                      {
                        _renderFilter({
                          list       : FilterOption.Order,
                          onSelect   : this.onSelectSort,
                          selected   : this.state.selected_order,
                          class_name : 'select-filter-order'
                        })
                      }
                    </div>
                  </div>
                  <div className='lineup-list animated fadeIn'>
                    {
                      R.isEmpty(data) ?
                        <p className='no-result'>NO RESULT FOR THE CURRENT SELECTIONS</p>
                      : _mapData({
                          selected_cat : R.ifElse(
                            R.equals(FILTER_NAME.cat),
                            R.always(CAT_ALL),
                            R.identity
                          )(this.state.selected_cat)
                          ,
                          query: this.props.query
                        })(data)
                    }
                  </div>
                </div>
              </div>
          }
        </div>
        { 
          notNilOrEmpty(this.state.selected_lineup) ?
            _renderPopover({
              selected_lineup: this.state.selected_lineup,
              onClickNext: this.onNext,
              onClickPrev: this.onPrev,
              onClickCancel: this.onCancelPopover
            }) : null
        }
      </div>
    )
  }
}

const _getAllByProp = name => R.compose(
  R.uniq,
  R.flatten,
  R.map(R.pluck('slug')),
  R.pluck(name)
)


const _getCats = R.compose(
  R.concat([FILTER_NAME.cat, CAT_ALL]),
  _getAllByProp('categories')
)


const _getTags = R.compose(
  R.concat([FILTER_NAME.tag, DEFAULT_TAG]),
  _getAllByProp('tags')
)


const mapStateToProps = (state, props) => ({
  lineup: state.lineup,
  lineup_cats: _getCats(state.lineup),
  lineup_tags: _getTags(state.lineup),
  lineup_days: [ 'Day', 'all', 'friday', 'saturday', 'sunday' ]
})


const mapDispatchToProps = (dispatch, getState) => ({
  fetchLineup : () => dispatch(Lineup.fetchLineup())
})


export default connect(mapStateToProps, mapDispatchToProps)(LineupPage)
