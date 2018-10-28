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
* Triangular distribution logarithm of probability density function (PDF).
*
* @module @stdlib/stats/base/dists/triangular/logpdf
*
* @example
* var logpdf = require( '@stdlib/stats/base/dists/triangular/logpdf' );
*
* var y = logpdf( 0.5, -1.0, 1.0, 0.0 );
* // returns ~-0.693
*
* y = logpdf( 0.5, -1.0, 1.0, 0.5 );
* // returns 0.0
*
* y = logpdf( -10.0, -20.0, 0.0, -2.0 );
* // returns ~-2.89
*
* var mylogpdf = logpdf.factory( 0.0, 10.0, 5.0 );
* y = mylogpdf( 2.0 );
* // returns ~-2.526
*
* y = mylogpdf( 12.0 );
* // returns -Infinity
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logpdf = require( './logpdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logpdf, 'factory', factory );


// EXPORTS //

module.exports = logpdf;
