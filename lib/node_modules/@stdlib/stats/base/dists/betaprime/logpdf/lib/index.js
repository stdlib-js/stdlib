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
* Evaluate the natural logarithm of the probability density function (logPDF) for a beta prime distribution.
*
* @module @stdlib/stats/base/dists/betaprime/logpdf
*
* @example
* var logpdf = require( '@stdlib/stats/base/dists/betaprime/logpdf' );
*
* var y = logpdf( 0.5, 1.0, 1.0 );
* // returns ~-0.811
*
* y = logpdf( 0.5, 2.0, 4.0 );
* // returns ~-0.13
*
* @example
* var factory = require( '@stdlib/stats/base/dists/betaprime/logpdf' ).factory;
*
* var logpdf = factory( 0.5, 0.5 );
*
* var y = logpdf( 0.8 );
* // returns ~-0.228
*
* y = logpdf( 0.3 );
* // returns ~-0.364
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logpdf = require( './logpdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logpdf, 'factory', factory );


// EXPORTS //

module.exports = logpdf;
