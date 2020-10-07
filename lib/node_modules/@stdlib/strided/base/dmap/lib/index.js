/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Apply a unary function accepting and returning double-precision floating-point numbers to each element in a double-precision floating-point strided input array and assign each result to an element in a double-precision floating-point strided output array.
*
* @module @stdlib/strided/base/dmap
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dmap = require( '@stdlib/strided/base/dmap' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( x.length );
*
* dmap( x.length, x, 1, y, 1, scale );
*
* console.log( y );
* // => <Float64Array>[ 10.0, 20.0, 30.0, 40.0, 50.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dmap = require( '@stdlib/strided/base/dmap' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( x.length );
*
* dmap.ndarray( x.length, x, 1, 0, y, 1, 0, scale );
*
* console.log( y );
* // => <Float64Array>[ 10.0, 20.0, 30.0, 40.0, 50.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
