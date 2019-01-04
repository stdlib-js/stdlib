/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var isFunction = require( '@stdlib/assert/is-function' );
var isArrayLike = require( '@stdlib/assert/is-array-like-object' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );


// MAIN //

/**
* Returns an iterator pipeline.
*
* @param {(Function|FunctionArray)} iterFcn0 - iterator function or an array of iterator functions
* @param {...Function} [iterFcn] - iterator function(s)
* @throws {TypeError} must provide functions
* @throws {Error} must provide at least one iterator function
* @returns {Function} iterator pipeline
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var iterSomeBy = require( '@stdlib/iter/some-by' );
* var iterHead = require( '@stdlib/iter/head' );
* var iterThunk = require( '@stdlib/iter/pipeline-thunk' );
*
* function threshold( r ) {
*     return ( r > 0.95 );
* }
*
* var it1 = iterThunk( iterHead, 100 );
* var it2 = iterThunk( iterSomeBy, 5, threshold );
*
* var p = iterPipeline( it1, it2 );
*
* var bool = p( randu() );
* // returns <boolean>
*/
function iterPipeline() {
	var nFuncs;
	var f;
	var i;

	nFuncs = arguments.length;
	if ( nFuncs === 1 && isArrayLike( arguments[ 0 ] ) ) {
		f = arguments[ 0 ].slice();
		nFuncs = f.length;
	} else {
		f = [];
		for ( i = 0; i < nFuncs; i++ ) {
			f.push( arguments[ i ] );
		}
	}
	if ( nFuncs === 0 ) {
		throw new Error( 'insufficient input arguments. Must provide at least one iterator function.' );
	}
	for ( i = 0; i < nFuncs; i++ ) {
		if ( !isFunction( f[ i ] ) ) {
			throw new TypeError( 'invalid argument. Must provide functions. Value: `'+f[ i ]+'`.' );
		}
	}
	return pipeline;

	/**
	* Pipeline function.
	*
	* @private
	* @param {Iterator} iterator - source iterator
	* @throws {TypeError} must provide an iterator
	* @throws {TypeError} each iterator function, except the last iterator function, within an iterator pipeline must return an iterator
	* @returns {(Iterator|*)} an iterator or pipeline result
	*/
	function pipeline( iterator ) {
		var iter;
		if ( !isIteratorLike( iterator ) ) {
			throw new TypeError( 'invalid argument. Must provide an iterator. Value: `' + iterator + '`' );
		}
		iter = iterator;
		for ( i = 0; i < nFuncs-1; i++ ) {
			iter = f[ i ]( iter );
			if ( !isIteratorLike( iter ) ) {
				throw new TypeError( 'invalid argument. Each iterator function, except the last iterator function, within an iterator pipeline must return an iterator. Value: `' + iter + '`.' );
			}
		}
		return f[ nFuncs-1 ]( iter );
	}
}


// EXPORTS //

module.exports = iterPipeline;
