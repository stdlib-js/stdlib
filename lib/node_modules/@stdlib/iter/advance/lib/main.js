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

var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// MAIN //

/**
* Advances an iterator.
*
* @param {Iterator} iterator - input iterator
* @param {NonNegativeInteger} [n=1e308] - number of iterations
* @throws {TypeError} first argument must be an iterator
* @throws {TypeError} second argument must be a nonnegative integer
* @returns {Iterator} input iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var it1 = array2iterator( [ 0, 0, 0, 0, 1 ] );
*
* var it2 = iterAdvance( it1, 4 );
*
* var v = it2.next().value;
* // returns 1
*
* var bool = it2.next().done;
* // returns true
*/
function iterAdvance( iterator, n ) {
	var N;
	var v;
	var i;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator. Value: `'+iterator+'`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isNonNegativeInteger( n ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a nonnegative integer. Value: `' + n + '`.' );
		}
		N = n;
	} else {
		N = 1e308;
	}
	i = 0;
	while ( i < N ) {
		v = iterator.next();
		if ( v.done ) {
			break;
		}
		i += 1;
	}
	return iterator;
}


// EXPORTS //

module.exports = iterAdvance;
