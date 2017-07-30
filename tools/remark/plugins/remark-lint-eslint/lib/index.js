'use strict';

/**
* Remark lint plugin for linting Markdown code blocks.
*
* @module @stdlib/tools/remark/plugins/remark-lint-eslint
*
* @example
* var remark = require( 'remark' );
* var plugin = require( '@stdlib/tools/remark/plugins/remark-lint-eslint' );
*
* var lint = remark().use( plugin ).processSync;
*
* var vfile = lint( '``` javascript\nvar beep = \'boop\';\n```' );
*/

// MODULES //

var plugin = require( './main.js' );


// EXPORTS //

module.exports = plugin;
