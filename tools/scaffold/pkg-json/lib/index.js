'use strict';

/**
* Create a `package.json`.
*
* @module @stdlib/tools/scaffold/pkg-json
*
* @example
* var create = require( '@stdlib/tools/scaffold/pkg-json' );
*
* var pkg = create({
*     'name': '@stdlib/math/base/special/erf',
*     'desc': 'Error function.',
*     'keywords': [
*         'math',
*         'mathematics',
*         'error',
*         'function',
*         'erf'
*      ]
* });
*/

// MODULES //

var create = require( './create.js' );


// EXPORTS //

module.exports = create;
