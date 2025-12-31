/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Compute the absolute value.
*
* @module @stdlib/math/special/abs
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var array = require( '@stdlib/ndarray/array' );
* var abs = require( '@stdlib/math/special/abs' );
*
* var x = array( [ [ 1.0, -2.0 ], [ -3.0, 4.0 ] ] );
* // returns <ndarray>
*
* var y = abs( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var javascript = require( './main.js' );


// MAIN //

var main;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( tmp instanceof Error ) {
	main = javascript;
} else {
	main = tmp;
}


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign" }
