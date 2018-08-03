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
var validate = require( './validate.js' );
var returnValues = require( './return_values.js' );
var returnIndices = require( './return_indices.js' );
var returnPairs = require( './return_pairs.js' );


// MAIN //

/**
* Splits values into two groups.
*
* @param {Collection} collection - input collection
* @param {Options} [options] - function options
* @param {string} [options.returns="values"] - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned
* @param {Collection} filter - collection indicating which group an element in the input collection belongs to
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} last argument must be a collection
* @throws {RangeError} first and last arguments must be the same length
* @returns {(Array|ArrayArray)} results
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var filter = [ true, true, false, true ];
*
* var out = bifurcate( arr, filter );
* // returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var filter = [ true, true, false, true ];
*
* var opts = {
*     'returns': 'indices'
* };
*
* var out = bifurcate( arr, opts, filter );
* // returns [ [ 0, 1, 3 ], [ 2 ] ]
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var filter = [ true, true, false, true ];
*
* var opts = {
*     'returns': '*'
* };
*
* var out = bifurcate( arr, opts, filter );
* // returns [ [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], [ [ 2, 'foo' ] ] ]
*/
function bifurcate( collection, options, filter ) {
	var opts;
	var err;
	var f;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'`.' );
	}
	opts = {
		'returns': 'values'
	};
	if ( arguments.length === 2 ) {
		f = options;
	} else {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		f = filter;
	}
	if ( !isCollection( f ) ) {
		throw new TypeError( 'invalid argument. Last argument must be a collection. Value: `'+f+'`.' );
	}
	if ( collection.length !== f.length ) {
		throw new RangeError( 'invalid arguments. First and last arguments must be the same length.' );
	}
	if ( opts.returns === 'values' ) {
		return returnValues( collection, f );
	}
	if ( opts.returns === 'indices' ) {
		return returnIndices( collection, f );
	}
	return returnPairs( collection, f );
}


// EXPORTS //

module.exports = bifurcate;
