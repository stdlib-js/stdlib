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

/**
* Test if a value is an array-like object containing only nonnegative numbers.
*
* @module @stdlib/assert/is-nonnegative-number-array
*
* @example
* var isNonNegativeNumberArray = require( '@stdlib/assert/is-nonnegative-number-array' );
*
* var bool = isNonNegativeNumberArray( [ 3.0, new Number(3.0) ] );
* // returns true
*
* bool = isNonNegativeNumberArray( [ 3.0, '3.0' ] );
* // returns false
*
* @example
* var isNonNegativeNumberArray = require( '@stdlib/assert/is-nonnegative-number-array' ).primitives;
*
* var bool = isNonNegativeNumberArray( [ 1.0, 0.0, 10.0 ] );
* // returns true
*
* bool = isNonNegativeNumberArray( [ 3.0, new Number(1.0) ] );
* // returns false
*
* @example
* var isNonNegativeNumberArray = require( '@stdlib/assert/is-nonnegative-number-array' ).objects;
*
* var bool = isNonNegativeNumberArray( [ new Number(3.0), new Number(1.0) ] );
* // returns true
*
* bool = isNonNegativeNumberArray( [ 1.0, 0.0, 10.0 ] );
* // returns false
*/

// MODULES //

var isNonNegativeNumber = require( '@stdlib/assert/is-nonnegative-number' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var arrayfun = require( '@stdlib/assert/tools/array-like-function' );


// MAIN //

var isNonNegativeNumberArray = arrayfun( isNonNegativeNumber );
setReadOnly( isNonNegativeNumberArray, 'primitives', arrayfun( isNonNegativeNumber.isPrimitive ) );
setReadOnly( isNonNegativeNumberArray, 'objects', arrayfun( isNonNegativeNumber.isObject ) );


// EXPORTS //

module.exports = isNonNegativeNumberArray;
