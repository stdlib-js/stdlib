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
* Test if a value is an array-like object of booleans.
*
* @module @stdlib/assert/is-boolean-array
*
* @example
* var isBooleanArray = require( '@stdlib/assert/is-boolean-array' );
*
* var bool = isBooleanArray( [ true, false, true ] );
* // returns true
*
* bool = isBooleanArray( [ true, 'abc', false ] );
* // returns false
*
* @example
* var isBooleanArray = require( '@stdlib/assert/is-boolean-array' ).primitives;
*
* var bool = isBooleanArray( [ true, false ] );
* // returns true
*
* bool = isBooleanArray( [ false, new Boolean( true ) ] );
* // returns false
*
* @example
* var isBooleanArray = require( '@stdlib/assert/is-boolean-array' ).objects;
*
* var bool = isBooleanArray( [ new Boolean( false ), new Boolean( true ) ] );
* // returns true
*
* bool = isBooleanArray( [ new Boolean( false ), true ] );
* // returns false
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var arrayfun = require( '@stdlib/assert/tools/array-like-function' );
var isBoolean = require( '@stdlib/assert/is-boolean' );


// MAIN //

var isBooleanArray = arrayfun( isBoolean );
setReadOnly( isBooleanArray, 'primitives', arrayfun( isBoolean.isPrimitive ) );
setReadOnly( isBooleanArray, 'objects', arrayfun( isBoolean.isObject ) );


// EXPORTS //

module.exports = isBooleanArray;
