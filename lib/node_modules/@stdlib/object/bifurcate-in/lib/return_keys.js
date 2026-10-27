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
* Splits values into two groups according to a predicate function and outputs results as keys.
*
* @private
* @param {(Object|Array|TypedArray)} obj - input object
* @param {Options} opts - function options
* @param {*} [opts.thisArg] - execution context
* @param {Function} predicate - predicate function specifying which group an element in the input object belongs to
* @returns {(Array<Array>|Array)} results
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
*
* function Foo() {
*     this.a = 'beep';
*     this.b = 'boop';
*     return this;
* }
*
* Foo.prototype = Object.create( null );
* Foo.prototype.c = 'foo';
* Foo.prototype.d = 'bar';
*
* var obj = new Foo();
*
* var out = bifurcateIn( obj, {}, predicate );
* // e.g., returns [ [ 'a', 'b', 'd' ], [ 'c' ] ]
*/
function bifurcateIn( obj, opts, predicate ) {
	var thisArg;
	var bool;
	var out;
	var key;
	var flg;

	thisArg = opts.thisArg;
	out = [ [], [] ];
	flg = true;
	for ( key in obj ) { // eslint-disable-line guard-for-in
		flg = false;
		bool = predicate.call( thisArg, obj[ key ], key );
		if ( bool ) {
			out[ 0 ].push( key );
		} else {
			out[ 1 ].push( key );
		}
	}
	if ( flg ) {
		out.length = 0;
	}
	return out;
}


// EXPORTS //

module.exports = bifurcateIn;
