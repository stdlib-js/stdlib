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
* Return the complex conjugate of a single-precision complex floating-point number.
*
* @module @stdlib/complex/conjf
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
* var conjf = require( '@stdlib/complex/conjf' );
*
* var z = new Complex64( 5.0, 3.0 );
*
* var v = conjf( z );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 5.0
*
* var im = imagf( v );
* // returns -3.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
