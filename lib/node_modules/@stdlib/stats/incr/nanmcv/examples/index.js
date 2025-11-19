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

var randu = require( '@stdlib/random/base/randu' );
var incrnanmcv = require( './../lib' );

// Initialize an accumulator with window size 5:
var accumulator = incrnanmcv( 5 );

// For each simulated datum, update the moving coefficient of variation...
var i;
for ( i = 0; i < 100; i++ ) {
	accumulator( ( randu() < 0.2 ) ? NaN : randu()*100.0 );
}
console.log( accumulator() );
