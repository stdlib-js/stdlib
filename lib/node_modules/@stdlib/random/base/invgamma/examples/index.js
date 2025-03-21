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

var invgamma = require( './../lib' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
console.log( '\nseed: %d', invgamma.seed[ 0 ] );
for ( i = 0; i < 100; i++ ) {
	console.log( invgamma( 2.0, 2.0 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = invgamma.factory( 6.0, 2.0, {
	'seed': seed
});
console.log( '\nseed: %d', seed );
for ( i = 0; i < 100; i++ ) {
	console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = invgamma.factory( 2.0, 2.0, {
	'seed': invgamma.seed
});
console.log( '\nseed: %d', rand.seed[ 0 ] );
for ( i = 0; i < 100; i++ ) {
	console.log( rand() );
}
