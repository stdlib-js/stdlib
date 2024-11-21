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

var discreteUniform = require( '@stdlib/random/iter/discrete-uniform' );
var iterUniqueBy = require( './../lib' );

function predicate( a, b ) {
	return ( a !== b );
}

// Create a seeded iterator which can generate 1000 pseudorandom numbers:
var rand = discreteUniform( 1, 10, {
	'seed': 1234,
	'iter': 1000
});

// Create an iterator which returns unique values:
var it = iterUniqueBy( rand, predicate );

// Perform manual iteration...
var v;
while ( true ) {
	v = it.next();
	if ( v.done ) {
		break;
	}
	console.log( v.value );
}
