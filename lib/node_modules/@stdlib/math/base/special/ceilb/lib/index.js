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
* Round a numeric value to the nearest multiple of `b^n` toward positive infinity.
*
* @module @stdlib/math/base/special/ceilb
*
* @example
* var ceilb = require( '@stdlib/math/base/special/ceilb' );
*
* // Round a value to 4 decimal places:
* var v = ceilb( 3.141592653589793, -4, 10 );
* // returns 3.1416
*
* // If n = 0 or b = 1, behavior is same as `ceil`:
* v = ceilb( 3.141592653589793, 0, 2 );
* // returns 4.0
*
* // Round a value to the nearest multiple of two toward positive infinity:
* v = ceilb( 5.0, 1, 2 );
* // returns 6.0
*/

// MODULES //

var ceilb = require( './ceilb.js' );


// EXPORTS //

module.exports = ceilb;
