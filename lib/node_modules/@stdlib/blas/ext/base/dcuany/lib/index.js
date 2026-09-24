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
* Cumulatively test whether at least one element in a double-precision floating-point strided array is truthy.
*
* @module @stdlib/blas/ext/base/dcuany
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var BooleanArray = require( '@stdlib/array/bool' );
* var dcuany = require( '@stdlib/blas/ext/base/dcuany' );
*
* var x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0 ] );
* var out = new BooleanArray( 4 );
*
* dcuany( x.length, x, 1, out, 1 );
* // out => <BooleanArray>[ false, false, true, true ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var BooleanArray = require( '@stdlib/array/bool' );
* var dcuany = require( '@stdlib/blas/ext/base/dcuany' );
*
* var x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0 ] );
* var out = new BooleanArray( 4 );
*
* dcuany.ndarray( x.length, x, 1, 0, out, 1, 0 );
* // out => <BooleanArray>[ false, false, true, true ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dcuany;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dcuany = main;
} else {
	dcuany = tmp;
}


// EXPORTS //

module.exports = dcuany;

// exports: { "ndarray": "dcuany.ndarray" }
