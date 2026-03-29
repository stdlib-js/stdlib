/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Calculate the minimum value of a one-dimensional single-precision floating-point ndarray according to a mask.
*
* @module @stdlib/stats/base/ndarray/smskmin
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var smskmin = require( '@stdlib/stats/base/ndarray/smskmin' );
*
* var xbuf = new Float32Array( [ 1.0, -2.0, 4.0, 2.0 ] );
* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var maskbuf = new Uint8Array( [ 0, 0, 1, 0 ] );
* var mask = new ndarray( 'uint8', maskbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = smskmin( [ x, mask ] );
* // returns -2.0
*/

// MODULES //

var smskmin = require( './main.js' );


// EXPORTS //

module.exports = smskmin;
