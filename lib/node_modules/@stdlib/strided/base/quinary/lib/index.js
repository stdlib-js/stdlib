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
* Apply a quinary callback to strided input array elements and assign results to elements in a strided output array.
*
* @module @stdlib/strided/base/quinary
*
* @example
* var add = require( '@stdlib/number/float64/base/add5' );
* var Float64Array = require( '@stdlib/array/float64' );
* var quinary = require( '@stdlib/strided/base/quinary' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var v = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1, 1, 1, 1 ];
*
* quinary( [ x, y, z, w, u, v ], shape, strides, add );
*
* console.log( v );
* // => <Float64Array>[ 5.0, 10.0, 15.0, 20.0, 25.0 ]
*
* @example
* var add = require( '@stdlib/number/float64/base/add5' );
* var Float64Array = require( '@stdlib/array/float64' );
* var quinary = require( '@stdlib/strided/base/quinary' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var v = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1, 1, 1, 1 ];
* var offsets = [ 0, 0, 0, 0, 0, 0 ];
*
* quinary.ndarray( [ x, y, z, w, u, v ], shape, strides, offsets, add );
*
* console.log( v );
* // => <Float64Array>[ 5.0, 10.0, 15.0, 20.0, 25.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
