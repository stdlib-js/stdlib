/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Test if two arguments are both typed-array-like objects and have the same values.
*
* @module @stdlib/assert/is-same-typed-array-like
*
* @example
* var Int8Array = require( '@stdlib/array/int8' );
* var Int16Array = require( '@stdlib/array/int16' );
* var isSameTypedArrayLike = require( '@stdlib/assert/is-same-typed-array-like' );
*
* var x = new Int8Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Int16Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = isSameTypedArrayLike( x, y );
* // returns true
*
* @example
* var Int8Array = require( '@stdlib/array/int8' );
* var Int16Array = require( '@stdlib/array/int16' );
* var isSameTypedArrayLike = require( '@stdlib/assert/is-same-typed-array-like' );
*
* var x = new Int8Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Int16Array( [ 1.0, 2.0, 4.0 ] );
*
* var out = isSameTypedArrayLike( x, y );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
