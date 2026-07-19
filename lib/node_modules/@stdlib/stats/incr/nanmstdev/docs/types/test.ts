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

import incrnanmstdev = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrnanmstdev( 3 ); // $ExpectType accumulator
	incrnanmstdev( 3, 0.0 ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	incrnanmstdev( '5' ); // $ExpectError
	incrnanmstdev( true ); // $ExpectError
	incrnanmstdev( false ); // $ExpectError
	incrnanmstdev( null ); // $ExpectError
	incrnanmstdev( [] ); // $ExpectError
	incrnanmstdev( {} ); // $ExpectError
	incrnanmstdev( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	incrnanmstdev( 3, '5' ); // $ExpectError
	incrnanmstdev( 3, true ); // $ExpectError
	incrnanmstdev( 3, false ); // $ExpectError
	incrnanmstdev( 3, null ); // $ExpectError
	incrnanmstdev( 3, [] ); // $ExpectError
	incrnanmstdev( 3, {} ); // $ExpectError
	incrnanmstdev( 3, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	incrnanmstdev(); // $ExpectError
	incrnanmstdev( 3, 2.5, 3 ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrnanmstdev( 3 );

	acc(); // $ExpectType number | null
	acc( 3.14 ); // $ExpectType number | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrnanmstdev( 3 );

	acc( '5' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
