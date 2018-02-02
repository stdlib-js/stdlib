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
* Groups values according to an indicator function and outputs results as key-value values.
*
* ## Notes
*
* -   We need to cache the object value to prevent the edge case where, during the invocation of the indicator function, the value at key `k` is swapped for some other value. For some, that might be a feature; here, we take the stance that one should be less clever.
*
*
* @private
* @param {(Object|Array|TypedArray)} obj - input object
* @param {Options} opts - function options
* @param {*} [opts.thisArg] - execution context
* @param {Function} indicator - indicator function indicating which group an element in the input object belongs to
* @returns {Object} results
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop',
*     'c': 'foo',
*     'd': 'bar'
* };
* var out = groupOwn( obj, {}, indicator );
* // e.g., returns { 'b': [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ], 'f': [ [ 'c', 'foo' ] ] }
*/
function groupOwn( obj, opts, indicator ) {
	var thisArg;
	var out;
	var key;
	var v;
	var g;

	thisArg = opts.thisArg;
	out = {};
	for ( key in obj ) {
		if ( hasOwnProp( obj, key ) ) {
			v = obj[ key ];
			g = indicator.call( thisArg, v, key );
			if ( hasOwnProp( out, g ) ) {
				out[ g ].push( [ key, v ] );
			} else {
				out[ g ] = [ [ key, v ] ];
			}
		}
	}
	return out;
}


// EXPORTS //

module.exports = groupOwn;
