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
* Canonical double-precision complex floating-point zero.
*
* @module @stdlib/constants/complex128/nan
* @type {Complex128}
*
* @example
* var COMPLEX128_NAN = require( '@stdlib/constants/complex128/nan' );
* // returns <Complex128>
*/

// MODULES //

var Complex128 = require( '@stdlib/complex/float64' );


// MAIN //

/**
* Canonical double-precision complex floating-point NaN.
*
* @constant
* @type {Complex128}
*/
var COMPLEX128_NAN = new Complex128( NaN, NaN );


// EXPORTS //

module.exports = COMPLEX128_NAN;
