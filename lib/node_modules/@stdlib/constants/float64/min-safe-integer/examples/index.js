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

var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var FLOAT64_MIN_SAFE_INTEGER = require( './../lib' );

var min;
var x;
var i;

min = -pow( 2.0, 55 );
for ( i = 0; i < 100; i++ ) {
	x = round( randu() * min );
	if ( x < FLOAT64_MIN_SAFE_INTEGER ) {
		console.log( 'Unsafe: %d', x );
	} else {
		console.log( 'Safe: %d', x );
	}
}
