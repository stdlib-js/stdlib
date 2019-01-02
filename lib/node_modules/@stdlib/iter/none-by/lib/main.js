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

var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Tests whether every iterated value fails a test implemented by a predicate function.
*
* @param {Iterator} iterator - input iterator
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an iterator
* @throws {TypeError} second argument must be a function
* @returns {boolean} boolean indicating whether every iterated value fails a test implemented by a predicate function
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function predicate( v ) {
*     return ( v <= 0 );
* }
*
* var it = array2iterator( [ 1, 1, 1, 1, 1 ] );
*
* var bool = iterNoneBy( it, predicate );
* // returns true
*/
function iterNoneBy( iterator, predicate, thisArg ) {
	var v;
	var i;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator. Value: `'+iterator+'`.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `' + predicate + '`.' );
	}
	i = -1;
	while ( true ) {
		i += 1;
		v = iterator.next();
		if ( v.done ) {
			if ( hasOwnProp( v, 'value' ) ) {
				return !predicate.call( thisArg, v.value, i );
			}
			break;
		}
		if ( predicate.call( thisArg, v.value, i ) ) {
			return false;
		}
	}
	return true;
}


// EXPORTS //

module.exports = iterNoneBy;
