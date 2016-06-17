'use strict';

/**
* remark plugin to insert rawgit URLs for SVG equations into Markdown HTML equation elements.
*
* @module remark-html-equation-src-urls
*
* @example
* var remark = require( 'remark' );
* var insertURLs = require( 'remark-html-equation-src-urls' );
*
* remark.use( insertURLs );
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
