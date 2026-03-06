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

import incrmvmr = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrmvmr( 3 ); // $ExpectType accumulator
	incrmvmr( 3, 0.0 ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided a first argument that is not a number...
{
	incrmvmr( '5' ); // $ExpectError
	incrmvmr( true ); // $ExpectError
	incrmvmr( false ); // $ExpectError
	incrmvmr( null ); // $ExpectError
	incrmvmr( [] ); // $ExpectError
	incrmvmr( {} ); // $ExpectError
	incrmvmr( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	incrmvmr( 2, '5' ); // $ExpectError
	incrmvmr( 2, true ); // $ExpectError
	incrmvmr( 2, false ); // $ExpectError
	incrmvmr( 2, null ); // $ExpectError
	incrmvmr( 2, [] ); // $ExpectError
	incrmvmr( 2, {} ); // $ExpectError
	incrmvmr( 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	incrmvmr(); // $ExpectError
	incrmvmr( 2, 3, 4 ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrmvmr( 3 );

	acc(); // $ExpectType number | null
	acc( 3.14 ); // $ExpectType number | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrmvmr( 3 );

	acc( '5' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
