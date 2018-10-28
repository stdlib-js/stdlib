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
* Raised cosine distribution logarithm of probability density function (PDF).
*
* @module @stdlib/stats/base/dists/cosine/logpdf
*
* @example
* var logpdf = require( '@stdlib/stats/base/dists/cosine/logpdf' );
*
* var y = logpdf( 2.0, 0.0, 1.0 );
* // returns ~-2.254
*
* var mylogpdf = logpdf.factory( 10.0, 2.0 );
* y = mylogpdf( 10.0 );
* // returns ~-0.693
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logpdf = require( './logpdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logpdf, 'factory', factory );


// EXPORTS //

module.exports = logpdf;
