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
* Compute the variance of an array using a two-pass algorithm.
*
* @module @stdlib/stats/array/variancepn
*
* @example
* var variance = require( '@stdlib/stats/array/variancepn' );
*
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = variance( x, 1.0 );
* // returns ~4.3333
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
