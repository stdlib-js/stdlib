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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Returns the first iterated value.
*
* @param {Iterator} iterator - input iterator
* @throws {TypeError} must provide an iterator
* @returns {*} first iterated value
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var it = array2iterator( [ 1, 0, 0, 0, 0 ] );
*
* var v = iterFirst( it );
* // returns 1
*/
function iterFirst( iterator ) {
	var v;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. Must provide an iterator. Value: `'+iterator+'`.' );
	}
	v = iterator.next();
	if ( v.done && !hasOwnProp( v, 'value' ) ) {
		return;
	}
	return v.value;
}


// EXPORTS //

module.exports = iterFirst;
