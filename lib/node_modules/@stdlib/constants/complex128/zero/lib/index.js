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
* Double-precision complex floating-point zero.
*
* @module @stdlib/constants/complex128/zero
* @type {Complex128}
*
* @example
* var COMPLEX128_ZERO = require( '@stdlib/constants/complex128/zero' );
* // returns <Complex128>
*/

// MODULES //

var Complex128 = require( '@stdlib/complex/float64/ctor' );


// MAIN //

/**
* Double-precision complex floating-point zero.
*
* @constant
* @type {Complex128}
*/
var COMPLEX128_ZERO = new Complex128( 0.0, 0.0 );


// EXPORTS //

module.exports = COMPLEX128_ZERO;
