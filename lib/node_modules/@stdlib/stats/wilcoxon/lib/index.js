/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Compute a Wilcoxon signed-rank test.
*
* @module @stdlib/stats/wilcoxon
*
* @example
* var normal = require( '@stdlib/random/base/normal' ).factory;
* var wilcoxon = require( '@stdlib/stats/wilcoxon' );
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
* // One-sample Wilcoxon signed rank test:
* x = new Array( 100 );
* for ( i = 0; i < x.length; i++ ) {
*     x[ i ] = rnorm();
* }
* out = wilcoxon( x );
*
* // Paired Wilcoxon signed rank test:
* x = new Array( 100 );
* y = new Array( 100 );
* for ( i = 0; i < x.length; i++ ) {
*     x[ i ] = rnorm();
*     y[ i ] = rnorm();
* }
* out = wilcoxon( x, y );
*/

// MODULES //

var wilcoxon = require( './main.js' );


// EXPORTS //

module.exports = wilcoxon;
