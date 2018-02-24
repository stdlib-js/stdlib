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
* Round a numeric value to the nearest multiple of `10^n` toward positive infinity.
*
* @module @stdlib/math/base/special/ceiln
*
* @example
* var ceiln = require( '@stdlib/math/base/special/ceiln' );
*
* // Round a value to 2 decimal places:
* var v = ceiln( 3.141592653589793, -2 );
* // returns 3.15
*
* // If n = 0, `ceiln` behaves like `ceil`:
* v = ceiln( 3.141592653589793, 0 );
* // returns 4.0
*
* // Round a value to the nearest thousand:
* v = ceiln( 12368.0, 3 );
* // returns 13000.0
*/

// MODULES //

var ceiln = require( './ceiln.js' );


// EXPORTS //

module.exports = ceiln;
