'use strict';

/**
* remark plugin to insert SVG equations into Markdown documents.
*
* @module @stdlib/tools/remark/plugins/remark-svg-equations
*
* @example
* var remark = require( 'remark' );
* var insertEquations = require( '@stdlib/tools/remark/plugins/remark-svg-equations' );
*
* var transform = remark.use( insertEquations ).processSync;
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
