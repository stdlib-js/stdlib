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

import incrmeanabs2 = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrmeanabs2(); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided arguments...
{
	incrmeanabs2( '5' ); // $ExpectError
	incrmeanabs2( 5 ); // $ExpectError
	incrmeanabs2( true ); // $ExpectError
	incrmeanabs2( false ); // $ExpectError
	incrmeanabs2( null ); // $ExpectError
	incrmeanabs2( undefined ); // $ExpectError
	incrmeanabs2( [] ); // $ExpectError
	incrmeanabs2( {} ); // $ExpectError
	incrmeanabs2( ( x: number ): number => x ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrmeanabs2();

	acc(); // $ExpectType number | null
	acc( 3.14 ); // $ExpectType number | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrmeanabs2();

	acc( '5' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
