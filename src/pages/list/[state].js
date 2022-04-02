import React from 'react';
import List from '../../templates/List';

function list (props) {
  return <List locales={props.locales}/>;
}

export async function getServerSideProps(context) {
  const ufId = context.query.state
  let locales = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufId}/microrregioes`)
  locales = await locales.json()

  return {
    props: {
      locales
    },
  }
}

export default list;