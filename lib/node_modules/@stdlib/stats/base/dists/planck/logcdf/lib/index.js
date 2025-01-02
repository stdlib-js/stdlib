/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Evaluate the logarithm of cumulative distribution function (CDF) for a Planck distribution with shape parameter `lambda`.
*
* @module @stdlib/stats/base/dists/planck/logcdf
*
* @example
* var logcdf = require( '@stdlib/stats/base/dists/planck/logcdf' );
*
* var y = logcdf( 2.0, 0.5 );
* // returns ~-0.2525
*
* y = logcdf( 2.0, 1.5 );
* // returns ~-0.0112
*
* var mylogcdf = logcdf.factory( 1.5 );
* y = mylogcdf( 3.0 );
* // returns ~-0.0025
*
* y = mylogcdf( 1.0 );
* // returns ~-0.0511
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
