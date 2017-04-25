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
  loadingLogo
} from '../../lib/helpers'

const LINEUP_PATH    = '/lineup'
const CAT_ALL      = 'all'
const DEFAULT_TAG  = 'all'
const DEFAULT_SORT = FilterOption.Order[0]

const FILTER_NAME = {
  cat: 'category',
  tag: 'Genre'
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

const _mapData = ({selected_cat, onClick}) => mapIndexed( (item, index) => {
  let hide_class = ''

  // if selected is not 'all' or not in selected cat, hide lineup
  if (selected_cat !== CAT_ALL && !inSelectedCat(selected_cat)(item))
    hide_class = ' hide'

  return (
    <div key={index} className={'artist-name animated zoomIn ' + hide_class}>
      {
        item.link.post_name ?
          <Link className='animated fadeIn' to={'/vibe?artist=' + item.link.post_name}>
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
        :
          <span className={
            R.join( ' ', [
              'name',
              isSafari ? cssColors.colors[getRandomIntInclusive()] + '_safari' : cssColors.colors[getRandomIntInclusive()]]
            )
          }>{item.name}</span>

        }
      {/* {
        item.link.post_name ?
          <Link className='bio-link animated fadeIn' to={'/vibe?artist=' + item.link.post_name}>
            <span><i className='fa fa-drivers-license-o fa-md' /> BIO</span>
          </Link>
        : null
      } */}
      <span className='separator'>/</span>
    </div>
  )
})

class LineupPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected_cat      : props.query.cat ? props.query.cat : FILTER_NAME.cat,
      selected_lineup     : {},
      selected_order    : props.query.sort ? props.query.sort : DEFAULT_SORT,
      selected_tag      : props.query.tag ? props.query.tag : FILTER_NAME.tag,
      current_lineup_list : props.lineup
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.lineup !== this.props.lineup) {
      this.setState({
        current_lineup_list: getCompleteList(this.props.query, this.props.lineup)
      })
    }

  }

  componentDidMount() {
    if (R.isEmpty(this.props.lineup)) {
      this.props.fetchLineup()
    }
  }

  onSelect = (e, index, value) => {
    const selected_cat = value
    const current_linueup_list = getCompleteList({cat: selected_cat}, this.props.lineup)

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


  onSelectTag = (e, index, value) => {
    const selected_tag = value
    const current_lineup_list = getCompleteList({tag: selected_tag}, this.props.lineup)

    this.setState({selected_tag, current_lineup_list}, () =>
      R.ifElse(
        R.equals(DEFAULT_TAG),
        () => this.props.history.push(getQueryUrl(LINEUP_PATH, R.dissoc(
          'tag', this.props.query
        ))),
        tag => this.props.history.push(getQueryUrl(LINEUP_PATH, R.merge(
          this.props.query, { tag }
        )))
      )(this.state.selected_tag)
    )
  }


  onSelectSort = (e, index, value) => {
    const default_order = FilterOption.Order[1]
    const current_lineup_list = sortByOption(this.props.lineup)(value)

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


  render() {
    const data = this.state.current_lineup_list

    return (
       <div className='content'>
        <div className='row align-center'>
          {
            R.isEmpty(data) ?
              loadingLogo
            : <div className='small-14 large-10 large-push-2 column align-center'>
                <div className='twelve-row row'>
                  <div className='row page-title' style={{paddingBottom: 0}}>
                    <div className='large-14 column lineup-title'>
                      <h1 className='large-3 column'>LINEUP</h1>
                      <p className='large-11 column end'>MORE THAN JUST A LINEUP, IT'S A THREE-DAY, MULTISENSORY EXPERIENCE. <br /> Explore the amazing artists, performers, influencers and culinary offerings that make the 2017 Life is Beautiful lineup unforgettable.</p>
                    </div>
                  </div>
                  <div className='row filter-wrapper'>
                    <div className='small-14 small-up-2'>
                      {/* {
                        _renderFilter({
                          list       : this.props.lineup_cats,
                          onSelect   : this.onSelect,
                          selected   : this.state.selected_cat,
                          class_name : 'select-filter-cat'
                        })
                      } */}
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
                  {/* <Packery
                    className={'lineup-list'} // default ''
                    elementType={'div'} // default 'div'
                    options={packeryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    > */}
                    <div className='lineup-list animated fadeIn'>
                      {
                        _mapData({
                          selected_cat : R.ifElse(
                            R.equals(FILTER_NAME.cat),
                            R.always(CAT_ALL),
                            R.identity
                          )(this.state.selected_cat),
                          onClick      : this.showDetails
                        })(data)
                      }
                    </div>
                  {/* </Packery> */}
                </div>
              </div>
          }
        </div>
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
  lineup_tags: _getTags(state.lineup)
})


const mapDispatchToProps = (dispatch, getState) => ({
  fetchLineup : () => dispatch(Lineup.fetchLineup())
})


export default connect(mapStateToProps, mapDispatchToProps)(LineupPage)
