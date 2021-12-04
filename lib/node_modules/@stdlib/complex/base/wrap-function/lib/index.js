/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Wrap a function accepting complex number arguments to support providing both real and complex numbers.
*
* @module @stdlib/complex/base/wrap-function
*
* @example
* var Complex64 = require( '@stdlib/complex/float32' );
* var caddf = require( '@stdlib/math/base/ops/caddf' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
* var wrap = require( '@stdlib/complex/base/wrap-function' );
*
* var f = wrap( caddf, 2, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0 );
* // returns <Complex64>
*
* var re = real( z );
* // returns 7.0
*
* var im = imag( z );
* // returns 0.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
