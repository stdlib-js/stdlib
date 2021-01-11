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
* Round each element in a double-precision floating-point strided array `x` toward negative infinity and assign the results to elements in a double-precision floating-point strided array `y`.
*
* @module @stdlib/math/strided/special/dfloor
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dfloor = require( '@stdlib/math/strided/special/dfloor' );
*
* var x = new Float64Array( [ -1.1, 1.1, 3.8, 4.5, 5.9 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dfloor( x.length, x, 1, y, 1 );
* // y => <Float64Array>[ -2.0, 1.0, 3.0, 4.0, 5.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dfloor = require( '@stdlib/math/strided/special/dfloor' );
*
* var x = new Float64Array( [ -1.1, 1.1, 3.8, 4.5, 5.9 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dfloor.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => <Float64Array>[ -2.0, 1.0, 3.0, 4.0, 5.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var main = require( './main.js' );


// MAIN //

var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( !(tmp instanceof Error) ) {
	main = tmp;
}


// EXPORTS //

module.exports = main;
