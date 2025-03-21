/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var sparsearray2iteratorRight = require( './../lib' );

function scale( v, i ) {
	return v * (i+1);
}

// Create an array partially filled with random numbers:
var arr = new Array( 100 );
var i;
for ( i = 0; i < arr.length; i += 2 ) {
	arr[ i ] = randu();
}

// Create an iterator from the array which scales iterated values:
var it = sparsearray2iteratorRight( arr, scale );

// Perform manual iteration...
var v;
while ( true ) {
	v = it.next();
	if ( v.done ) {
		break;
	}
	console.log( v.value );
}
