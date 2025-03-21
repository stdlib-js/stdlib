/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Studentized range cumulative distribution function (CDF).
*
* @module @stdlib/stats/base/dists/studentized-range/cdf
*
* @example
* var cdf = require( '@stdlib/stats/base/dists/studentized-range/cdf' );
*
* var y = cdf( 2.0, 0.1 );
* // returns ~0.611
*
* y = cdf( 1.0, 2.0 );
* // returns ~0.789
*
* y = cdf( -1.0, 4.0 );
* // returns ~0.187
*
* var mycdf = cdf.factory( 3.0, 2.0 );
* y = mycdf( 3.0 );
* // returns ~0.712
*
* y = mycdf( 1.0 );
* // returns ~0.216
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
