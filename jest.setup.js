/** @type {import('jest').Config} */
import '@testing-library/jest-dom/extend-expect';
require('jest-fetch-mock').enableMocks();
const config = {
    verbose: true,
  };
  
module.exports = config;