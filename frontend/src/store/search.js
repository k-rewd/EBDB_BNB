const SEARCH = 'spots/search'

const searchAction = (query) => {
  return {
    type: SEARCH,
    payload:query
}}

export const searchThunk = (query) => async dispatch => {
  const response = await fetch(`/api/spots/search/${query}`)
  // console.log('is it working RESULT', result)
  console.log('is it working QUERY', query)
  console.log('RESPONSE FROM THUNK', response)


  if (response.ok) {
    const result = await response.json()
    
    // dispatch(searchAction(result))
    console.log('FROMTHUNK RESULT', result)

    return result
  }
  return
}