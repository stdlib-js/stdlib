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
* Groups values as arrays associated with distinct keys.
*
* @param {Collection} collection - collection to group
* @param {Options} [options] - function options
* @param {string} [options.returns="values"] - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned
* @param {Collection} groups - collection defining which group an element in the input collection belongs to
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} options argument must be an object
* @throws {TypeError} last argument must be a collection
* @throws {TypeError} must provide valid options
* @throws {RangeError} first and last arguments must be the same length
* @returns {Object} group results
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var groups = [ 'b', 'b', 'f', 'b' ];
*
* var out = group( arr, groups );
* // returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var groups = [ 'b', 'b', 'f', 'b' ];
*
* var opts = {
*     'returns': 'indices'
* };
*
* var out = group( arr, opts, groups );
* // returns { 'b': [ 0, 1, 3 ], 'f': [ 2 ] }
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var groups = [ 'b', 'b', 'f', 'b' ];
*
* var opts = {
*     'returns': '*'
* };
*
* var out = group( arr, opts, groups );
* // returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
*/
function group( collection, options, groups ) {
	var opts;
	var err;
	var g;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'`.' );
	}
	opts = {
		'returns': 'values'
	};
	if ( arguments.length === 2 ) {
		g = options;
	} else {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		g = groups;
	}
	if ( !isCollection( g ) ) {
		throw new TypeError( 'invalid argument. Last argument must be a collection. Value: `'+g+'`.' );
	}
	if ( collection.length !== g.length ) {
		throw new RangeError( 'invalid arguments. First and last arguments must be the same length.' );
	}
	if ( opts.returns === 'values' ) {
		return returnValues( collection, g );
	}
	if ( opts.returns === 'indices' ) {
		return returnIndices( collection, g );
	}
	return returnPairs( collection, g );
}


// EXPORTS //

module.exports = group;
