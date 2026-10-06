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

var serialize = require( '@stdlib/ndarray/base/serialize-meta-data' );
var getData = require( '@stdlib/ndarray/base/data-buffer' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Subtracts a scalar constant from each element in an input one-dimensional single-precision floating-point ndarray and assigns the results to elements in a one-dimensional single-precision floating-point output ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional output ndarray.
*     -   a zero-dimensional ndarray containing the scalar constant to subtract.
*
* @private
* @param {ArrayLikeObject<Object>} arrays - array-like object containing ndarrays
* @returns {ndarray} output ndarray
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Float32Vector( [ -2.0, 1.0, 3.0, -5.0 ] );
* var w = new Float32Vector( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* var alpha = scalar2ndarray( 5.0, {
*     'dtype': 'float32'
* });
*
* var out = swxsa( [ x, w, alpha ] );
* // returns <ndarray>[ -7.0, -4.0, -2.0, -10.0 ]
*
* var bool = ( out === w );
* // returns true
*/
function swxsa( arrays ) {
	var alpha = arrays[ 2 ];
	var x = arrays[ 0 ];
	var w = arrays[ 1 ];
	addon( getData( x ), serialize( x ), getData( w ), serialize( w ), getData( alpha ), serialize( alpha ) ); // eslint-disable-line max-len
	return w;
}


// EXPORTS //

module.exports = swxsa;
