'use strict';

/**
* remark plugin to create SVG equation files from Markdown HTML equation tags.
*
* @module remark-write-svg-equations
*
* @example
* var remark = require( 'remark' );
* var createSVGs = require( 'remark-write-svg-equations' );
*
* remark.use( createSVGs );
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
