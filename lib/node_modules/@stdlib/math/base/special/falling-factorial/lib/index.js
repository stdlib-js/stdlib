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
* Compute the falling factorial.
*
* @module @stdlib/math/base/special/falling-factorial
*
* @example
* var fallingFactorial = require( '@stdlib/math/base/special/falling-factorial' );
*
* var v = fallingFactorial( 0.9, 5 );
* // returns ~0.644
*
* v = fallingFactorial( -9.0, 3 );
* // returns -990.0
*
* v = fallingFactorial( 0.0, 2 );
* // returns 0.0
*
* v = fallingFactorial( 3.0, -2 );
* // returns NaN
*/

// MODULES //

var fallingFactorial = require( './falling_factorial.js' );


// EXPORTS //

module.exports = fallingFactorial;
