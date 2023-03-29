import withLoading from './withLoading';

function EntitiesList({ data: entities, propsToDisplay, onEntityDetailsClick }) {

  return (
    <ul>
      {entities.map(entity =>
        <li key={entity.id}>
          <button onClick={() => onEntityDetailsClick(entity.id)}>👀</button>
          {Object.entries(propsToDisplay).map(entry =>
            <span key={entity[entry[0]]}> {entry[1]}: <strong>{entity[entry[0]]}</strong></span>
          )}
        </li>
      )}
    </ul>
  )
}

export default withLoading(EntitiesList);
