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
* Moving Grubbs' test for outliers.
*
* @module @stdlib/stats/incr/mgrubbs
*
* @example
* var rnorm = require( '@stdlib/random/base/normal' );
* var incrmgrubbs = require( '@stdlib/stats/incr/mgrubbs' );
*
* var accumulator;
* var res;
* var i;
*
* accumulator = incrmgrubbs( 20 );
*
* for ( i = 0; i < 200; i++ ) {
*     res = accumulator( rnorm( 10.0, 5.0 ) );
* }
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
