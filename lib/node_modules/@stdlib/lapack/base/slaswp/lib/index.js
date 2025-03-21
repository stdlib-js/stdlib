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
* LAPACK routine to perform a series of row interchanges on an input matrix.
*
* @module @stdlib/lapack/base/slaswp
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var Float32Array = require( '@stdlib/array/float32' );
* var slaswp = require( '@stdlib/lapack/base/slaswp' );
*
* var IPIV = new Int32Array( [ 2, 0, 1 ] );
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* slaswp( 'row-major', 2, A, 2, 0, 2, IPIV, 1 );
* // A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var slaswp;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	slaswp = main;
} else {
	slaswp = tmp;
}


// EXPORTS //

module.exports = slaswp;
