/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var PI = require( '@stdlib/constants/float64/pi' );
var iterContinuedFractionSeq = require( './../lib' );

function evaluate( terms ) {
	var sum;
	var N;
	var i;

	N = terms.length;
	sum = 0.0;
	if ( N > 1 ) {
		sum = 1.0 / terms[ N-1 ];
		for ( i = N-2; i > 0; i-- ) {
			sum = 1.0 / ( terms[ i ] + sum );
		}
	}
	sum += terms[ 0 ];
	return sum;
}

// Create an iterator:
var opts = {
	'iter': 20
};
var it = iterContinuedFractionSeq( PI, opts );

// Perform manual iteration...
var terms = [];
var v;
while ( true ) {
	v = it.next();
	if ( v.done ) {
		break;
	}
	terms.push( v.value );
}
console.log( 'original: %d', PI );
console.log( terms );
console.log( 'computed: %d', evaluate( terms ) );
