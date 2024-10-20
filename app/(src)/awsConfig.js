import AWS from 'aws-sdk';
// Configure the AWS SDK with your credentials and region
AWS.config.update({
  region: 'us-east-2', // e.g., 'us-east-1'
});
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = 'CadenTest';
const getItemsFromDynamoDB = async () => {
  const params = {
    TableName: tableName
    };
    
  try {
    const data = await dynamoDb.scan(params).promise(); // Fetch all items
    if (data.Items && data.Items.length > 0) {
      const names = data.Items.map(item => item.Name); // Extract "Name" attribute
      console.log('Names:', names);
      return names; // Return the names
    } else {
      console.log('No items found');
    }
  } catch (error) {
    console.error('Error fetching items:', error);
  }
};
export default getItemsFromDynamoDB;