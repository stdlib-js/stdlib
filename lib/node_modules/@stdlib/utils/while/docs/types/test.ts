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

import whilst = require( './index' );

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
function noop() {
	// Body is empty...
}


// TESTS //

// The function does not return a value...
{
	whilst( predicate, noop ); // $ExpectType void
	whilst( predicate, noop, {} ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a function...
{
	whilst( 'abc', noop ); // $ExpectError
	whilst( 5, noop ); // $ExpectError
	whilst( true, noop ); // $ExpectError
	whilst( false, noop ); // $ExpectError
	whilst( [], noop ); // $ExpectError
	whilst( {}, noop ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	whilst( predicate, 'abc' ); // $ExpectError
	whilst( predicate, 5 ); // $ExpectError
	whilst( predicate, true ); // $ExpectError
	whilst( predicate, false ); // $ExpectError
	whilst( predicate, [] ); // $ExpectError
	whilst( predicate, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided fewer than two arguments...
{
	whilst(); // $ExpectError
	whilst( predicate ); // $ExpectError
}
