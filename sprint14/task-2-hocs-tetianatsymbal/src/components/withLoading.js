import { useState, useEffect } from 'react';

const withLoading = (WrappedComponent) => {
  return ({ fetchMethod, params, propsToDisplay, onEntityDetailsClick }) => {
    const [entities, setEntities] = useState(null)

    useEffect(() => {
        fetchMethod(params)
        .then(res => { setEntities(res); console.log('User: ', res) })
    }, [params])
    return (entities ?
      <WrappedComponent
        data={entities}
        propsToDisplay={propsToDisplay}
        onEntityDetailsClick={onEntityDetailsClick}
      /> :
      <p className='center'>Loading...</p>
    )
  }
}
export default withLoading;