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
* Pareto (Type I) distribution cumulative distribution function (CDF).
*
* @module @stdlib/stats/base/dists/pareto-type1/cdf
*
* @example
* var cdf = require( '@stdlib/stats/base/dists/pareto-type1/cdf' );
*
* var y = cdf( 2.0, 1.0, 1.0 );
* // returns 0.5
*
* y = cdf( 5.0, 2.0, 4.0 );
* // returns ~0.36
*
* y = cdf( 4.0, 2.0, 2.0 );
* // returns 0.75
*
* y = cdf( 1.9, 2.0, 2.0 );
* // returns 0.0
*
* y = cdf( +Infinity, 4.0, 2.0 );
* // returns 1.0
*
* var mycdf = cdf.factory( 10.0, 2.0 );
* y = mycdf( 3.0 );
* // returns ~0.983
*
* y = mycdf( 2.5 );
* // returns ~0.893
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var cdf = require( './cdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( cdf, 'factory', factory );


// EXPORTS //

module.exports = cdf;
