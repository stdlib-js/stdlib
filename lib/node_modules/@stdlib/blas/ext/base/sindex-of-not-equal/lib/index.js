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
* Return the first index of an element in a single-precision floating-point strided array which is not equal to a specified search element.
*
* @module @stdlib/blas/ext/base/sindex-of-not-equal
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sindexOfNotEqual = require( '@stdlib/blas/ext/base/sindex-of-not-equal' );
*
* var x = new Float32Array( [ 1.0, 1.0, 0.0, 1.0 ] );
*
* var idx = sindexOfNotEqual( x.length, 1.0, x, 1 );
* // returns 2
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sindexOfNotEqual = require( '@stdlib/blas/ext/base/sindex-of-not-equal' );
*
* var x = new Float32Array( [ 1.0, 1.0, 0.0, 1.0 ] );
*
* var idx = sindexOfNotEqual.ndarray( x.length, 1.0, x, 1, 0 );
* // returns 2
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var sindexOfNotEqual;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	sindexOfNotEqual = main;
} else {
	sindexOfNotEqual = tmp;
}


// EXPORTS //

module.exports = sindexOfNotEqual;

// exports: { "ndarray": "sindexOfNotEqual.ndarray" }
