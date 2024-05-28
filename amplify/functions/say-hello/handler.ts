import { Handler } from 'aws-lambda';
import { env } from '$amplify/env/say-hello'; // the import is '$amplify/env/<function name>'

export const handler: Handler = async (event, context) => {
  // your function code goes here
  return `Hello, ${env.NAME}!`;
};