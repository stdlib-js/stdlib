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
* Single-precision complex floating-point zero.
*
* @module @stdlib/constants/complex64/zero
* @type {Complex64}
*
* @example
* var COMPLEX64_ZERO = require( '@stdlib/constants/complex64/zero' );
* // returns <Complex64>
*/

// MODULES //

var Complex64 = require( '@stdlib/complex/float32/ctor' );


// MAIN //

/**
* Single-precision complex floating-point zero.
*
* @constant
* @type {Complex64}
*/
var COMPLEX64_ZERO = new Complex64( 0.0, 0.0 );


// EXPORTS //

module.exports = COMPLEX64_ZERO;
