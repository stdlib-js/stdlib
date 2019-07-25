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
* Hypergeometric distribution cumulative distribution function (CDF).
*
* @module @stdlib/stats/base/dists/hypergeometric/cdf
*
* @example
* var cdf = require( '@stdlib/stats/base/dists/hypergeometric/cdf' );
*
* var y = cdf( 1.0, 8, 4, 2 );
* // returns ~0.786
*
* y = cdf( 1.5, 8, 4, 2 );
* // returns ~0.786
*
* y = cdf( 2.0, 8, 4, 2 );
* // returns 1.0
*
* y = cdf( 0.0, 8, 4, 2 );
* // returns ~0.214
*
* var mycdf = cdf.factory( 30, 20, 5 );
* y = mycdf( 4.0 );
* // returns ~0.891
*
* y = mycdf( 1.0 );
* // returns ~0.031
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var cdf = require( './cdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( cdf, 'factory', factory );


// EXPORTS //

module.exports = cdf;
