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
* Test if a value is an array-like object containing only positive numbers.
*
* @module @stdlib/assert/is-positive-number-array
*
* @example
* var isPositiveNumberArray = require( '@stdlib/assert/is-positive-number-array' );
*
* var bool = isPositiveNumberArray( [ 3.0, new Number(3.0) ] );
* // returns true
*
* bool = isPositiveNumberArray( [ 3.0, '3.0' ] );
* // returns false
*
* @example
* var isPositiveNumberArray = require( '@stdlib/assert/is-positive-number-array' ).primitives;
*
* var bool = isPositiveNumberArray( [ 1.0, 5.0, 10.0 ] );
* // returns true
*
* bool = isPositiveNumberArray( [ 3.0, new Number(1.0) ] );
* // returns false
*
* @example
* var isPositiveNumberArray = require( '@stdlib/assert/is-positive-number-array' ).objects;
*
* var bool = isPositiveNumberArray( [ new Number(3.0), new Number(1.0) ] );
* // returns true
*
* bool = isPositiveNumberArray( [ 1.0, 5.0, 10.0 ] );
* // returns false
*/

// MODULES //

var isPositiveNumber = require( '@stdlib/assert/is-positive-number' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var arrayfun = require( '@stdlib/assert/tools/array-like-function' );


// MAIN //

var isPositiveNumberArray = arrayfun( isPositiveNumber );
setReadOnly( isPositiveNumberArray, 'primitives', arrayfun( isPositiveNumber.isPrimitive ) );
setReadOnly( isPositiveNumberArray, 'objects', arrayfun( isPositiveNumber.isObject ) );


// EXPORTS //

module.exports = isPositiveNumberArray;
