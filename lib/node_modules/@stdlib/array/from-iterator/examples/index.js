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

var Float64Array = require( '@stdlib/array/float64' );
var randu = require( '@stdlib/random/iter/randu' );
var iterator2array = require( './../lib' );

var opts;
var arr;
var it;
var i;

function scale( v, i ) {
	return v * (i+1);
}

// Create an iterator for generating uniformly distributed pseudorandom numbers:
opts = {
	'iter': 10
};
it = randu( opts );

// Fill an array with scaled iterator values:
arr = iterator2array( it, new Float64Array( opts.iter ), scale );

for ( i = 0; i < arr.length; i++ ) {
	console.log( arr[ i ] );
}
