'use strict';

/**
* remark plugin to insert HTML equation tags into Markdown documents.
*
* @module remark-html-equations
*
* @example
* var remark = require( 'remark' );
* var insertEquations = require( 'remark-html-equations' );
*
* remark.use( insertEquations );
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
