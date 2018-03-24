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
* Pareto (Type I) distribution differential entropy.
*
* @module @stdlib/stats/base/dists/pareto-type1/entropy
*
* @example
* var entropy = require( '@stdlib/stats/base/dists/pareto-type1/entropy' );
*
* var v = entropy( 0.8, 1.0 );
* // returns ~2.473
*
* v = entropy( 4.0, 12.0 );
* // returns ~2.349
*
* v = entropy( 8.0, 2.0 );
* // returns ~-0.261
*/

// MODULES //

var entropy = require( './entropy.js' );


// EXPORTS //

module.exports = entropy;
