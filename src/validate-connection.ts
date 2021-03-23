import { CherrytwistClient } from './CherrytwistClient';

const main = async () => {
  const ctClient = new CherrytwistClient({
    graphqlEndpoint: 'http://localhost:4000/graphql',
    accessToken: 'notSet',
  });
  await ctClient.validateConnection();
};

try {
  main();
} catch (error) {
  console.error(error);
}
