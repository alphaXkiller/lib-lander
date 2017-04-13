import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
var Packery = require('react-packery-component')(React)

import SelectField from 'material-ui/SelectField'
import MenuItem    from 'material-ui/MenuItem'

import { Vibe } from '../../actions/index'
import { mapIndexed, notEmpty } from '../../lib/helpers'

const packeryOptions = {
  transitionDuration: '0.8s'
}


const _getVibeIdByDirection = (vibe, current_id, direction) => R.compose(
  index => R.ifElse(
    R.isNil,
    () => R.ifElse(
      R.equals(-1),
      R.always(R.compose(R.prop('ID'), R.last)(vibe)),
      R.always(vibe[0].ID)
    )(index),
    R.prop('ID')
  )(vibe[index]),
  index => R.ifElse(
    R.equals('next'),
    () => R.inc(index),
    () => R.dec(index)
  )(direction),
  R.findIndex(R.propEq('ID', current_id))
)(vibe)


const _renderFilter = ({categories, onSelect, selected_cat}) => {
  return (
    <SelectField
      floatingLabelText='Category'
      value={selected_cat}
      onChange={onSelect}
    >
      {
        R.map(
          cat => <MenuItem
            key={cat} value={cat} primaryText={cat.toUpperCase()}
          />
        )(categories)
      }
    </SelectField>
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
        onClick={onClick(item.ID)}
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
      props.selected_vibe_id === vibe.ID ? 'show fadeIn' : ''
    ])}
  >
    <div className='small-13 large-10 large-push-1 column vibe-content'>
      <div className='small-14 large-6 column'>
        <div className='title-container'>
          <img src={vibe.profile_image} />
          <h1>{vibe.name}</h1>
        </div>
        <p dangerouslySetInnerHTML={_createMarkup(vibe.description_left)} />
      </div>
      <div className='small-14 large-6 column navigation-btns'>
        <div className='row large-up-3 small-up-3 align-left'>
          <button className='column' onClick={props.onClickCancel}>
            <i className='fa fa-times fa-lg' /> BACK
          </button>
          <button className='column' onClick={props.onClickPrev}>
            <i className='fa fa-arrow-left fa-lg' /> PREV
          </button>
          <button className='column' onClick={props.onClickNext}>
            NEXT <i className='fa fa-arrow-right fa-lg' />
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
      selected_vibe_id  : null,
      current_vibe_list : []
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (R.isEmpty(prevState.current_vibe_list) && notEmpty(this.props.vibe))
      this.setState({current_vibe_list: this.props.vibe})
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


  showDetails = id => e => {
    this.setState({selected_vibe_id : id}, () => {
      document.querySelector('body')
        .classList.add('overflow-hidden')

      document
        .querySelector('#content-wrapper')
        .classList.remove('gridSet')
    })
  }


  next = e => this.setState({
    selected_vibe_id: _getVibeIdByDirection(
      this.state.current_vibe_list, this.state.selected_vibe_id, 'next'
    )
  })


  prev = e => this.setState({
    selected_vibe_id: _getVibeIdByDirection(
      this.state.current_vibe_list, this.state.selected_vibe_id, 'prev'
    )
  })


  cancel = e => {
    document
      .querySelector('#content-wrapper')
      .classList.add('gridSet')

    document
      .querySelector('body')
      .classList.remove('overflow-hidden')

    this.setState({selected_vibe_id: null})
  }


  render() {
    const data = this.props.vibe

    return (
      <div id='vibe-page' className='content'>
        <div className='row page-title'> 
          <div className='large-1 columns column-height' />
          <h1 className='large-12 columns'>Vibe</h1>
          <div className='large-1 columns column-height' />
        </div>
        <div className='large-1 columns column-height relative'></div>
        {data ?
          <div className='large-12 columns'>
            {
              R.map(
                _renderPopover({
                  onClickNext      : this.next,
                  onClickPrev      : this.prev,
                  onClickCancel    : this.cancel,
                  selected_vibe_id : this.state.selected_vibe_id
                })
              )(data)
            }
            <div
              className={R.join(' ', [
                'twelve-row row',
                this.state.selected_vibe_id ? 'blur-10' : ''
              ])}
            >
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
