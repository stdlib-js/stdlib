/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Compute the maximum absolute value of a one-dimensional double-precision floating-point ndarray according to a mask.
*
* @module @stdlib/stats/base/ndarray/dmskmaxabs
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var Uint8Vector = require( '@stdlib/ndarray/vector/uint8' );
* var dmskmaxabs = require( '@stdlib/stats/base/ndarray/dmskmaxabs' );
*
* var x = new Float64Vector( [ 1.0, -5.0, 4.0, 2.0 ] );
* var mask = new Uint8Vector( [ 0, 0, 1, 0 ] );
*
* var v = dmskmaxabs( [ x, mask ] );
* // returns 5.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
