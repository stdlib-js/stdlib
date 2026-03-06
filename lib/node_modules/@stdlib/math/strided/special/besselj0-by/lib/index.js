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
* Compute the Bessel function of the first kind of order zero for each element retrieved from an input strided array `x` via a callback function and assign each result to an element in an output strided array `y`.
*
* @module @stdlib/math/strided/special/besselj0-by
*
* @example
* var besselj0By = require( '@stdlib/math/strided/special/besselj0-by' );
*
* function accessor( v ) {
*     return v;
* }
*
* var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* besselj0By( x.length, x, 1, y, 1, accessor );
*
* console.log( y );
* // => [ 1.0, ~0.765, ~0.998, ~0.984, ~0.938 ]
*
* @example
* var besselj0By = require( '@stdlib/math/strided/special/besselj0-by' );
*
* function accessor( v ) {
*     return v;
* }
*
* var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
*
* console.log( y );
* // => [ 1.0, ~0.765, ~0.998, ~0.984, ~0.938 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
