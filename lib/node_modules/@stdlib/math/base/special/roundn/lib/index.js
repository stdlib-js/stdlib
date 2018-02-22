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
* Round a numeric value to the nearest multiple of `10^n`.
*
* @module @stdlib/math/base/special/roundn
*
* @example
* var roundn = require( '@stdlib/math/base/special/roundn' );
*
* // Round a value to 2 decimal places:
* var v = roundn( 3.141592653589793, -2 );
* // returns 3.14
*
* // If n = 0, `roundn` behaves like `round`:
* v = roundn( 3.141592653589793, 0 );
* // returns 3.0
*
* // Round a value to the nearest thousand:
* v = roundn( 12368.0, 3 );
* // returns 12000.0
*/

// MODULES //

var roundn = require( './roundn.js' );


// EXPORTS //

module.exports = roundn;
