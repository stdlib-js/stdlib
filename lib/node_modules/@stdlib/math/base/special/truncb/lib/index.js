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
* Round a numeric value to the nearest multiple of `b^n` toward zero.
*
* @module @stdlib/math/base/special/truncb
*
* @example
* var truncb = require( '@stdlib/math/base/special/truncb' );
*
* // Round a value to 4 decimal places:
* var v = truncb( 3.141592653589793, -4, 10 );
* // returns 3.1415
*
* // If n = 0 or b = 1, behavior is same as `trunc`:
* v = truncb( 3.141592653589793, 0, 2 );
* // returns 3.0
*
* // Round a value to the nearest multiple of two toward zero:
* v = truncb( 5.0, 1, 2 );
* // returns 4.0
*/

// MODULES //

var truncb = require( './truncb.js' );


// EXPORTS //

module.exports = truncb;
