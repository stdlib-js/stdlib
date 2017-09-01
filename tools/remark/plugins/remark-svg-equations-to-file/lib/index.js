'use strict';

/**
* remark plugin to create SVG equation files from Markdown equation comments.
*
* @module @stdlib/tools/remark/plugins/remark-svg-equations-to-file
*
* @example
* var remark = require( 'remark' );
* var createSVGs = require( '@stdlib/tools/remark/plugins/remark-svg-equations-to-file' );
*
* var transform = remark.use( createSVGs ).process;
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
