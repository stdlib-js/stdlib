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
* Natural logarithm of the probability mass function (PMF) for a negative binomial distribution.
*
* @module @stdlib/stats/base/dists/negative-binomial/logpmf
*
* @example
* var logpmf = require( '@stdlib/stats/base/dists/negative-binomial/logpmf' );
*
* var y = logpmf( 5.0, 20.0, 0.8 );
* // returns ~-1.853
*
* y = logpmf( 21.0, 20.0, 0.5 );
* // returns ~-2.818
*
* y = logpmf( 5.0, 10.0, 0.4 );
* // returns ~-4.115
*
* y = logpmf( 0.0, 10.0, 0.9 );
* // returns ~-1.054
*
* y = logpmf( 21.0, 15.5, 0.5 );
* // returns ~-3.292
*
* y = logpmf( 5.0, 7.4, 0.4 );
* // returns ~-2.976
*
* var mylogpmf = logpmf.factory( 10, 0.5 );
* y = mylogpmf( 3.0 );
* // returns ~-3.612
*
* y = mylogpmf( 5.0 );
* // returns ~-2.797
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logpmf = require( './logpmf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logpmf, 'factory', factory );


// EXPORTS //

module.exports = logpmf;
