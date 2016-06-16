'use strict';

/**
* remark plugin to insert rawgit URLs for SVG equations.
*
* @module remark-src-urls
*
* @example
* var remark = require( 'remark' );
* var insertURLs = require( 'remark-src-urls' );
*
* remark.use( insertURLs );
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
