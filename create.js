import * as uuid from 'uuid';
import handler from "./libs/handler-lib";
import dynamoDB from "./libs/dynamodb-lib";

export const main = handler(async(event, context) => {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.tableName, //Taken from serverless.yml environment section
    Item: {
      // The attributes of the item to be created
      userid: "123", // The id of the author
      noteid: uuid.v1(), // A unique uuid
      content: data.content, // Parsed from request body
      attachment: data.attachment, // Parsed from request body
      createdAt: Date.now(), // Current Unix timestamp
    }
  };

  await dynamoDB.put(params);

  return params.Item;
});
