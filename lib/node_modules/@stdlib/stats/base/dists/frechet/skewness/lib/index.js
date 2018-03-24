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
* Fréchet distribution skewness.
*
* @module @stdlib/stats/base/dists/frechet/skewness
*
* @example
* var skewness = require( '@stdlib/stats/base/dists/frechet/skewness' );
*
* var y = skewness( 4.0, 2.0, 0.0 );
* // returns ~1.083
*
* y = skewness( 1.0, 1.0, -3.0 );
* // returns Infinity
*/

// MODULES //

var skewness = require( './skewness.js' );


// EXPORTS //

module.exports = skewness;
