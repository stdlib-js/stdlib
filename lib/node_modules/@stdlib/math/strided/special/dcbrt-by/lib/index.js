/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Compute the cube root of each element retrieved from an input double-precision floating-point strided array via a callback function and assign each result to an element in an output double-precision floating-point strided array.
*
* @module @stdlib/math/strided/special/dcbrt-by
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dcbrtBy = require( '@stdlib/math/strided/special/dcbrt-by' );
*
* function accessor( v ) {
*     return v;
* }
*
* var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
* var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dcbrtBy( x.length, x, 1, out, 1, accessor );
* // out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dcbrtBy = require( '@stdlib/math/strided/special/dcbrt-by' );
*
* function accessor( v ) {
*     return v;
* }
*
* var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
* var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dcbrtBy.ndarray( x.length, x, 1, 0, out, 1, 0, accessor );
* // out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
