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
* Apply a binary function to each pair of elements retrieved from strided input arrays according to a callback function and assign results to a strided output array.
*
* @module @stdlib/strided/base/map-by2
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var mapBy2 = require( '@stdlib/strided/base/map-by2' );
*
* function accessor( values ) {
*     values[ 0 ] *= 2.0;
*     values[ 1 ] *= 2.0;
*     return values;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy2( x.length, x, 1, y, 1, z, 1, add, accessor );
*
* console.log( z );
* // => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var mapBy2 = require( '@stdlib/strided/base/map-by2' );
*
* function accessor( values ) {
*     values[ 0 ] *= 2.0;
*     values[ 1 ] *= 2.0;
*     return values;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
*
* console.log( z );
* // => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
