/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Negate a single-precision complex floating-point number.
*
* @module @stdlib/complex/float32/base/neg
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var cnegf = require( '@stdlib/complex/float32/base/neg' );
*
* var z = new Complex64( -4.0, 5.0 );
* // returns <Complex64>
*
* var out = cnegf( z );
* // returns <Complex64>
*
* var re = realf( out );
* // returns 4.0
*
* var im = imagf( out );
* // returns -5.0
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var cnegf = require( '@stdlib/complex/float32/base/neg' );
*
* var z = new Complex64( 0.0, 0.0 );
* // returns <Complex64>
*
* var out = cnegf( z );
* // returns <Complex64>
*
* var re = realf( out );
* // returns -0.0
*
* var im = imagf( out );
* // returns -0.0
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var cnegf = require( '@stdlib/complex/float32/base/neg' );
*
* var z = new Complex64( NaN, NaN );
* // returns <Complex64>
*
* var out = cnegf( z );
* // returns <Complex64>
*
* var re = realf( out );
* // returns NaN
*
* var im = imagf( out );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
