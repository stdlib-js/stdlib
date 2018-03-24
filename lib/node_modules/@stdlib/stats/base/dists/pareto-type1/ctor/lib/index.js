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
* Pareto (Type I) distribution constructor.
*
* @module @stdlib/stats/base/dists/pareto-type1/ctor
*
* @example
* var Pareto1 = require( '@stdlib/stats/base/dists/pareto-type1/ctor' );
*
* var pareto1 = new Pareto1( 1.0, 1.0 );
*
* var y = pareto1.cdf( 10.0 );
* // returns 0.9
*
* var mu = pareto1.mean;
* // returns Infinity
*/

// MODULES //

var ctor = require( './ctor.js' );


// EXPORTS //

module.exports = ctor;
