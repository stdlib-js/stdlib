/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Evaluate the inverse complementary error function for a single-precision floating-point number.
*
* @module @stdlib/math/base/special/erfcinvf
*
* @example
* var erfcinvf = require( '@stdlib/math/base/special/erfcinvf' );
*
* var y = erfcinvf( 0.5 );
* // returns ~0.4769
*
* y = erfcinvf( 0.8 );
* // returns ~0.1791
*
* y = erfcinvf( 0.0 );
* // returns Infinity
*
* y = erfcinvf( 2.0 );
* // returns -Infinity
*
* y = erfcinvf( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
