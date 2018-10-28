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
* Binomial distribution cumulative distribution function (CDF).
*
* @module @stdlib/stats/base/dists/binomial/cdf
*
* @example
* var cdf = require( '@stdlib/stats/base/dists/binomial/cdf' );
*
* var y = cdf( 3.0, 20, 0.2 );
* // returns ~0.411
*
* y = cdf( 21.0, 20, 0.2 );
* // returns 1.0
*
* y = cdf( 5.0, 10, 0.4 );
* // returns ~0.834
*
* y = cdf( 0.0, 10, 0.4 );
* // returns ~0.06
*
* @example
* var factory = require( '@stdlib/stats/base/dists/binomial/cdf' ).factory;
*
* var cdf = factory( 10, 0.5 );
*
* var y = cdf( 3.0 );
* // returns ~0.172
*
* y = cdf( 1.0 );
* // returns ~0.011
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var cdf = require( './cdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( cdf, 'factory', factory );


// EXPORTS //

module.exports = cdf;
