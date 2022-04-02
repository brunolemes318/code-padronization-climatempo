import React from 'react';

function List(props) {
  const cities = props.locales
  return (
    <React.Fragment>
      <ul>
      {
        cities.map((element, index) => (
          <li key={index}>{ element.nome }</li>
        ))
      }
      </ul>
    </React.Fragment>
  );
}

export default List;