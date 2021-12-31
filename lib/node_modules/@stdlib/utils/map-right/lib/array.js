/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// MAIN //

/**
* Applies a function to each element in an array and assigns the result to an element in an output array, iterating from right to left.
*
* @private
* @param {Object} x - object containing input array data
* @param {ArrayLikeObject} x.data - input array data
* @param {Function} x.getter - callback for accessing input array data elements
* @param {Object} y - object containing output array data
* @param {ArrayLikeObject} y.data - output array data
* @param {Function} y.setter - callback for setting output array data elements
* @param {Function} fcn - function to apply
* @param {*} thisArg - function execution context
* @returns {void}
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
*
* // Define getters and setters:
* function getter( buf, idx ) {
*     return buf[ idx ];
* }
*
* function setter( buf, idx, value ) {
*     buf[ idx ] = value;
* }
*
* // Create the input and output array objects:
* var x = {
*     'data': [ -1, -2, -3, -4, -5, -6 ],
*     'getter': getter
* };
* var y = {
*     'data': [ 0, 0, 0, 0, 0, 0 ],
*     'setter': setter
* };
*
* mapRight( x, y, naryFunction( abs, 1 ) );
*
* var data = y.data;
* // returns [ 1, 2, 3, 4, 5, 6 ]
*/
function mapRight( x, y, fcn, thisArg ) {
	var xbuf;
	var ybuf;
	var get;
	var set;
	var i;

	// Cache references to the input and output data:
	xbuf = x.data;
	ybuf = y.data;

	// Cache accessors:
	get = x.getter;
	set = y.setter;

	// Iterate over each element...
	for ( i = xbuf.length-1; i >= 0; i-- ) {
		set( ybuf, i, fcn.call( thisArg, get( xbuf, i ), i, xbuf ) );
	}
}


// EXPORTS //

module.exports = mapRight;
