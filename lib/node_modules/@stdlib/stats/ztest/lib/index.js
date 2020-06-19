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
* Compute a one-sample z-Test.
*
* @module @stdlib/stats/ztest
*
* @example
* var ztest = require( '@stdlib/stats/ztest' );
* var normal = require( '@stdlib/random/base/normal' ).factory;
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
* // One-sample z-test:
* x = new Array( 300 );
* for ( i = 0; i < x.length; i++ ) {
*     x[ i ] = rnorm();
* }
* out = ztest( x, 2.0 );
*/

// MODULES //

var ztest = require( './main.js' );


// EXPORTS //

module.exports = ztest;
