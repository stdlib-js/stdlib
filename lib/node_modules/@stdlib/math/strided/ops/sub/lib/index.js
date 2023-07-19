/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Element-wise subtraction of two strided arrays.
*
* @module @stdlib/math/strided/ops/sub
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var sub = require( '@stdlib/math/strided/ops/sub' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );
* // z => <Float64Array>[ -3.0, -1.0, 0.0, -9.0, -1.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var sub = require( '@stdlib/math/strided/ops/sub' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
* // z => <Float64Array>[ -3.0, -1.0, 0.0, -9.0, -1.0 ]
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

// exports: { "ndarray": "main.ndarray" }
