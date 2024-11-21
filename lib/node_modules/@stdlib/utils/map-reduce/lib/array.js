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
* Performs a map-reduce operation against each element in an array and returns the accumulated result.
*
* @private
* @param {Object} x - object containing input array data
* @param {ArrayLikeObject} x.data - input array data
* @param {Array<Function>} x.accessors - input array accessors
* @param {*} initial - initial value
* @param {Function} mapper - mapping function
* @param {Function} reducer - reducing function
* @param {*} thisArg - reducing function execution context
* @returns {*} accumulated result
*
* @example
* function square( value ) {
*     return value * value;
* }
*
* function sum( acc, value ) {
*     return acc + value;
* }
*
* // Define a getter:
* function getter( buf, idx ) {
*     return buf[ idx ];
* }
*
* // Create the input array object:
* var x = {
*     'data': [ 1, 2, 3, 4 ],
*     'accessors': [ getter ]
* };
*
* // Compute the sum of squared values:
* var out = mapReduce( x, 0, square, sum );
* // returns 30
*/
function mapReduce( x, initial, mapper, reducer, thisArg ) {
	var xbuf;
	var get;
	var acc;
	var i;

	// Cache reference to the input data:
	xbuf = x.data;

	// Cache the element accessor:
	get = x.accessors[ 0 ];

	// Iterate over each element...
	acc = initial;
	for ( i = 0; i < xbuf.length; i++ ) {
		acc = reducer.call( thisArg, acc, mapper( get( xbuf, i ), i, xbuf ), i, xbuf ); // eslint-disable-line max-len
	}
	return acc;
}


// EXPORTS //

module.exports = mapReduce;
