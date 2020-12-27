import AWS from "aws-sdk";

// AWS assume that we use the same region as the lambda.
// If dynamoDB region is not the same, uncomment:
AWS.config.update({ region: "us-west-2" });
const client = new AWS.DynamoDB.DocumentClient();

export default {
  get: (params) => client.get(params).promise(),
  put: (params) => client.put(params).promise(),
  query: (params) => client.query(params).promise(),
  update: (params) => client.update(params).promise(),
  delete: (params) => client.delete(params).promise(),
};