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
* Natural logarithm of the probability mass function (PMF) for a discrete uniform distribution.
*
* @module @stdlib/stats/base/dists/discrete-uniform/logpmf
*
* @example
* var logpmf = require( '@stdlib/stats/base/dists/discrete-uniform/logpmf' );
*
* var y = logpmf( 3.0, 2, 6 );
* // returns ~-1.609
*
* var myLogPMF = logpmf.factory( 6, 7 );
* y = myLogPMF( 7.0 );
* // returns ~-0.693
*
* y = myLogPMF( 5.0 );
* // returns -Infinity
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var logpmf = require( './logpmf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( logpmf, 'factory', factory );


// EXPORTS //

module.exports = logpmf;
