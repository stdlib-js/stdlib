'use strict';

/**
* remark plugin to insert image equations into Markdown documents.
*
* @module @stdlib/tools/remark/plugins/remark-img-equations
*
* @example
* var remark = require( 'remark' );
* var insertEquations = require( '@stdlib/tools/remark/plugins/remark-img-equations' );
*
* var transform = remark.use( insertEquations ).processSync;
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
