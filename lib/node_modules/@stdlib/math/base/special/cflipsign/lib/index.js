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
* Return a double-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.
*
* @module @stdlib/math/base/special/cflipsign
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
* var cflipsign = require( '@stdlib/math/base/special/cflipsign' );
*
* var v = cflipsign( new Complex128( -4.2, 5.5 ), -55.0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 4.2
*
* var im = imag( v );
* // returns -5.5
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
