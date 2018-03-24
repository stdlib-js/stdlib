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
* Beta prime distribution skewness.
*
* @module @stdlib/stats/base/dists/betaprime/skewness
*
* @example
* var skewness = require( '@stdlib/stats/base/dists/betaprime/skewness' );
*
* var v = skewness( 2.0, 4.0 );
* // returns ~6.261
*
* v = skewness( 4.0, 12.0 );
* // returns ~1.724
*
* v = skewness( 8.0, 4.0 );
* // returns ~5.729
*/

// MODULES //

var skewness = require( './skewness.js' );


// EXPORTS //

module.exports = skewness;
