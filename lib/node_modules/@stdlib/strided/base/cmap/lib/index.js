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
* Apply a unary function to a single-precision floating-point strided input array and assign results to a single-precision floating-point strided output array.
*
* @module @stdlib/strided/base/cmap
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var cmap = require( '@stdlib/strided/base/cmap' );
*
* function scale( x ) {
*     var re = real( x );
*     var im = imag( x );
*     return new Complex64( re*10.0, im*10.0 );
* }
*
* var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
* var y = new Complex64Array( x.length );
*
* cmap( x.length, x, 1, y, 1, scale );
*
* var v = y.get( 0 );
* // returns <Complex64>
*
* var re = real( v );
* // returns 10.0
*
* var im = imag( v );
* // returns 10.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var cmap = require( '@stdlib/strided/base/cmap' );
*
* function scale( x ) {
*     var re = real( x );
*     var im = imag( x );
*     return new Complex64( re*10.0, im*10.0 );
* }
*
* var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
* var y = new Complex64Array( x.length );
*
* cmap.ndarray( x.length, x, 1, 0, y, 1, 0, scale );
*
* var v = y.get( 0 );
* // returns <Complex64>
*
* var re = real( v );
* // returns 10.0
*
* var im = imag( v );
* // returns 10.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
