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


const _not_in_selected_cat = selected_cat => R.compose(
  R.complement(R.contains(selected_cat)),
  R.pluck('slug'),
  R.prop('categories')
)


const _mapData = selected_cat => mapIndexed( (item, index) => {
  let hide_class = ''

  // if selected is not 'all' or not in selected cat, hide vibe
  if (selected_cat !== 'all' && _not_in_selected_cat(selected_cat)(item))
    hide_class = ' hide'

  return (
  <div key={index} className={'column ' + item.box_size + hide_class}>
    <div className={'column-' + item.box_size}>
      <div className='column image'>
        <span className='name'>{item.name}</span>
        <img className={'gutter-' + item.box_gutter} src={item.profile_image} />
      </div>
    </div>
  </div>
  )
})


class Lineup extends React.Component {
  constructor() {
    super()
    this.state = {
      selected_cat: 'all'
    }
  }

  componentDidMount() {
    if (R.isEmpty(this.props.vibe)) {
      this.props.onMount()
    }
  }


  onSelect = (e, index, value) => {
    this.setState({selected_cat: value})
  }


  render() {
    const data = this.props.vibe

    return (
      <div className='content'>
        <div className='large-1 columns column-height'></div>
        {data ?
          <div className='large-12 columns'>
            <div className='vibe-row row'>
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
                {_mapData(this.state.selected_cat)(data)}
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
