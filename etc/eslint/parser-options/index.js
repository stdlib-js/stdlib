'use strict';

/**
* ESLint parser options.
*
* @namespace options
*/
var options = {};

/**
* ECMAScript version.
*
* @name version
* @memberof options
* @type {number}
*/
options.version = require( './version.js' );

/**
* Source type.
*
* @name sourceType
* @memberof options
* @type {string}
*/
options.sourceType = require( './source_type.js' );

/**
* Language features.
*
* @name ecmaFeatures
* @memberof options
* @type {Object}
*/
options.ecmaFeatures = require( './features.js' );


// EXPORTS //

module.exports = options;
