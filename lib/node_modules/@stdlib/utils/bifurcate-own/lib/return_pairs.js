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
* Splits values into two groups according to a predicate function and outputs results as key-value values.
*
* ## Notes
*
* -   We need to cache the object value to prevent the edge case where, during the invocation of the predicate function, the value at key `k` is swapped for some other value. For some, that might be a feature; here, we take the stance that one should be less clever.
*
*
* @private
* @param {(Object|Array|TypedArray)} obj - input object
* @param {Options} opts - function options
* @param {*} [opts.thisArg] - execution context
* @param {Function} predicate - predicate function indicating which group an element in the input object belongs to
* @returns {(Array<Array>|Array)} results
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop',
*     'c': 'foo',
*     'd': 'bar'
* };
* var out = bifurcateOwn( obj, {}, predicate );
* // e.g., returns [ [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ], [ [ 'c', 'foo' ] ] ]
*/
function bifurcateOwn( obj, opts, predicate ) {
	var thisArg;
	var bool;
	var out;
	var key;
	var flg;
	var v;

	thisArg = opts.thisArg;
	out = [ [], [] ];
	flg = true;
	for ( key in obj ) {
		if ( hasOwnProp( obj, key ) ) {
			flg = false;
			v = obj[ key ];
			bool = predicate.call( thisArg, v, key );
			if ( bool ) {
				out[ 0 ].push( [ key, v ] );
			} else {
				out[ 1 ].push( [ key, v ] );
			}
		}
	}
	if ( flg ) {
		out.length = 0;
	}
	return out;
}


// EXPORTS //

module.exports = bifurcateOwn;
