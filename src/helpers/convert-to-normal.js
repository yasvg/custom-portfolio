const convertToNormal = (editState) => {
  const newState = JSON.parse(JSON.stringify(editState))
  
  for (const key in newState.pages.byId) {

    newState.pages.byId[key].path = newState.pages.byId[key].path.replace('/edit/', '/');
  }

  return newState
}

export default convertToNormal