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
* Applies a function to each element in an array and assigns the result to an element in an output array.
*
* @private
* @param {Object} x - object containing input array data
* @param {ArrayLikeObject} x.data - input array data
* @param {Array<Function>} x.accessors - input array accessors
* @param {Object} y - object containing output array data
* @param {ArrayLikeObject} y.data - output array data
* @param {Array<Function>} y.accessors - output array accessors
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
*     'accessors': [ getter, setter ]
* };
* var y = {
*     'data': [ 0, 0, 0, 0, 0, 0 ],
*     'accessors': [ getter, setter ]
* };
*
* map( x, y, naryFunction( abs, 1 ) );
*
* var data = y.data;
* // returns [ 1, 2, 3, 4, 5, 6 ]
*/
function map( x, y, fcn, thisArg ) {
	var xbuf;
	var ybuf;
	var get;
	var set;
	var i;

	// Cache references to the input and output data:
	xbuf = x.data;
	ybuf = y.data;

	// Cache accessors:
	get = x.accessors[ 0 ];
	set = y.accessors[ 1 ];

	// Iterate over each element...
	for ( i = 0; i < xbuf.length; i++ ) {
		set( ybuf, i, fcn.call( thisArg, get( xbuf, i ), i, xbuf ) );
	}
}


// EXPORTS //

module.exports = map;
