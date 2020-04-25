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
* BLAS level 1 routine to compute the sum of absolute values.
*
* @module @stdlib/blas/base/sasum
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sasum = require( '@stdlib/blas/base/sasum' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0 ] );
*
* var s = sasum( x.length, x, 1 );
* // returns 15.0
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sasum = require( '@stdlib/blas/base/sasum' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0 ] );
*
* var s = sasum.ndarray( x.length, x, 1, 0 );
* // returns 15.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var sasum = require( './main.js' );


// MAIN //

var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( !(tmp instanceof Error) ) {
	sasum = tmp;
}


// EXPORTS //

module.exports = sasum;
