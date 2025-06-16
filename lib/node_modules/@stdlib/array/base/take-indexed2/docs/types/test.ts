/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import take2 = require( './index' );


// TESTS //

// The function returns an array of arrays...
{
	take2( [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectType [number[], number[]]
	take2<any, any>( [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectType [any[], any[]]
	take2<number, number>( [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectType [number[], number[]]
	take2<string, string>( [ '1', '2', '3', '4' ], [ '1', '2', '3', '4' ], [ 1, 3 ] ); // $ExpectType [string[], string[]]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	take2( 1, [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectError
	take2( true, [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectError
	take2( false, [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectError
	take2( null, [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectError
	take2( void 0, [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectError
	take2( {}, [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	take2( [ 1, 2, 3, 4 ], 1, [ 1, 3 ] ); // $ExpectError
	take2( [ 1, 2, 3, 4 ], true, [ 1, 3 ] ); // $ExpectError
	take2( [ 1, 2, 3, 4 ], false, [ 1, 3 ] ); // $ExpectError
	take2( [ 1, 2, 3, 4 ], null, [ 1, 3 ] ); // $ExpectError
	take2( [ 1, 2, 3, 4 ], void 0, [ 1, 3 ] ); // $ExpectError
	take2( [ 1, 2, 3, 4 ], {}, [ 1, 3 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	take2( [], [], 1 ); // $ExpectError
	take2( [], [], true ); // $ExpectError
	take2( [], [], false ); // $ExpectError
	take2( [], [], null ); // $ExpectError
	take2( [], [], void 0 ); // $ExpectError
	take2( [], [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	take2(); // $ExpectError
	take2( [] ); // $ExpectError
	take2( [], [] ); // $ExpectError
	take2( [], [], [], [] ); // $ExpectError
}
