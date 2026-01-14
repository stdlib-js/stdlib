/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Applies a function to elements in two input arrays while iterating from right to left and assigns the results to an output array.
*
* @private
* @param {Object} x - object containing data for the first input array
* @param {ArrayLikeObject} x.data - array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {Object} y - object containing data for the second input array
* @param {ArrayLikeObject} y.data - array data
* @param {Array<Function>} y.accessors - array element accessors
* @param {Object} z - object containing output array data
* @param {ArrayLikeObject} z.data - array data
* @param {Array<Function>} z.accessors - array element accessors
* @param {Function} fcn - function to apply
* @param {*} thisArg - function execution context
* @returns {void}
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
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
*     'data': [ 1, 2, 3, 4, 5, 6 ],
*     'accessors': [ getter, setter ]
* };
* var y = {
*     'data': [ 1, 1, 1, 1, 1, 1 ],
*     'accessors': [ getter, setter ]
* };
* var z = {
*     'data': [ 0, 0, 0, 0, 0, 0 ],
*     'accessors': [ getter, setter ]
* };
*
* map2Right( x, y, z, naryFunction( add, 2 ) );
*
* var data = z.data;
* // returns [ 2, 3, 4, 5, 6, 7 ]
*/
function map2Right( x, y, z, fcn, thisArg ) {
	var xbuf;
	var ybuf;
	var zbuf;
	var xget;
	var yget;
	var zset;
	var i;

	// Cache references to the input and output data:
	xbuf = x.data;
	ybuf = y.data;
	zbuf = z.data;

	// Cache accessors:
	xget = x.accessors[ 0 ];
	yget = y.accessors[ 0 ];
	zset = z.accessors[ 1 ];

	// Iterate over the elements...
	for ( i = xbuf.length-1; i >= 0; i-- ) {
		zset( zbuf, i, fcn.call( thisArg, xget( xbuf, i ), yget( ybuf, i ), i, [ xbuf, ybuf ] ) ); // eslint-disable-line max-len
	}
}


// EXPORTS //

module.exports = map2Right;
