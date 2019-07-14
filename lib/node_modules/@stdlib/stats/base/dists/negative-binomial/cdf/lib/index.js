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
* Negative binomial distribution cumulative distribution function (CDF).
*
* @module @stdlib/stats/base/dists/negative-binomial/cdf
*
* @example
* var cdf = require( '@stdlib/stats/base/dists/negative-binomial/cdf' );
*
* var y = cdf( 5.0, 20.0, 0.8 );
* // returns ~0.617
*
* y = cdf( 21.0, 20.0, 0.5 );
* // returns ~0.622
*
* y = cdf( 5.0, 10.0, 0.4 );
* // returns ~0.034
*
* y = cdf( 0.0, 10.0, 0.9 );
* // returns ~0.349
*
* y = cdf( 21.0, 15.5, 0.5 );
* // returns ~0.859
*
* y = cdf( 5.0, 7.4, 0.4 );
* // returns ~0.131
*
* var mycdf = cdf.factory( 10, 0.5 );
* y = mycdf( 3.0 );
* // returns ~0.046
*
* y = mycdf( 11.0 );
* // returns ~0.668
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var cdf = require( './cdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( cdf, 'factory', factory );


// EXPORTS //

module.exports = cdf;
