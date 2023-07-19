/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import stridedarray2iterator = require( './index' );

/**
* Multiplies a value by 10.
*
* @param v - iterated value
* @returns new value
*/
function times10( v: number ): number {
	return v * 10.0;
}


// TESTS //

// The function returns an iterator...
{
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, 3 ); // $ExpectType Iterator
	stridedarray2iterator( 4, [ 1, 2, 3, 4, 5, 6, 7, 8 ], -2, 6, times10 ); // $ExpectType Iterator
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, 3, times10, {} ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	stridedarray2iterator( 'abc', [ 1, 2, 3, 4 ], -2, 3 );  // $ExpectError
	stridedarray2iterator( true, [ 1, 2, 3, 4 ], -2, 3 ); // $ExpectError
	stridedarray2iterator( false, [ 1, 2, 3, 4 ], -2, 3 ); // $ExpectError
	stridedarray2iterator( {}, [ 1, 2, 3, 4 ], -2, 3 ); // $ExpectError
	stridedarray2iterator( null, [ 1, 2, 3, 4 ], -2, 3 ); // $ExpectError
	stridedarray2iterator( undefined, [ 1, 2, 3, 4 ], -2, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not array-like...
{
	stridedarray2iterator( 2, 123, -2, 3 );  // $ExpectError
	stridedarray2iterator( 2, true, -2, 3 ); // $ExpectError
	stridedarray2iterator( 2, false, -2, 3 ); // $ExpectError
	stridedarray2iterator( 2, {}, -2, 3 ); // $ExpectError
	stridedarray2iterator( 2, null, -2, 3 ); // $ExpectError
	stridedarray2iterator( 2, undefined, -2, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], 'abc', 3 );  // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], true, 3 ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], false, 3 ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], {}, 3 ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], null, 3 ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], undefined, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, 'abc' );  // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, true ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, false ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, {} ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, null ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, undefined ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a map function...
{
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, 3, 'abc' ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, 3, 123 ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, 3, [] ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, 3, {} ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, 3, true ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, 3, false ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, 3, null ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	stridedarray2iterator(); // $ExpectError
	stridedarray2iterator( 2 ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ] ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2 ); // $ExpectError
	stridedarray2iterator( 2, [ 1, 2, 3, 4 ], -2, 3, times10, {}, 123 ); // $ExpectError
}
