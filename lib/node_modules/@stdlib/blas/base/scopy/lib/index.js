/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* BLAS level 1 routine to copy values from `x` into `y`.
*
* @module @stdlib/blas/base/scopy
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var scopy = require( '@stdlib/blas/base/scopy' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
*
* scopy( x.length, x, 1, y, 1 );
* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var scopy = require( '@stdlib/blas/base/scopy' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
*
* scopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var scopy = require( './main.js' );


// MAIN //

var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( !(tmp instanceof Error) ) {
	scopy = tmp;
}


// EXPORTS //

module.exports = scopy;
