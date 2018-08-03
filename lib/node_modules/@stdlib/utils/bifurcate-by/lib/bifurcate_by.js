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

var isCollection = require( '@stdlib/assert/is-collection' );
var isFunction = require( '@stdlib/assert/is-function' );
var validate = require( './validate.js' );
var returnValues = require( './return_values.js' );
var returnIndices = require( './return_indices.js' );
var returnPairs = require( './return_pairs.js' );


// MAIN //

/**
* Splits values into two groups according to a predicate function.
*
* @param {Collection} collection - input collection
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {string} [options.returns="values"] - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned
* @param {Function} predicate - predicate function indicating which group an element in the input collection belongs to
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} options argument must be an object
* @throws {TypeError} last argument must be a function
* @throws {TypeError} must provide valid options
* @returns {(Array<Array>|Array)} group results
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = bifurcateBy( arr, predicate );
* // returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var opts = {
*     'returns': 'indices'
* };
* var out = bifurcateBy( arr, opts, predicate );
* // returns [ [ 0, 1, 3 ], [ 2 ] ]
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var opts = {
*     'returns': '*'
* };
* var out = bifurcateBy( arr, opts, predicate );
* // returns [ [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], [ [ 2, 'foo' ] ] ]
*/
function bifurcateBy( collection, options, predicate ) {
	var opts;
	var err;
	var cb;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'`.' );
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
		return returnValues( collection, opts, cb );
	}
	if ( opts.returns === 'indices' ) {
		return returnIndices( collection, opts, cb );
	}
	return returnPairs( collection, opts, cb );
}


// EXPORTS //

module.exports = bifurcateBy;
