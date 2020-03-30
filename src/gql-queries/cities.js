// population, currency, exchange rate, geography, etc...

import gql from 'graphql-tag';

export default gql`query {
  cities(where: { name: {eq: $query}}) {
    name
    country {
      name
      currencies {
        name
      }
      languages {
        name
      }
      population
      continent {
        name
      }
    }
    population
    location {
      lat
      long
    }
  }
}`;
