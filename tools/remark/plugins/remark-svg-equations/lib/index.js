'use strict';

/**
* remark plugin to create SVGs for HTML equation tags.
*
* @module remark-svg-equations
*
* @example
* var remark = require( 'remark' );
* var createSVGs = require( 'remark-svg-equations' );
*
* remark.use( createSVGs );
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
