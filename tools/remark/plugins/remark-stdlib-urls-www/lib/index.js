'use strict';

/**
* remark plugin in order to resolve package identifiers to website URIs.
*
* @module @stdlib/tools/remark/plugins/remark-stdlib-urls-www
*
* @example
* var remark = require( 'remark' );
* var links = require( '@stdlib/tools/remark/plugins/remark-stdlib-urls-www' );
*
* var transform = remark.use( links ).processSync;
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
