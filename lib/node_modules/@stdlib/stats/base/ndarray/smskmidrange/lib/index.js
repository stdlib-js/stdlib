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
* Calculate the mid-range of a one-dimensional single-precision floating-point ndarray according to a mask.
*
* @module @stdlib/stats/base/ndarray/smskmidrange
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var Uint8Vector = require( '@stdlib/ndarray/vector/uint8' );
* var smskmidrange = require( '@stdlib/stats/base/ndarray/smskmidrange' );
*
* var x = new Float32Vector( [ 1.0, -2.0, 4.0, 2.0 ] );
* var mask = new Uint8Vector( [ 0, 0, 1, 0 ] );
*
* var v = smskmidrange( [ x, mask ] );
* // returns 0.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
