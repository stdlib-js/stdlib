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
* Lévy distribution logarithm of cumulative distribution function (CDF).
*
* @module @stdlib/stats/base/dists/levy/logcdf
*
* @example
* var logcdf = require( '@stdlib/stats/base/dists/levy/logcdf' );
*
* var y = logcdf( 10.0, 0.0, 3.0 );
* // returns ~-0.538
*
* y = logcdf( 0.3, 0.0, 3.0 );
* // returns ~-6.215
*
* @example
* var factory = require( '@stdlib/stats/base/dists/levy/logcdf' ).factory;
*
* var mylogcdf = factory( 2.0, 3.0 );
* var y = mylogcdf( 100.0 );
* // returns ~-0.15
*
* y = mylogcdf( 10.0 );
* // returns ~-0.616
*
* y = mylogcdf( 2.0 );
* // returns -Infinity
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logcdf = require( './logcdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logcdf, 'factory', factory );


// EXPORTS //

module.exports = logcdf;
