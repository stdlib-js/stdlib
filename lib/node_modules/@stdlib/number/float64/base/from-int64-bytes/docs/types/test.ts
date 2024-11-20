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

import fromInt64Bytes = require( './index' );


// TESTS //

// The function returns a number...
{
	const bytes = new Uint8Array( 16 );
	fromInt64Bytes( bytes, 1, 0 ); // $ExpectType number
	fromInt64Bytes( bytes, 2, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	fromInt64Bytes( '5', 1, 0 ); // $ExpectError
	fromInt64Bytes( 5, 1, 0 ); // $ExpectError
	fromInt64Bytes( true, 1, 0 ); // $ExpectError
	fromInt64Bytes( false, 1, 0 ); // $ExpectError
	fromInt64Bytes( null, 1, 0 ); // $ExpectError
	fromInt64Bytes( {}, 1, 0 ); // $ExpectError
	fromInt64Bytes( ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const bytes = new Uint8Array( 16 );
	fromInt64Bytes( bytes, '5', 0 ); // $ExpectError
	fromInt64Bytes( bytes, true, 0 ); // $ExpectError
	fromInt64Bytes( bytes, false, 0 ); // $ExpectError
	fromInt64Bytes( bytes, null, 0 ); // $ExpectError
	fromInt64Bytes( bytes, [], 0 ); // $ExpectError
	fromInt64Bytes( bytes, {}, 0 ); // $ExpectError
	fromInt64Bytes( bytes, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const bytes = new Uint8Array( 16 );
	fromInt64Bytes( bytes, 1, '5' ); // $ExpectError
	fromInt64Bytes( bytes, 1, true ); // $ExpectError
	fromInt64Bytes( bytes, 1, false ); // $ExpectError
	fromInt64Bytes( bytes, 1, null ); // $ExpectError
	fromInt64Bytes( bytes, 1, [] ); // $ExpectError
	fromInt64Bytes( bytes, 1, {} ); // $ExpectError
	fromInt64Bytes( bytes, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const bytes = new Uint8Array( 16 );
	fromInt64Bytes(); // $ExpectError
	fromInt64Bytes( bytes ); // $ExpectError
	fromInt64Bytes( bytes, 1 ); // $ExpectError
	fromInt64Bytes( bytes, 1, 0, 1 ); // $ExpectError
}
