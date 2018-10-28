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
* Triangular distribution cumulative distribution function (CDF).
*
* @module @stdlib/stats/base/dists/triangular/cdf
*
* @example
* var cdf = require( '@stdlib/stats/base/dists/triangular/cdf' );
*
* var y = cdf( 0.5, -1.0, 1.0, 0.0 );
* // returns 0.875
*
* y = cdf( 0.5, -1.0, 1.0, 0.5 );
* // returns 0.75
*
* y = cdf( -10.0, -20.0, 0.0, -2.0 );
* // returns ~0.278
*
* y = cdf( -2.0, -1.0, 1.0, 0.0 );
* // returns 0.0
*
* var mycdf = cdf.factory( 0.0, 10.0, 2.0 );
* y = mycdf( 0.5 );
* // returns 0.0125
*
* y = mycdf( 8.0 );
* // returns 0.95
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var cdf = require( './cdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( cdf, 'factory', factory );


// EXPORTS //

module.exports = cdf;
