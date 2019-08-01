/*
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

import memoize = require( './index' );

/**
* Evaluates the factorial of `n`.
*
* @param n - input value
* @returns factorial
*/
function factorial( n: number ) {
	let prod = 1;
	for ( let i = n; i > 1; i -= 1 ) {
		prod *= i;
	}
	return prod;
}

/**
* Hash function.
*
* @param arg - argument
* @returns hashed value
*/
function hashFunction( arg: number ): string {
	return arg.toString();
}

// TESTS //

// The function returns a function...
{
	memoize( factorial ); // $ExpectType Function
	memoize( factorial, hashFunction ); // $ExpectType Function
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	memoize( 'abc' ); // $ExpectError
	memoize( 5 ); // $ExpectError
	memoize( [] ); // $ExpectError
	memoize( {} ); // $ExpectError
	memoize( true ); // $ExpectError
	memoize( false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than a function...
{
	memoize( factorial, 'abc' ); // $ExpectError
	memoize( factorial, 5 ); // $ExpectError
	memoize( factorial, [] ); // $ExpectError
	memoize( factorial, {} ); // $ExpectError
	memoize( factorial, true ); // $ExpectError
	memoize( factorial, false ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	memoize(); // $ExpectError
	memoize( factorial, hashFunction, false ); // $ExpectError
}
