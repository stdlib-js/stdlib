'use strict';

/**
* remark plugin to insert rawgit URLs for equation images into Markdown equation elements.
*
* @module @stdlib/tools/remark/plugins/remark-img-equations-src-urls
*
* @example
* var remark = require( 'remark' );
* var insertURLs = require( '@stdlib/tools/remark/plugins/remark-img-equations-src-urls' );
*
* var transform = remark.use( insertURLs ).processSync;
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
