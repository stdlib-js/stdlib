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
* Evaluate the signum function of a double-precision floating-point complex number.
*
* @module @stdlib/math/base/special/csignum
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
* var csignum = require( '@stdlib/math/base/special/csignum' );
*
* var v = csignum( new Complex128( -4.2, 5.5 ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns -0.6069136033622302
*
* var im = imag( v );
* // returns 0.79476781392673
*
* v = csignum( new Complex128( 0.0, 0.0 ) );
* // returns <Complex128>
*
* re = real( v );
* // returns -0.0
*
* im = imag( v );
* // returns 0.0
*
* v = csignum( new Complex128( NaN, NaN ) );
* // returns <Complex128>
*
* re = real( v );
* // returns -NaN
*
* im = imag( v );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
