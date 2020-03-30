// population, currency, exchange rate, geography, etc...

import gql from 'graphql-tag';

export default gql`query {
  countries(where: {name: {eq: $query}}) {
    cities {
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
  }
}`;
