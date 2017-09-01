'use strict';

/**
* remark plugin in order to resolve package identifiers to repository URIs.
*
* @module @stdlib/tools/remark/plugins/remark-stdlib-urls-github
*
* @example
* var remark = require( 'remark' );
* var links = require( '@stdlib/tools/remark/plugins/remark-stdlib-urls-github' );
*
* var transform = remark.use( links ).processSync;
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
