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

var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var Float64Array = require( '@stdlib/array/float64' );
var dsort2ins = require( './../lib' );

var rand;
var sign;
var i;

var x = new Float64Array( 10 );
var y = new Float64Array( 10 ); // index array
for ( i = 0; i < x.length; i++ ) {
	if ( randu() < 0.2 ) {
		x[ i ] = NaN;
	} else {
		rand = round( randu()*100.0 );
		sign = randu();
		if ( sign < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		x[ i ] = sign * rand;
	}
	y[ i ] = i;
}
console.log( x );
console.log( y );

dsort2ins( x.length, -1.0, x, -1, y, -1 );
console.log( x );
console.log( y );
