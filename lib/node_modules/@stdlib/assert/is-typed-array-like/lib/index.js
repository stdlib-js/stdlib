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
* Test if a value is typed-array-like.
*
* @module @stdlib/assert/is-typed-array-like
*
* @example
* var Int16Array = require( '@stdlib/array/int16' );
* var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
*
* var bool = isTypedArrayLike( new Int16Array() );
* // returns true
*
* bool = isTypedArrayLike({
*	'length': 10,
*	'byteOffset': 0,
*	'byteLength': 10,
*	'BYTES_PER_ELEMENT': 4
* });
* // returns true
*/

// MODULES //

var isTypedArrayLike = require( './main.js' );


// EXPORTS //

module.exports = isTypedArrayLike;
