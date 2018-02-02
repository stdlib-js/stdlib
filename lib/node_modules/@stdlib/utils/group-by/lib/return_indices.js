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

// MODULES //

var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Groups values according to an indicator function and outputs results according to element indices.
*
* ## Notes
*
* -   Checking for an "own" property is necessary to guard against the edge case where an indicator function returns a group identifier which matches a method or property on the `Object` prototype.
*
*
* @private
* @param {Collection} collection - collection to group
* @param {Options} opts - function options
* @param {*} [opts.thisArg] - execution context
* @param {Function} indicator - indicator function specifying which group an element in the input collection belongs to
* @returns {Object} group results
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = groupBy( arr, {}, indicator );
* // returns { 'b': [ 0, 1, 3 ], 'f': [ 2 ] }
*/
function groupBy( collection, opts, indicator ) {
	var thisArg;
	var out;
	var len;
	var g;
	var i;

	thisArg = opts.thisArg;
	len = collection.length;

	out = {};
	for ( i = 0; i < len; i++ ) {
		g = indicator.call( thisArg, collection[ i ], i );
		if ( hasOwnProp( out, g ) ) {
			out[ g ].push( i );
		} else {
			out[ g ] = [ i ];
		}
	}
	return out;
}


// EXPORTS //

module.exports = groupBy;
