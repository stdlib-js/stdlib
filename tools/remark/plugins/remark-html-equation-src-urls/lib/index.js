'use strict';

/**
* remark plugin to insert SVG equation rawgit URLs into Markdown HTML equation elements.
*
* @module @stdlib/tools/remark/plugins/remark-html-equation-src-urls
*
* @example
* var remark = require( 'remark' );
* var insertURLs = require( '@stdlib/tools/remark/plugins/remark-html-equation-src-urls' );
*
* var transform = remark.use( insertURLs ).processSync;
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
