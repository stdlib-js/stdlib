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
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );


// MAIN //

/**
* Returns an iterator "thunk".
*
* @param {Function} iterFcn - iterator function
* @param {...*} [args] - function arguments
* @throws {TypeError} first argument must be a function
* @returns {Function} iterator "thunk"
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterSome = require( '@stdlib/iter/some' );
*
* var it = array2iterator( [ 0, 0, 1, 1, 1 ] );
*
* var thunk = iterThunk( iterSome, 3 );
*
* var bool = thunk( it );
* // returns true
*/
function iterThunk( iterFcn ) {
	var pargs;
	var nargs;
	var i;
	if ( !isFunction( iterFcn ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `' + iterFcn + '`.' );
	}
	nargs = arguments.length;
	pargs = [];
	for ( i = 1; i < nargs; i++ ) {
		pargs.push( arguments[ i ] );
	}
	return thunk;

	/**
	* Invokes an iterator function with a provided iterator and previously provided iterator function arguments.
	*
	* @private
	* @param {Iterator} iter - input iterator
	* @throws {TypeError} must provide an iterator
	* @returns {*} iterator function result
	*/
	function thunk( iter ) {
		var args;
		var i;
		if ( !isIteratorLike( iter ) ) {
			throw new TypeError( 'invalid argument. Must provide an an iterator. Value: `'+iter+'`.' );
		}
		args = [ iter ];
		for ( i = 0; i < nargs; i++ ) {
			args.push( pargs[ i ] );
		}
		return iterFcn.apply( null, args );
	}
}


// EXPORTS //

module.exports = iterThunk;
