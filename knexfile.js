// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/publications_dev',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/publications_test',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: 'postgres://cmcgggoobuqpip:424b057066f9918fe47c2227316d5ae856612df8a7c8a37413fc9da05a85d06c@ec2-107-22-163-220.compute-1.amazonaws.com:5432/d2vcnn7a479t2e',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
