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
* Evaluate the secant of a number.
*
* @module @stdlib/math/base/special/sec
*
* @example
* var sec = require( '@stdlib/math/base/special/sec' );
*
* var v = sec( 0.0 );
* // returns 1.0
*
* v = sec( 3.141592653589793/2.0 );
* // returns 16331239353195370.0
*
* v = sec( -3.141592653589793/3.0 );
* // returns ~1.9999999999999996
*
* v = sec( 3.141592653589793/3.0 );
* // returns ~1.9999999999999996
*
* v = sec( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
