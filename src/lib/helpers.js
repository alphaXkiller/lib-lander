import R  from 'ramda'
import Qs from 'qs'

const notEmpty = R.complement(R.isEmpty)


const notNil = R.complement(R.isNil)


const notNilOrEmpty = R.complement(R.either(R.isNil, R.isEmpty))


const notEquals = R.curry((a, b) => R.complement(R.equals(a))(b))


const nilOrEmpty = R.either(R.isNil, R.isEmpty)


const mapIndexed = R.addIndex(R.map)


const getNextVibe = (list, current_vibe) => R.compose(
  next_index => R.when(
    R.isNil,
    R.always(R.head(list))
  )(list[next_index]),
  R.inc,
  R.findIndex(R.propEq('ID', current_vibe.ID))
)(list)


const getPrevVibe = (list, current_vibe) => R.compose(
  prev_index => R.when(
    R.isNil,
    R.always(R.last(list))
  )(list[prev_index]),
  R.dec,
  R.findIndex(R.propEq('ID', current_vibe.ID))
)(list)


const getQueryUrl = (path, query) => path + '?' + Qs.stringify(query)


const inSelectedCat = selected_cat => R.compose(
  R.contains(selected_cat),
  R.pluck('slug'),
  R.prop('categories')
)


const getVibeList = (query, list) => R.ifElse(
  R.isEmpty,
  R.always(list),
  _query => R.filter(R.allPass([
    obj => _query.selected_cat ? inSelectedCat(query.selected_cat)(obj) : R.T,
  ]))(list)
)(query)


export {
  notEmpty,
  notNil,
  notEquals,
  nilOrEmpty,
  notNilOrEmpty,
  mapIndexed,

  getNextVibe,
  getPrevVibe,
  getQueryUrl,
  getVibeList,
  inSelectedCat 
}
