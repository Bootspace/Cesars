const { createClient } = require('redis');

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

client.on('ready', () => {
  console.log('Redis client is ready');
  // Now you can use the client for database operations
});

client.on('end', () => {
  console.log('Connection to Redis server has ended');
});

module.exports = client;
