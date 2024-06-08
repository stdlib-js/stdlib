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
* Compute the sum of the absolute values of the real and imaginary components of a double-precision complex floating-point number.
*
* @module @stdlib/blas/base/dcabs1
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
* var dcabs1 = require( '@stdlib/blas/base/dcabs1' );
*
* var v = dcabs1( new Complex128( 5.0, -3.0 ) );
* // returns 8.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
