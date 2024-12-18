/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import strided2array = require( './index' );


// TESTS //

// The function returns an array...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	strided2array( x.length, x, 1, 0 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	strided2array( 'abc', x, 1, 0 ); // $ExpectError
	strided2array( true, x, 1, 0 ); // $ExpectError
	strided2array( false, x, 1, 0 ); // $ExpectError
	strided2array( null, x, 1, 0 ); // $ExpectError
	strided2array( [ '1' ], x, 1, 0 ); // $ExpectError
	strided2array( {}, x, 1, 0 ); // $ExpectError
	strided2array( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array...
{
	strided2array( 10, 3.14, 1, 0 ); // $ExpectError
	strided2array( 10, true, 1, 0 ); // $ExpectError
	strided2array( 10, false, 1, 0 ); // $ExpectError
	strided2array( 10, null, 1, 0 ); // $ExpectError
	strided2array( 10, {}, 1, 0 ); // $ExpectError
	strided2array( 10, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	strided2array( x.length, x, 'abc', 0 ); // $ExpectError
	strided2array( x.length, x, true, 0 ); // $ExpectError
	strided2array( x.length, x, false, 0 ); // $ExpectError
	strided2array( x.length, x, null, 0 ); // $ExpectError
	strided2array( x.length, x, [ '1' ], 0 ); // $ExpectError
	strided2array( x.length, x, {}, 0 ); // $ExpectError
	strided2array( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	strided2array( x.length, x, 1, 'abc' ); // $ExpectError
	strided2array( x.length, x, 1, true ); // $ExpectError
	strided2array( x.length, x, 1, false ); // $ExpectError
	strided2array( x.length, x, 1, null ); // $ExpectError
	strided2array( x.length, x, 1, [ '1' ] ); // $ExpectError
	strided2array( x.length, x, 1, {} ); // $ExpectError
	strided2array( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	strided2array(); // $ExpectError
	strided2array( x.length ); // $ExpectError
	strided2array( x.length, x ); // $ExpectError
	strided2array( x.length, x, 1 ); // $ExpectError
	strided2array( x.length, x, 1, 0, {} ); // $ExpectError
}
