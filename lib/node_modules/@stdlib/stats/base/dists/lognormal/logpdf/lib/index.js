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
* Evaluate the natural logarithm of the probability density function (PDF) for a lognormal distribution.
*
* @module @stdlib/stats/base/dists/lognormal/logpdf
*
* @example
* var logpdf = require( '@stdlib/stats/base/dists/lognormal/logpdf' );
*
* var y = logpdf( 2.0, 0.0, 1.0 );
* // returns ~-1.852
*
* y = logpdf( 1.0, 0.0, 1.0 );
* // returns ~-0.919
*
* y = logpdf( 1.0, 3.0, 1.0 );
* // returns ~-5.419
*
* var mylogpdf = logpdf.factory( 4.0, 2.0 );
* y = mylogpdf( 10.0 );
* // returns ~-4.269
*
* y = mylogpdf( 2.0 );
* // returns ~-3.689
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logpdf = require( './logpdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logpdf, 'factory', factory );


// EXPORTS //

module.exports = logpdf;
