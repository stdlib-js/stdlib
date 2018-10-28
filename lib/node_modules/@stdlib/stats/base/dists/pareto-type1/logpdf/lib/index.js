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
* Evaluate the natural logarithm of the probability density function (PDF) for a Pareto (Type I) distribution.
*
* @module @stdlib/stats/base/dists/pareto-type1/logpdf
*
* @example
* var logpdf = require( '@stdlib/stats/base/dists/pareto-type1/logpdf' );
*
* var y = logpdf( 4.0, 1.0, 1.0 );
* // returns ~-2.773
*
* y = logpdf( 20.0, 1.0, 10.0 );
* // returns ~-3.689
*
* y = logpdf( 7.0, 2.0, 6.0 );
* // returns ~-1.561
*
* var mylogpdf = logpdf.factory( 0.5, 0.5 );
*
* y = mylogpdf( 0.8 );
* // returns ~-0.705
*
* y = mylogpdf( 2.0 );
* // returns ~-2.079
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logpdf = require( './logpdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logpdf, 'factory', factory );


// EXPORTS //

module.exports = logpdf;
