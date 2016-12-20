'use strict';

/**
* ESLint configuration.
*
* @namespace eslint
*/
var eslint = {};

/**
* Default environments.
*
* @name env
* @memberof eslint
* @type {Object}
*/
eslint.env = require( './eslint/env.js' );

/**
* Lint rules.
*
* @name rules
* @memberof eslint
* @type {Object}
*/
eslint.rules = require( './eslint' );

/**
* Rules for enabling/disabling ECMA features.
*
* @name ecmaFeatures
* @memberof eslint
* @type {Object}
*/
eslint.ecmaFeatures = require( './eslint/ecma_features.js' );


// EXPORTS //

module.exports = eslint;
