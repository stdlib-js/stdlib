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
* Compute the inverse of a single-precision complex floating-point number.
*
* @module @stdlib/math/base/special/cinvf
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var cinvf = require( '@stdlib/math/base/special/cinvf' );
*
* var v = cinvf( new Complex64( 2.0, 4.0 ) );
* // returns <Complex64>
*
* var re = realf( v );
* // returns ~0.1
*
* var im = imagf( v );
* // returns ~-0.2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
