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
* Evaluate the natural logarithm of the cumulative distribution function (CDF) for a beta prime distribution.
*
* @module @stdlib/stats/base/dists/betaprime/logcdf
*
* @example
* var logcdf = require( '@stdlib/stats/base/dists/betaprime/logcdf' );
*
* var y = logcdf( 0.5, 1.0, 1.0 );
* // returns ~-1.099
*
* y = logcdf( 0.5, 2.0, 4.0 );
* // returns ~-0.618
*
* @example
* var factory = require( '@stdlib/stats/base/dists/betaprime/logcdf' ).factory;
*
* var logcdf = factory( 0.5, 0.5 );
*
* var y = logcdf( 0.8 );
* // returns ~-0.766
*
* y = logcdf( 0.3 );
* // returns ~-1.142
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logcdf = require( './logcdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logcdf, 'factory', factory );


// EXPORTS //

module.exports = logcdf;
