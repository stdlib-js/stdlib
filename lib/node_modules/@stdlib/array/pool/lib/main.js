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

var factory = require( './factory.js' );


// MAIN //

/**
* Returns an uninitialized typed array.
*
* ## Notes
*
* -   Memory is **not** initialized.
* -   Memory is lazily allocated.
* -   If the function returns `null`, the function was unable to allocate a new typed array from the typed array pool (most likely due to insufficient memory).
*
* @name typedarraypool
* @type {Function}
* @param {(NonNegativeInteger|ArrayLikeObject)} [arg] - an array length or an array-like object
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} must provide a valid array length or an array-like object
* @throws {TypeError} must provide a recognized data type
* @returns {(TypedArray|null)} typed array or null
*
* @example
* // Allocate an array of doubles:
* var arr = typedarraypool( 5, 'float64' );
* // e.g., returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* arr[ 0 ] = 3.14;
* arr[ 1 ] = 3.14;
*
* // ...
*
* // Free the allocated memory to be used in a future allocation:
* typedarraypool.free( arr );
*/
var typedarraypool = factory();


// EXPORTS //

module.exports = typedarraypool;
