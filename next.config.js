module.exports = {
  serverRuntimeConfig: {
    MONGODB_URI: process.env.MONGODB_URI, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
};
