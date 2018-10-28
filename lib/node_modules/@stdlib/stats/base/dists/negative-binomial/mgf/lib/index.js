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
* Evaluate the moment-generating function (MGF) for a negative binomial distribution.
*
* @module @stdlib/stats/base/dists/negative-binomial/mgf
*
* @example
* var mgf = require( '@stdlib/stats/base/dists/negative-binomial/mgf' );
*
* var y = mgf( 0.05, 20.0, 0.8 );
* // returns ~267.839
*
* y = mgf( 0.1, 20.0, 0.1 );
* // returns ~9.347
*
* y = mgf( 0.5, 10.0, 0.4 );
* // returns ~42822.023
*
* var myMGF = mgf.factory( 4.3, 0.4 );
* y = myMGF( 0.2 );
* // returns ~4.696
*
* y = myMGF( 0.4 );
* // returns ~30.83
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var mgf = require( './mgf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( mgf, 'factory', factory );


// EXPORTS //

module.exports = mgf;
