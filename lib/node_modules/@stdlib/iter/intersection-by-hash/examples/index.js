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
var iterMap = require( '@stdlib/iter/map' );
var iterIntersectionByHash = require( './../lib' );

function mapFcn( v ) {
	return {
		'v': v
	};
}

function hashFcn( v ) {
	return JSON.stringify( v );
}

// Create seeded iterators which can generate 1000 pseudorandom numbers:
var rand1 = discreteUniform( 1, 10, {
	'seed': 1234,
	'iter': 1000
});
var rand2 = discreteUniform( 6, 15, {
	'seed': 1234,
	'iter': 1000
});

// Create iterators which map each number to an object:
var miter1 = iterMap( rand1, mapFcn );
var miter2 = iterMap( rand2, mapFcn );

// Create an iterator which returns the intersection of the above iterators:
var it = iterIntersectionByHash( miter1, miter2, hashFcn );

// Perform manual iteration...
var v;
while ( true ) {
	v = it.next();
	if ( v.done ) {
		break;
	}
	console.log( v.value );
}
