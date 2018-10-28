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
* Test if a value is an array-like object containing only positive integers.
*
* @module @stdlib/assert/is-positive-integer-array
*
* @example
* var isPositiveIntegerArray = require( '@stdlib/assert/is-positive-integer-array' );
*
* var bool = isPositiveIntegerArray( [ 3.0, new Number(3.0) ] );
* // returns true
*
* bool = isPositiveIntegerArray( [ 3.0, '3.0' ] );
* // returns false
*
* @example
* var isPositiveIntegerArray = require( '@stdlib/assert/is-positive-integer-array' ).primitives;
*
* var bool = isPositiveIntegerArray( [ 1.0, 2.0, 10.0 ] );
* // returns true
*
* bool = isPositiveIntegerArray( [ 3.0, new Number(1.0) ] );
* // returns false
*
* @example
* var isPositiveIntegerArray = require( '@stdlib/assert/is-positive-integer-array' ).objects;
*
* var bool = isPositiveIntegerArray( [ new Number(3.0), new Number(1.0) ] );
* // returns true
*
* bool = isPositiveIntegerArray( [ 1.0, 2.0, 10.0 ] );
* // returns false
*/

// MODULES //

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var arrayfun = require( '@stdlib/assert/tools/array-like-function' );


// MAIN //

var isPositiveIntegerArray = arrayfun( isPositiveInteger );
setReadOnly( isPositiveIntegerArray, 'primitives', arrayfun( isPositiveInteger.isPrimitive ) );
setReadOnly( isPositiveIntegerArray, 'objects', arrayfun( isPositiveInteger.isObject ) );


// EXPORTS //

module.exports = isPositiveIntegerArray;
