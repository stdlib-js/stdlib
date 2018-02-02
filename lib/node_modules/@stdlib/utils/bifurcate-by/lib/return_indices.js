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

// MAIN //

/**
* Splits values into two groups according to a predicate function and outputs results as element indices.
*
* @private
* @param {Collection} collection - input collection
* @param {Options} opts - function options
* @param {*} [opts.thisArg] - execution context
* @param {Function} predicate - predicate function specifying which group an element in the input collection belongs to
* @returns {(Array<Array>|Array)} results
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = bifurcateBy( arr, {}, predicate );
* // returns [ [ 0, 1, 3 ], [ 2 ] ]
*/
function bifurcateBy( collection, opts, predicate ) {
	var thisArg;
	var bool;
	var out;
	var len;
	var i;

	thisArg = opts.thisArg;
	len = collection.length;
	if ( len === 0 ) {
		return [];
	}
	out = [ [], [] ];
	for ( i = 0; i < len; i++ ) {
		bool = predicate.call( thisArg, collection[ i ], i );
		if ( bool ) {
			out[ 0 ].push( i );
		} else {
			out[ 1 ].push( i );
		}
	}
	return out;
}


// EXPORTS //

module.exports = bifurcateBy;
