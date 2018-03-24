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
* Kumaraswamy's double bounded distribution median.
*
* @module @stdlib/stats/base/dists/kumaraswamy/median
*
* @example
* var median = require( '@stdlib/stats/base/dists/kumaraswamy/median' );
*
* var v = median( 2.0, 1.0 );
* // returns ~0.707
*
* v = median( 4.0, 12.0 );
* // returns ~0.487
*
* v = median( 16.0, 8.0 );
* // returns ~0.856
*/

// MODULES //

var median = require( './median.js' );


// EXPORTS //

module.exports = median;
