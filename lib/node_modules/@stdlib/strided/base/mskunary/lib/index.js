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
* Apply a unary callback to elements in a strided input array according to elements in a strided mask array and assign results to elements in a strided output array.
*
* @module @stdlib/strided/base/mskunary
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var mskunary = require( '@stdlib/strided/base/mskunary' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
* var y = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1 ];
*
* mskunary( [ x, m, y ], shape, strides, scale );
*
* console.log( y );
* // => <Float64Array>[ 10.0, 20.0, 0.0, 40.0, 50.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var mskunary = require( '@stdlib/strided/base/mskunary' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
* var y = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1 ];
* var offsets = [ 0, 0, 0 ];
*
* mskunary.ndarray( [ x, m, y ], shape, strides, offsets, scale );
*
* console.log( y );
* // => <Float64Array>[ 10.0, 20.0, 0.0, 40.0, 50.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var mskunary = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( mskunary, 'ndarray', ndarray );


// EXPORTS //

module.exports = mskunary;
