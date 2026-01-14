/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import int2slice = require( './index' );


// TESTS //

// The function returns a Slice object or an error object...
{
	int2slice( 0, 10, false ); // $ExpectType SliceResult
	int2slice( 0, 10, true ); // $ExpectType SliceResult
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	int2slice( '1', 10, false ); // $ExpectError
	int2slice( true, 10, false ); // $ExpectError
	int2slice( false, 10, false ); // $ExpectError
	int2slice( null, 10, false ); // $ExpectError
	int2slice( undefined, 10, false ); // $ExpectError
	int2slice( [], 10, false ); // $ExpectError
	int2slice( {}, 10, false ); // $ExpectError
	int2slice( ( x: number ): number => x, 10, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	int2slice( 0, '1', false ); // $ExpectError
	int2slice( 0, true, false ); // $ExpectError
	int2slice( 0, false, false ); // $ExpectError
	int2slice( 0, null, false ); // $ExpectError
	int2slice( 0, undefined, false ); // $ExpectError
	int2slice( 0, [], false ); // $ExpectError
	int2slice( 0, {}, false ); // $ExpectError
	int2slice( 0, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	int2slice( 0, 10, '1' ); // $ExpectError
	int2slice( 0, 10, 1 ); // $ExpectError
	int2slice( 0, 10, null ); // $ExpectError
	int2slice( 0, 10, undefined ); // $ExpectError
	int2slice( 0, 10, [] ); // $ExpectError
	int2slice( 0, 10, {} ); // $ExpectError
	int2slice( 0, 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	int2slice(); // $ExpectError
	int2slice( 0 ); // $ExpectError
	int2slice( 0, 10 ); // $ExpectError
	int2slice( 0, 10, false, {} ); // $ExpectError
}
