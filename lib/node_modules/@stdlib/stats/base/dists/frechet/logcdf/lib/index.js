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
* Fréchet distribution logarithm of the cumulative distribution function (CDF).
*
* @module @stdlib/stats/base/dists/frechet/logcdf
*
* @example
* var logcdf = require( '@stdlib/stats/base/dists/frechet/logcdf' );
*
* var y = logcdf( 10.0, 2.0, 3.0, 5.0 );
* // returns ~-0.36
*
* y = logcdf( 3.8, 2.0, 3.0, 2.0 );
* // returns ~-2.778
*
* @example
* var factory = require( '@stdlib/stats/base/dists/frechet/logcdf' ).factory;
* var logcdf = factory( 3.0, 3.0, 5.0 );
* var y = logcdf( 10.0 );
* // returns ~-0.216
*
* y = logcdf( 7.0 );
* // returns ~-3.381
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logcdf = require( './logcdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logcdf, 'factory', factory );


// EXPORTS //

module.exports = logcdf;
