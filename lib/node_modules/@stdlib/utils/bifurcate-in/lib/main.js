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

var isObjectLike = require( '@stdlib/assert/is-object-like' );
var isFunction = require( '@stdlib/assert/is-function' );
var validate = require( './validate.js' );
var returnValues = require( './return_values.js' );
var returnKeys = require( './return_keys.js' );
var returnPairs = require( './return_pairs.js' );


// MAIN //

/**
* Splits an object's own and inherited property values into two groups according to a predicate function.
*
* @param {(Object|Array|TypedArray)} obj - input object
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {string} [options.returns="values"] - if `values`, values are returned; if `keys`, keys are returned; if `*`, both keys and values are returned
* @param {Function} predicate - predicate function indicating which group an element in the input object belongs to
* @throws {TypeError} first argument must be an object, array, or typed array
* @throws {TypeError} options argument must be an object
* @throws {TypeError} last argument must be a function
* @throws {TypeError} must provide valid options
* @returns {(Array<Array>|Array)} group results
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
* var out = bifurcateIn( obj, predicate );
* // e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
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
* var opts = {
*     'returns': 'keys'
* };
* var out = bifurcateIn( obj, opts, predicate );
* // e.g., returns [ [ 'a', 'b', 'd' ], [ 'c' ] ]
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
* var opts = {
*     'returns': '*'
* };
* var out = bifurcateIn( obj, opts, predicate );
* // e.g., returns [ [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ], [ [ 'c', 'foo' ] ] ]
*/
function bifurcateIn( obj, options, predicate ) {
	var opts;
	var err;
	var cb;
	if ( !isObjectLike( obj ) ) {
		throw new TypeError( 'invalid argument. First argument must be an object. Value: `'+obj+'`.' );
	}
	opts = {
		'returns': 'values'
	};
	if ( arguments.length === 2 ) {
		cb = options;
	} else {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		cb = predicate;
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid argument. Last argument must be a function. Value: `'+cb+'`.' );
	}
	if ( opts.returns === 'values' ) {
		return returnValues( obj, opts, cb );
	}
	if ( opts.returns === 'keys' ) {
		return returnKeys( obj, opts, cb );
	}
	return returnPairs( obj, opts, cb );
}


// EXPORTS //

module.exports = bifurcateIn;
