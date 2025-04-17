/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Evaluate the Dirac delta function for a single-precision floating-point number.
*
* @module @stdlib/math/base/special/dirac-deltaf
*
* @example
* var diracDeltaf = require( '@stdlib/math/base/special/dirac-deltaf' );
*
* var v = diracDeltaf( 0.0 );
* // returns Infinity
*
* v = diracDeltaf( 3.14 );
* // returns 0.0
*
* v = diracDeltaf( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
