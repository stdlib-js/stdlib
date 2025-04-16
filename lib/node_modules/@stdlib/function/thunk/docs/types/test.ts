/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import thunk = require( './index' );


// TESTS //

// The function returns a function...
{
	thunk<[], number>( (): number => 2 ); // $ExpectType () => number
	thunk<Array<number>, number>( ( x: number ): number => x, 2 ); // $ExpectType () => number
	thunk<[number, number], number>( ( x: number, y: number ): number => x + y, 2, 3 ); // $ExpectType () => number
}

// The compiler throws an error if the function is provided a first argument which is not a function...
{
	thunk( true ); // $ExpectError
	thunk( false ); // $ExpectError
	thunk( 5 ); // $ExpectError
	thunk( [] ); // $ExpectError
	thunk( {} ); // $ExpectError
	thunk( 'abc' ); // $ExpectError

	thunk( true, 2 ); // $ExpectError
	thunk( false, 2 ); // $ExpectError
	thunk( 5, 2 ); // $ExpectError
	thunk( [], 2 ); // $ExpectError
	thunk( {}, 2 ); // $ExpectError
	thunk( 'abc', 2 ); // $ExpectError

	thunk( true, 2, 3 ); // $ExpectError
	thunk( false, 2, 3 ); // $ExpectError
	thunk( 5, 2, 3 ); // $ExpectError
	thunk( [], 2, 3 ); // $ExpectError
	thunk( {}, 2, 3 ); // $ExpectError
	thunk( 'abc', 2, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	thunk(); // $ExpectError
}
