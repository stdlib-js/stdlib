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
* Pareto (Type I) distribution skewness.
*
* @module @stdlib/stats/base/dists/pareto-type1/skewness
*
* @example
* var skewness = require( '@stdlib/stats/base/dists/pareto-type1/skewness' );
*
* var v = skewness( 3.5, 1.0 );
* // returns ~11.784
*
* v = skewness( 4.0, 12.0 );
* // returns ~7.071
*
* v = skewness( 8.0, 2.0 );
* // returns ~3.118
*/

// MODULES //

var skewness = require( './skewness.js' );


// EXPORTS //

module.exports = skewness;
