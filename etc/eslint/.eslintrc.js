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
eslint.env = require( './env.js' );

/**
* Lint rules.
*
* @name rules
* @memberof eslint
* @type {Object}
*/
eslint.rules = require( './defaults.js' );

/**
* Rules for enabling/disabling ECMA features.
*
* @name ecmaFeatures
* @memberof eslint
* @type {Object}
*/
eslint.ecmaFeatures = require( './ecma_features.js' );


// EXPORTS //

module.exports = eslint;
