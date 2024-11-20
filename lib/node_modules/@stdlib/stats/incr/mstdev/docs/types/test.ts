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

import incrmstdev = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrmstdev( 3 ); // $ExpectType accumulator
	incrmstdev( 3, 0.0 ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	incrmstdev( '5' ); // $ExpectError
	incrmstdev( true ); // $ExpectError
	incrmstdev( false ); // $ExpectError
	incrmstdev( null ); // $ExpectError
	incrmstdev( [] ); // $ExpectError
	incrmstdev( {} ); // $ExpectError
	incrmstdev( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	incrmstdev( 3, '5' ); // $ExpectError
	incrmstdev( 3, true ); // $ExpectError
	incrmstdev( 3, false ); // $ExpectError
	incrmstdev( 3, null ); // $ExpectError
	incrmstdev( 3, [] ); // $ExpectError
	incrmstdev( 3, {} ); // $ExpectError
	incrmstdev( 3, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	incrmstdev(); // $ExpectError
	incrmstdev( 3, 2.5, 3 ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrmstdev( 3 );

	acc(); // $ExpectType number | null
	acc( 3.14 ); // $ExpectType number | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrmstdev( 3 );

	acc( '5' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
