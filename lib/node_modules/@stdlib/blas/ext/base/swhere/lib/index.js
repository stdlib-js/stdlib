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
* Take elements from one of two single-precision floating-point strided arrays depending on a condition.
*
* @module @stdlib/blas/ext/base/swhere
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var Float32Array = require( '@stdlib/array/float32' );
* var swhere = require( '@stdlib/blas/ext/base/swhere' );
*
* var condition = new BooleanArray( [ true, false, true ] );
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float32Array( [ 4.0, 5.0, 6.0 ] );
* var out = new Float32Array( [ 0.0, 0.0, 0.0 ] );
*
* swhere( 3, condition, 1, x, 1, y, 1, out, 1 );
* // out => <Float32Array>[ 1.0, 5.0, 3.0 ]
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var Float32Array = require( '@stdlib/array/float32' );
* var swhere = require( '@stdlib/blas/ext/base/swhere' );
*
* var condition = new BooleanArray( [ true, false, true, false ] );
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float32Array( [ 5.0, 6.0, 7.0, 8.0 ] );
* var out = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* swhere.ndarray( 4, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
* // out => <Float32Array>[ 1.0, 6.0, 3.0, 8.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var swhere;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	swhere = main;
} else {
	swhere = tmp;
}


// EXPORTS //

module.exports = swhere;

// exports: { "ndarray": "swhere.ndarray" }
