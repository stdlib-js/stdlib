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
* Test if a value is an array-like object containing only negative numbers.
*
* @module @stdlib/assert/is-negative-number-array
*
* @example
* var isNegativeNumberArray = require( '@stdlib/assert/is-negative-number-array' );
*
* var bool = isNegativeNumberArray( [ -3.0, new Number(-3.0) ] );
* // returns true
*
* bool = isNegativeNumberArray( [ -3.0, '-3.0' ] );
* // returns false
*
* @example
* var isNegativeNumberArray = require( '@stdlib/assert/is-negative-number-array' ).primitives;
*
* var bool = isNegativeNumberArray( [ -1.0, -5.0, -10.0 ] );
* // returns true
*
* bool = isNegativeNumberArray( [ -3.0, new Number(-1.0) ] );
* // returns false
*
* @example
* var isNegativeNumberArray = require( '@stdlib/assert/is-negative-number-array' ).objects;
*
* var bool = isNegativeNumberArray( [ new Number(-3.0), new Number(-1.0) ] );
* // returns true
*
* bool = isNegativeNumberArray( [ -1.0, -5.0, -10.0 ] );
* // returns false
*/

// MODULES //

var isNegativeNumber = require( '@stdlib/assert/is-negative-number' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var arrayfun = require( '@stdlib/assert/tools/array-like-function' );


// MAIN //

var isNegativeNumberArray = arrayfun( isNegativeNumber );
setReadOnly( isNegativeNumberArray, 'primitives', arrayfun( isNegativeNumber.isPrimitive ) );
setReadOnly( isNegativeNumberArray, 'objects', arrayfun( isNegativeNumber.isObject ) );


// EXPORTS //

module.exports = isNegativeNumberArray;
