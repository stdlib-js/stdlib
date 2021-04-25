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

// MODULES //

var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var serialize = require( '@stdlib/ndarray/base/serialize-meta-data' );
var copy = require( '@stdlib/utils/copy' );
var addon = require( './../src/addon.node' );
var TABLE = require( './table.js' );


// VARIABLES //

var table = copy( TABLE, 1 );
var js = table.ndarray;
table.ndarray = unary;


// FUNCTIONS //

/**
* Applies a unary function to an input ndarray and assigns results to an output ndarray.
*
* @private
* @param {ndarray} x - input array
* @param {ndarray} y - output array
* @returns {ndarray} output array
*/
function unary( x, y ) {
	var xdata = x.data;
	var ydata = y.data;

	// WARNING: we assume that, if we're provided something which has a data buffer resembling a typed array, we're provided a typed ndarray buffer; however, this can lead to potential unintended errors as the native add-on cannot work with non-typed array objects (e.g., generic arrays)...
	if ( !( isTypedArrayLike( xdata ) && isTypedArrayLike( ydata ) ) ) {
		return js( x, y );
	}
	addon( xdata, serialize( x ), ydata, serialize( y ) );
	return y;
}


// EXPORTS //

module.exports = table;
