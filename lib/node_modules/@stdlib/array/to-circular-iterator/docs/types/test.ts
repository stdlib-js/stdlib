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

import circarray2iterator = require( './index' );

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
	circarray2iterator( [ 1, 2, 3, 4 ] ); // $ExpectType Iterator
	circarray2iterator( [ 1, 2, 3, 4 ], times10 ); // $ExpectType Iterator
	circarray2iterator( [ 1, 2, 3, 4 ], times10, {} ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not array-like...
{
	circarray2iterator( 123 );  // $ExpectError
	circarray2iterator( true ); // $ExpectError
	circarray2iterator( false ); // $ExpectError
	circarray2iterator( {} ); // $ExpectError
	circarray2iterator( null ); // $ExpectError
	circarray2iterator( undefined ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an options object or function...
{
	circarray2iterator( [ 1, 2, 3, 4 ], 'abc' ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], 123 ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], [] ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], true ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], false ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dir` option which is not a number...
{
	circarray2iterator( [ 1, 2, 3, 4 ], { 'dir': 'abc' } ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], { 'dir': true } ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], { 'dir': false } ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], { 'dir': null } ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], { 'dir': [] } ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], { 'dir': {} } ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], { 'dir': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	circarray2iterator( [ 1, 2, 3, 4 ], { 'iter': 'abc' } ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], { 'iter': true } ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], { 'iter': false } ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], { 'iter': null } ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], { 'iter': [] } ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], { 'iter': {} } ); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], { 'iter': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	circarray2iterator(); // $ExpectError
	circarray2iterator( [ 1, 2, 3, 4 ], times10, {}, 123 ); // $ExpectError
}
