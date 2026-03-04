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

// MODULES //

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var serialize = require( '@stdlib/ndarray/base/serialize-meta-data' );
var getData = require( '@stdlib/ndarray/base/data-buffer' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the sum of all elements in a one-dimensional single-precision complex floating-point ndarray.
*
* @private
* @param {ArrayLikeObject<Object>} arrays - array-like object containing an input ndarray
* @returns {Complex64} sum
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = new Complex64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
* var x = new ndarray( 'complex64', xbuf, [ 2 ], [ 1 ], 0, 'row-major' );
*
* var v = csum( [ x ] );
* // returns <Complex64>[ 5.0, 5.0 ]
*/
function csum( arrays ) {
	var x = arrays[ 0 ];
	var o = addon( reinterpret( getData( x ), 0 ), serialize( x ) );
	return new Complex64( o.re, o.im );
}


// EXPORTS //

module.exports = csum;
