'use strict';

/**
* remark plugin to insert HTML equation tags into Markdown documents.
*
* @module @stdlib/tools/remark/plugins/remark-html-equations
*
* @example
* var remark = require( 'remark' );
* var insertEquations = require( '@stdlib/tools/remark/plugins/remark-html-equations' );
*
* var transform = remark.use( insertEquations ).processSync;
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
