import { combineReducers } from 'redux'

const addColumn = (state, action) => {
  return {
    ...state,
    [action.row]: {
      ...state[action.row],
      cols: [...state[action.row].cols, action.col]
    }
  }
}

const deleteColumn = (state, action) => {
  const newCols = state[action.rowId].cols.filter((colId) => colId !== action.colId)

  if (!newCols.length) {
    return state
  }

  return {
    ...state,
    [action.rowId]: {
      ...state[action.rowId],
      cols: state[action.rowId].cols.filter((colId) => colId !== action.colId)
    }
  }
}

const rowsById = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_ROW':

    return {
      ...state,
      [action.rowId]: {
        cols: [action.colId]
      }
    }
  case 'DELETE_ROW':
    return {
      ...state,
      [action.row]: null
    }
  case 'ADD_COLUMN': return addColumn(state, action)
  case 'DELETE_COLUMN': return deleteColumn(state, action)
  case 'RECEIVE_CONTENT':
    return {
      ...action.content.rows.byId
    }
  default:
    return state
  }
}

const rows = combineReducers({
  byId: rowsById
})

export default rows
