/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Half-normal distribution natural logarithm of probability density function (PDF).
*
* @module @stdlib/stats/base/dists/halfnormal/logpdf
*
* @example
* var logpdf = require( '@stdlib/stats/base/dists/halfnormal/logpdf' );
*
* var y = logpdf( 0.8, 1.0 );
* // returns ~-0.546
*
* var mylogpdf = logpdf.factory( 1.0 );
* y = mylogpdf( 0.8 );
* // returns ~-0.546
*
* y = mylogpdf( 1.2 );
* // returns ~-0.946
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
