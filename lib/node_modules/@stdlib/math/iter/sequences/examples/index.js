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

var ns = require( './../lib' );

// Create iterators for generating square and cube numbers:
var squares = ns.iterSquaresSeq();
var cubes = ns.iterCubesSeq();

// Iterate over both sequences and log the first five pairs:
var i;
for ( i = 0; i < 5; i++ ) {
	console.log( 'Square: %d, Cube: %d', squares.next().value, cubes.next().value );
}

// Calculate the sum of the first 10 Fibonacci numbers:
var fibonacci = ns.iterFibonacciSeq({
	'iter': 10
});
var sum = 0;
var v = fibonacci.next();
while ( v.done === false ) {
	sum += v.value;
	v = fibonacci.next();
}
console.log( 'Sum of first 10 Fibonacci numbers: %d', sum );

// Generate prime numbers:
var primes = ns.iterPrimesSeq({
	'iter': 10
});

console.log( 'First ten prime numbers:' );
v = primes.next();
while ( v.done === false ) {
	console.log( v.value );
	v = primes.next();
}
