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
* Compute a one-sample Student's t-Test.
*
* @module @stdlib/stats/ttest
*
* @example
* var normal = require( '@stdlib/random/base/normal' ).factory;
* var Float64Array = require( '@stdlib/array/float64' );
* var ttest = require( '@stdlib/stats/ttest' );
*
* var rnorm;
* var out;
* var i;
* var x;
* var y;
*
* rnorm = normal( 1.0, 2.0, {
*     'seed': 786
* });
*
* // One-sample t-test:
* x = new Float64Array( 100 );
* for ( i = 0; i < x.length; i++ ) {
*     x[ i ] = rnorm();
* }
* out = ttest( x );
*
* // Paired t-test:
* x = new Float64Array( 100 );
* y = new Float64Array( 100 );
* for ( i = 0; i < x.length; i++ ) {
*     x[ i ] = rnorm();
*     y[ i ] = rnorm();
* }
* out = ttest( x, y );
*/

// MODULES //

var ttest = require( './main.js' );


// EXPORTS //

module.exports = ttest;
