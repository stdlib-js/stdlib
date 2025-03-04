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
* Apply a binary callback to strided input array elements and assign results to elements in a strided output array.
*
* @module @stdlib/strided/base/binary
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var add = require( '@stdlib/number/float64/base/add' );
* var binary = require( '@stdlib/strided/base/binary' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1 ];
*
* binary( [ x, y, z ], shape, strides, add );
*
* console.log( z );
* // => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var add = require( '@stdlib/number/float64/base/add' );
* var binary = require( '@stdlib/strided/base/binary' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1 ];
* var offsets = [ 0, 0, 0 ];
*
* binary.ndarray( [ x, y, z ], shape, strides, offsets, add );
*
* console.log( z );
* // => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
