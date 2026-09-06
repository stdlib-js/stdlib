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
* Return the index of the first element in a single-precision floating-point strided array which is less than a corresponding element in another single-precision floating-point strided array.
*
* @module @stdlib/blas/ext/base/sfirst-index-less-than
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sfirstIndexLessThan = require( '@stdlib/blas/ext/base/sfirst-index-less-than' );
*
* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 1.0, 0.0 ] );
*
* var idx = sfirstIndexLessThan( x.length, x, 1, y, 1 );
* // returns 2
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sfirstIndexLessThan = require( '@stdlib/blas/ext/base/sfirst-index-less-than' );
*
* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 1.0, 0.0 ] );
*
* var idx = sfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // returns 2
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var sfirstIndexLessThan;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	sfirstIndexLessThan = main;
} else {
	sfirstIndexLessThan = tmp;
}


// EXPORTS //

module.exports = sfirstIndexLessThan;

// exports: { "ndarray": "sfirstIndexLessThan.ndarray" }
