/* eslint-disable */
'use strict';

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

require('./src/__generated__/gatsby-types');

const { createPages, onCreateNode, createSchemaCustomization } = require('./src/gatsby-node/index');

exports.createPages = createPages;
exports.onCreateNode = onCreateNode;
exports.createSchemaCustomization = createSchemaCustomization;
