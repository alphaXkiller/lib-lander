import R           from 'ramda'
import Qs          from 'qs'
import React       from 'react'
import { connect } from 'react-redux'
var Packery = require('react-packery-component')(React)

import SelectField from 'material-ui/SelectField'
import MenuItem    from 'material-ui/MenuItem'

import { Vibe } from '../../actions/index'
import FilterOption from '../../constants/filter-option.js'
import {
  mapIndexed,
  notEmpty,
  getNextVibe,
  getPrevVibe,
  getQueryUrl,
  getVibeList,
  inSelectedCat,
  sortVibeByOption,
  createMarkup
} from '../../lib/helpers'

const VIBE_PATH    = '/vibe'
const CAT_ALL      = 'all'
const DEFAULT_TAG  = 'all'
const DEFAULT_SORT = FilterOption.Order[0]

const FILTER_NAME = {
  cat: 'by category',
  tag: 'by tag'
}

const packeryOptions = {
  transitionDuration: '0.8s'
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

  // if selected is not 'all' or not in selected cat, hide vibe
  if (selected_cat !== CAT_ALL && !inSelectedCat(selected_cat)(item))
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
        <p dangerouslySetInnerHTML={createMarkup(vibe.description_left)} />
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
          <p dangerouslySetInnerHTML={createMarkup(vibe.description_right)} />
        </div>
      </div>
    </div>
  </div>
)


class Lineup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected_cat      : props.query.cat ? props.query.cat : FILTER_NAME.cat,
      selected_vibe     : {},
      selected_order    : props.query.sort ? props.query.sort : DEFAULT_SORT,
      selected_tag      : props.query.tag ? props.query.tag : FILTER_NAME.tag,
      current_vibe_list : props.vibe
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.vibe !== this.props.vibe)
      this.setState({
        current_vibe_list: getVibeList(this.props.query, this.props.vibe),
        selected_vibe: this.props.query.artist ? R.find(
          R.propEq('slug', this.props.query.artist), this.props.vibe
        ) : {}
      })
  }


  componentDidMount() {
    if (R.isEmpty(this.props.vibe)) {
      this.props.onMount()
    }
  }


  onSelect = (e, index, value) => {
    const selected_cat = value
    const current_vibe_list = getVibeList({cat: selected_cat}, this.props.vibe)

    this.setState({selected_cat, current_vibe_list}, () =>
      R.ifElse(
        R.equals(CAT_ALL),
        () => this.props.history.push(getQueryUrl(VIBE_PATH, R.dissoc(
          'cat', this.props.query
        ))),
        cat => this.props.history.push(getQueryUrl(VIBE_PATH, R.merge(
          this.props.query, { cat }
        )))
      )(this.state.selected_cat)
    )
  }


  onSelectTag = (e, index, value) => {
    const selected_tag = value
    const current_vibe_list = getVibeList({tag: selected_tag}, this.props.vibe)

    this.setState({selected_tag, current_vibe_list}, () =>
      R.ifElse(
        R.equals(DEFAULT_TAG),
        () => this.props.history.push(getQueryUrl(VIBE_PATH, R.dissoc(
          'tag', this.props.query
        ))),
        tag => this.props.history.push(getQueryUrl(VIBE_PATH, R.merge(
          this.props.query, { tag }
        )))
      )(this.state.selected_tag)
    )
  }


  onSelectSort = (e, index, value) => {
    const default_order = FilterOption.Order[1]
    const current_vibe_list = sortVibeByOption(this.props.vibe)(value)

    this.setState({current_vibe_list, selected_order: value}, () =>
      R.ifElse(
        R.equals(default_order),
        () => this.props.history.push(getQueryUrl(VIBE_PATH, R.dissoc(
          'sort', this.props.query
        ))),
        sort => this.props.history.push(getQueryUrl(VIBE_PATH, R.merge(
          this.props.query, { sort }
        )))
      )(value)
    )
  }


  showDetails = item => e => {
    this.setState({selected_vibe : item}, () => {
      this.props.history.push(getQueryUrl(VIBE_PATH, R.merge(
        this.props.query, { artist: item.slug }
      )))

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
      this.props.query, { artist: this.state.selected_vibe.slug }
    )))
  )


  prev = e => this.setState({
    selected_vibe: getPrevVibe(
      this.state.current_vibe_list, this.state.selected_vibe
    )
  }, () => this.props.history.push(
    getQueryUrl(VIBE_PATH, R.merge(
      this.props.query, { artist: this.state.selected_vibe.slug }
    )))
  )


  cancel = e => {
    document
      .querySelector('#content-wrapper')
      .classList.add('gridSet')

    document
      .querySelector('body')
      .classList.remove('overflow-hidden')

    this.setState({selected_vibe: {}}, () => this.props.history.push(
      getQueryUrl(VIBE_PATH, R.dissoc('artist', this.props.query))
    ))
  }


  render() {
    const data = this.state.current_vibe_list

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
              <div className='row fixed filter-wrapper'>
                <div className='large-7 small-up-3'>
                  {
                    _renderFilter({
                      list       : this.props.vibe_cats,
                      onSelect   : this.onSelect,
                      selected   : this.state.selected_cat,
                      class_name : 'select-filter-cat'
                    })
                  }
                  {
                    _renderFilter({
                      list       : this.props.vibe_tags,
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
              <Packery
                className={'vibe-list'} // default ''
                elementType={'div'} // default 'div'
                options={packeryOptions} // default {}
                disableImagesLoaded={false} // default false
                >
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
              </Packery>
            </div>
          </div>
        :null}
        <div className='large-1 columns column-height'></div>
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


const mapStateToProps = state => ({
  vibe: R.path(['vibe'])(state),
  vibe_cats: _getCats(state.vibe),
  vibe_tags: _getTags(state.vibe)
})

const dispatchPropsToState = dispatch => ({
  onMount: () => dispatch(Vibe.fetchProfile())
})


export default connect(mapStateToProps, dispatchPropsToState)(Lineup)
