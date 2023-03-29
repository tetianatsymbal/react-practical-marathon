import withLoading from './withLoading';

function EntityDetails({ data: entity, propsToDisplay }) {

  return (
    <div className='center'>
      <h3>{entity.name} Details:</h3>
      {Object.entries(propsToDisplay).map(entry =>
        <div key={entry[1]}> {entry[1]}: <strong>{entity[entry[0]]}</strong></div>
      )}
    </div>
  )
}

export default withLoading(EntityDetails);
