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
* Evaluate the exponential function for a double-precision complex floating-point number.
*
* @module @stdlib/math/base/special/cexp
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
* var cexp = require( '@stdlib/math/base/special/cexp' );
*
* var v = cexp( new Complex128( 0.0, 0.0 ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns 1.0
*
* var im = imag( v );
* // returns 0.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
