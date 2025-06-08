/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Test if two arguments are both Uint8ClampedArrays and have equal values.
*
* @module @stdlib/assert/is-equal-uint8clampedarray
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
* var isEqualUint8ClampedArray = require( '@stdlib/assert/is-equal-uint8clampedarray' );
*
* var x = new Uint8ClampedArray( [ 1, 2, 3 ] );
* var y = new Uint8ClampedArray( [ 1, 2, 3 ] );
*
* var out = isEqualUint8ClampedArray( x, y );
* // returns true
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
* var isEqualUint8ClampedArray = require( '@stdlib/assert/is-equal-uint8clampedarray' );
*
* var x = new Uint8ClampedArray( [ 1, 2, 3 ] );
* var y = new Uint8ClampedArray( [ 1, 2, 4 ] );
*
* var out = isEqualUint8ClampedArray( x, y );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
