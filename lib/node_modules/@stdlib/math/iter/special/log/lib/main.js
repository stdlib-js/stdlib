/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var iterMap2 = require( '@stdlib/math/iter/tools/map2' );
var log = require( '@stdlib/math/base/special/log' );


// MAIN //

/**
* Returns an iterator which iteratively computes the base `b` logarithm.
*
* ## Notes
*
* -   For negative `b` or `x` iterated values, the returned iterator returns `NaN`.
* -   If provided a numeric value as an iterator argument, the value is broadcast as an **infinite** iterator which **always** returns the provided value.
* -   If an iterated value is non-numeric (including `NaN`), the returned iterator returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an iterator which type checks and handles non-numeric values accordingly.
* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param {(Iterator|number)} x - input iterator
* @param {(Iterator|number)} b - input iterator
* @throws {TypeError} first argument must be either an iterator protocol-compliant object or a number
* @throws {TypeError} second argument must be either an iterator protocol-compliant object or a number
* @returns {Iterator} iterator
*
* @example
* var uniform = require( '@stdlib/random/iter/uniform' );
*
* var x = uniform( 0.0, 100.0 );
* var y = uniform( 0.0, 10.0 );
*
* var iter = iterLog( x, y );
*
* var r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* // ...
*/
function iterLog( x, b ) {
	return iterMap2( x, b, log );
}


// EXPORTS //

module.exports = iterLog;
