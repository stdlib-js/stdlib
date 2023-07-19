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

import arrayview2iteratorRight = require( './index' );

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
	arrayview2iteratorRight( [ 1, 2, 3, 4 ] ); // $ExpectType Iterator
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 1, 2, times10 ); // $ExpectType Iterator
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 1, 2, times10, {} ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not array-like...
{
	arrayview2iteratorRight( 123 );  // $ExpectError
	arrayview2iteratorRight( true ); // $ExpectError
	arrayview2iteratorRight( false ); // $ExpectError
	arrayview2iteratorRight( {} ); // $ExpectError
	arrayview2iteratorRight( null ); // $ExpectError
	arrayview2iteratorRight( undefined ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number or function...
{
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 'abc' ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], [] ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], {} ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], true ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], false ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], null ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not number or function...
{
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 1, 'abc' ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 1, [] ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 1, {} ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 1, true ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 1, false ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 1, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 0, 2, 'abc' ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 0, 2, 123 ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 0, 2, [] ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 0, 2, {} ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 0, 2, true ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 0, 2, false ); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 0, 2, null ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	arrayview2iteratorRight(); // $ExpectError
	arrayview2iteratorRight( [ 1, 2, 3, 4 ], 1, 2, times10, {}, 123 ); // $ExpectError
}
