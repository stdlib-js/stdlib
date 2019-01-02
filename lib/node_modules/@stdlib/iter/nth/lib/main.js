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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Returns the nth iterated value.
*
* @param {Iterator} iterator - input iterator
* @param {PositiveInteger} n - iteration number
* @throws {TypeError} first argument must be an iterator
* @throws {TypeError} second argument must be a positive integer
* @returns {*} nth iterated value
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var it = array2iterator( [ 0, 0, 1, 0, 0 ] );
*
* var v = iterNth( it, 3 );
* // returns 1
*/
function iterNth( iterator, n ) {
	var i;
	var v;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator. Value: `'+iterator+'`.' );
	}
	if ( !isPositiveInteger( n ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a positive integer. Value: `' + n + '`.' );
	}
	i = 0;
	while ( true ) {
		i += 1;
		v = iterator.next();
		if ( v.done ) {
			if ( i === n && hasOwnProp( v, 'value' ) ) {
				return v.value;
			}
			return;
		}
		if ( i === n ) {
			return v.value;
		}
	}
}


// EXPORTS //

module.exports = iterNth;
