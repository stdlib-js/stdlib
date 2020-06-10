/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using Shellsort.
*
* @module @stdlib/blas/ext/base/dsort2sh
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dsort2sh = require( '@stdlib/blas/ext/base/dsort2sh' );
*
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
* var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
*
* dsort2sh( x.length, 1.0, x, 1, y, 1 );
*
* console.log( x );
* // => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dsort2sh = require( '@stdlib/blas/ext/base/dsort2sh' );
*
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
* var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
*
* dsort2sh( x.length, 1.0, x, 1, 0, y, 1, 0 );
*
* console.log( x );
* // => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var dsort2sh = require( './main.js' );


// MAIN //

var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( !(tmp instanceof Error) ) {
	dsort2sh = tmp;
}


// EXPORTS //

module.exports = dsort2sh;
