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
* Apply a unary function to each element retrieved from a strided input array according to a callback function and assign each result to an element in a strided output array.
*
* @module @stdlib/strided/base/map-by
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
* var mapBy = require( '@stdlib/strided/base/map-by' );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy( x.length, x, 1, y, 1, abs, accessor );
*
* console.log( y );
* // => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
* var mapBy = require( '@stdlib/strided/base/map-by' );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, abs, accessor );
*
* console.log( y );
* // => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
