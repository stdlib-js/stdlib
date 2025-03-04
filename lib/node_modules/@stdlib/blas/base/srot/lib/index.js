/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* BLAS level 1 routine to apply a plane rotation.
*
* @module @stdlib/blas/base/srot
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var srot = require( '@stdlib/blas/base/srot' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
*
* srot( x.length, x, 1, y, 1, 0.8, 0.6 );
* // x => <Float32Array>[ ~4.4, ~5.8, ~7.2, ~8.6, 10.0 ]
* // y => <Float32Array>[ ~4.2, ~4.4, ~4.6, ~4.8, 5.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var srot = require( '@stdlib/blas/base/srot' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* srot.ndarray( 2, x, 2, 2, y, 2, 2, 0.8, 0.6 );
* // x => <Float32Array>[ 1.0, 2.0, ~7.8, 4.0, ~10.6, 6.0 ]
* // y => <Float32Array>[ 7.0, 8.0, ~5.4, 10.0, ~5.8, 12.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var srot;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	srot = main;
} else {
	srot = tmp;
}


// EXPORTS //

module.exports = srot;

// exports: { "ndarray": "srot.ndarray" }
