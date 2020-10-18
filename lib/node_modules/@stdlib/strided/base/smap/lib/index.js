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
* Apply a unary function accepting and returning single-precision floating-point numbers to each element in a single-precision floating-point strided input array and assign each result to an element in a single-precision floating-point strided output array.
*
* @module @stdlib/strided/base/smap
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var smap = require( '@stdlib/strided/base/smap' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( x.length );
*
* smap( x.length, x, 1, y, 1, scale );
*
* console.log( y );
* // => <Float32Array>[ 10.0, 20.0, 30.0, 40.0, 50.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var smap = require( '@stdlib/strided/base/smap' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( x.length );
*
* smap.ndarray( x.length, x, 1, 0, y, 1, 0, scale );
*
* console.log( y );
* // => <Float32Array>[ 10.0, 20.0, 30.0, 40.0, 50.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
