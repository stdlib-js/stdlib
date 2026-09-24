/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Replicate each element in a double-precision floating-point strided array a specified number of times.
*
* @module @stdlib/blas/ext/base/dreplicate
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dreplicate = require( '@stdlib/blas/ext/base/dreplicate' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var out = new Float64Array( 6 );
*
* dreplicate( x.length, 2, x, 1, out, 1 );
* // out => <Float64Array>[ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dreplicate = require( '@stdlib/blas/ext/base/dreplicate' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var out = new Float64Array( 6 );
*
* dreplicate.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
* // out => <Float64Array>[ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dreplicate;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dreplicate = main;
} else {
	dreplicate = tmp;
}


// EXPORTS //

module.exports = dreplicate;

// exports: { "ndarray": "dreplicate.ndarray" }
