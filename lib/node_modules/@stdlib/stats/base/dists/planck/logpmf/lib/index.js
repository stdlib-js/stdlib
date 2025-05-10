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
* Evaluate the logarithm of the probability mass function (PMF) for a Planck distribution.
*
* @module @stdlib/stats/base/dists/planck/logpmf
*
* @example
* var logpmf = require( '@stdlib/stats/base/dists/planck/logpmf' );
*
* var y = logpmf( 4.0, 0.3 );
* // returns ~-2.5502
*
* y = logpmf( 2.0, 1.7 );
* // returns ~-3.6017
*
* y = logpmf( -1.0, 0.5 );
* // returns 0.0
*
* var mylogpmf = logpmf.factory( 0.5 );
* y = mylogpmf( 3.0 );
* // returns ~-2.4328
*
* y = mylogpmf( 1.0 );
* // returns ~-1.4328
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
