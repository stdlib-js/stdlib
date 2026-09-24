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
* Round each component of a single-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.
*
* @module @stdlib/math/base/special/cfloornf
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var cfloornf = require( '@stdlib/math/base/special/cfloornf' );
*
* // Round components to the nearest ten:
* var v = cfloornf( new Complex64( -15.0, 15.0 ), 1 );
* // returns <Complex64>[ -20.0, 10.0 ]
*
* // If n = 0, `cfloornf` behaves like `cfloorf`:
* v = cfloornf( new Complex64( 9.99999, 0.1 ), 0 );
* // returns <Complex64>[ 9.0, 0.0 ]
*
* // Round components to the nearest hundred:
* v = cfloornf( new Complex64( 150.0, -150.0 ), 2 );
* // returns <Complex64>[ 100.0, -200.0 ]
*
* v = cfloornf( new Complex64( NaN, NaN ), 2 );
* // returns <Complex64>[ NaN, NaN ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
