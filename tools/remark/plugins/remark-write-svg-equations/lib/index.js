'use strict';

/**
* remark plugin to create SVG equation files from Markdown HTML equation tags.
*
* @module @stdlib/tools/remark/plugins/remark-write-svg-equations
*
* @example
* var remark = require( 'remark' );
* var createSVGs = require( '@stdlib/tools/remark/plugins/remark-write-svg-equations' );
*
* var transform = remark.use( createSVGs ).processSync;
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
