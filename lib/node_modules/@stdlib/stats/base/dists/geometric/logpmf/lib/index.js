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
* Geometric distribution logarithm of probability mass function (PMF).
*
* @module @stdlib/stats/base/dists/geometric/logpmf
*
* @example
* var logpmf = require( '@stdlib/stats/base/dists/geometric/logpmf' );
*
* var y = logpmf( 4.0, 0.3 );
* // returns ~-2.631
*
* y = logpmf( 2.0, 0.7 );
* // returns ~-2.765
*
* var mylogpmf = logpmf.factory( 0.5 );
* y = mylogpmf( 3.0 );
* // returns ~-2.773
*
* y = mylogpmf( 1.0 );
* // returns ~-1.386
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logpmf = require( './logpmf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logpmf, 'factory', factory );


// EXPORTS //

module.exports = logpmf;
