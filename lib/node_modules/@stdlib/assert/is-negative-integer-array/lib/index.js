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
* Test if a value is an array-like object containing only negative integers.
*
* @module @stdlib/assert/is-negative-integer-array
*
* @example
* var isNegativeIntegerArray = require( '@stdlib/assert/is-negative-integer-array' );
*
* var bool = isNegativeIntegerArray( [ -3.0, new Number(-3.0) ] );
* // returns true
*
* bool = isNegativeIntegerArray( [ -3.0, '-3.0' ] );
* // returns false
*
* @example
* var isNegativeIntegerArray = require( '@stdlib/assert/is-negative-integer-array' ).primitives;
*
* var bool = isNegativeIntegerArray( [ -1.0, -10.0 ] );
* // returns true
*
* bool = isNegativeIntegerArray( [ -1.0, 0.0, -10.0 ] );
* // returns false
*
* bool = isNegativeIntegerArray( [ -3.0, new Number(-1.0) ] );
* // returns false
*
* @example
* var isNegativeIntegerArray = require( '@stdlib/assert/is-negative-integer-array' ).objects;
*
* var bool = isNegativeIntegerArray( [ new Number(-1.0), new Number(-10.0) ] );
* // returns true
*
* bool = isNegativeIntegerArray( [ -1.0, 0.0, -10.0 ] );
* // returns false
*
* bool = isNegativeIntegerArray( [ -3.0, new Number(-1.0) ] );
* // returns false
*/

// MODULES //

var isNegativeInteger = require( '@stdlib/assert/is-negative-integer' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var arrayfun = require( '@stdlib/assert/tools/array-like-function' );


// MAIN //

var isNegativeIntegerArray = arrayfun( isNegativeInteger );
setReadOnly( isNegativeIntegerArray, 'primitives', arrayfun( isNegativeInteger.isPrimitive ) );
setReadOnly( isNegativeIntegerArray, 'objects', arrayfun( isNegativeInteger.isObject ) );


// EXPORTS //

module.exports = isNegativeIntegerArray;
