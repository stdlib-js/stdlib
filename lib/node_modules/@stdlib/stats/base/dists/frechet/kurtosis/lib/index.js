/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Fréchet distribution excess kurtosis.
*
* @module @stdlib/stats/base/dists/frechet/kurtosis
*
* @example
* var kurtosis = require( '@stdlib/stats/base/dists/frechet/kurtosis' );
*
* var y = kurtosis( 8.0, 2.0, 0.0 );
* // returns ~11.166
*
* y = kurtosis( 8.0, 16.0, 3.0 );
* // returns ~11.166
*
* y = kurtosis( 1.0, 1.0, -3.0 );
* // returns Infinity
*/

// MODULES //

var kurtosis = require( './kurtosis.js' );


// EXPORTS //

module.exports = kurtosis;
