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
* Compute the maximum absolute value of a sorted single-precision floating-point strided array.
*
* @module @stdlib/stats/base/smaxabssorted
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var smaxabssorted = require( '@stdlib/stats/base/smaxabssorted' );
*
* var x = new Float32Array( [ -1.0, -2.0, -3.0 ] );
*
* var v = smaxabssorted( x.length, x, 1 );
* // returns 3.0
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var smaxabssorted = require( '@stdlib/stats/base/smaxabssorted' );
*
* var x = new Float32Array( [ 2.0, -3.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = smaxabssorted.ndarray( 4, x, 2, 1 );
* // returns 4.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
