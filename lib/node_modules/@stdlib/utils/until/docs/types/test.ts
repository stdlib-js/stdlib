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

import until = require( './index' );

/**
* Predicate function.
*
* @param i - iteration index
* @returns a boolean
*/
function predicate( i: number ): boolean {
	return ( i <= 10 );
}

/**
* Empty function.
*/
function noop(): void {
	// Body is empty...
}


// TESTS //

// The function does not return a value...
{
	until( predicate, noop ); // $ExpectType void
	until( predicate, noop, {} ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a function...
{
	until( 'abc', noop ); // $ExpectError
	until( 5, noop ); // $ExpectError
	until( true, noop ); // $ExpectError
	until( false, noop ); // $ExpectError
	until( [], noop ); // $ExpectError
	until( {}, noop ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	until( predicate, 'abc' ); // $ExpectError
	until( predicate, 5 ); // $ExpectError
	until( predicate, true ); // $ExpectError
	until( predicate, false ); // $ExpectError
	until( predicate, [] ); // $ExpectError
	until( predicate, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided fewer than two arguments...
{
	until(); // $ExpectError
	until( predicate ); // $ExpectError
}
