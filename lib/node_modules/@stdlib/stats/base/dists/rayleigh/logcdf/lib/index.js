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
* Rayleigh distribution logarithm of cumulative distribution function (CDF).
*
* @module @stdlib/stats/base/dists/rayleigh/logcdf
*
* @example
* var logcdf = require( '@stdlib/stats/base/dists/rayleigh/logcdf' );
*
* var y = logcdf( 2.0, 5.0 );
* // returns ~-2.564
*
* var mylogcdf = logcdf.factory( 0.5 );
* y = mylogcdf( 1.0 );
* // returns ~-0.145
*
* y = mylogcdf( 0.5 );
* // returns ~-0.934
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logcdf = require( './logcdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logcdf, 'factory', factory );


// EXPORTS //

module.exports = logcdf;
