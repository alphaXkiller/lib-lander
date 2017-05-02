import { Post } from '../actions/index'

const reducer = (state = [], action) => {
  switch (action.type) {
    case Post.TYPE.receive:
      return action.payload

    default:
      return state
  }
}

export default reducer
