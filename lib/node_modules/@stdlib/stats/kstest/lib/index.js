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
* Compute a Kolmogorov-Smirnov goodness-of-fit test.
*
* @module @stdlib/stats/kstest
*
* @example
* var generator = require( '@stdlib/random/base/normal' ).factory;
* var kstest = require( '@stdlib/stats/kstest' );
*
* var rnorm;
* var out;
* var i;
* var x;
*
* // Values drawn from a Normal(3,1) distribution
* rnorm = generator( 3.0, 1.0, {
*     'seed': 293
* });
* x = new Array( 100 );
* for ( i = 0; i < 100; i++ ) {
*     x[ i ] = rnorm();
* }
*
* // Test against N(0,1)
* out = kstest( x, 'normal', 0.0, 1.0 );
* // returns { pValue: 0, statistic: ~0.901, ... }
*
* // Test against N(3,1)
* out = kstest( x, 'normal', 3.0, 1.0 );
* // returns { pValue: ~0.234, statistic: ~0.102, ... }
*/

// MODULES //

var kstest = require( './main.js' );


// EXPORTS //

module.exports = kstest;
