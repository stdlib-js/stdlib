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
eslint.rules = require( './rules' );

/**
* Rules for enabling/disabling language features.
*
* @name ecmaFeatures
* @memberof eslint
* @type {Object}
*/
eslint.ecmaFeatures = require( './features' );


// EXPORTS //

module.exports = eslint;
