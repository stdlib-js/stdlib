/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var randu = require( '@stdlib/random/iter/randu' );
var iterCuSomeBy = require( './../lib' );

function threshold( r ) {
	return ( r >= 0.95 );
}

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
	'iter': 100
};
var riter = randu( opts );

// Create an iterator which tracks whether at least two values have exceeded the threshold:
var it = iterCuSomeBy( riter, 2, threshold );

// Perform manual iteration...
var r;
while ( true ) {
	r = it.next();
	if ( r.done ) {
		break;
	}
	console.log( r.value );
}
