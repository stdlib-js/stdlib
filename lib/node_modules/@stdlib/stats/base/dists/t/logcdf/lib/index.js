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
* Natural logarithm of the cumulative distribution function (CDF) for a Student's t distribution.
*
* @module @stdlib/stats/base/dists/t/logcdf
*
* @example
* var logcdf = require( '@stdlib/stats/base/dists/t/logcdf' );
*
* var y = logcdf( 2.0, 0.1 );
* // returns ~-0.493
*
* y = logcdf( 1.0, 2.0 );
* // returns ~-0.237
*
* y = logcdf( -1.0, 4.0 );
* // returns ~-1.677
*
* var mylogcdf = logcdf.factory( 0.5 );
* y = mylogcdf( 3.0 );
* // returns ~-0.203
*
* y = mylogcdf( 1.0 );
* // returns ~-0.358
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logcdf = require( './logcdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logcdf, 'factory', factory );


// EXPORTS //

module.exports = logcdf;
