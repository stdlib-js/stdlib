/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import incrnanmvmr = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrnanmvmr( 3 ); // $ExpectType accumulator
	incrnanmvmr( 3, 0.0 ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided a first argument that is not a number...
{
	incrnanmvmr( '5' ); // $ExpectError
	incrnanmvmr( true ); // $ExpectError
	incrnanmvmr( false ); // $ExpectError
	incrnanmvmr( null ); // $ExpectError
	incrnanmvmr( [] ); // $ExpectError
	incrnanmvmr( {} ); // $ExpectError
	incrnanmvmr( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	incrnanmvmr( 2, '5' ); // $ExpectError
	incrnanmvmr( 2, true ); // $ExpectError
	incrnanmvmr( 2, false ); // $ExpectError
	incrnanmvmr( 2, null ); // $ExpectError
	incrnanmvmr( 2, [] ); // $ExpectError
	incrnanmvmr( 2, {} ); // $ExpectError
	incrnanmvmr( 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	incrnanmvmr(); // $ExpectError
	incrnanmvmr( 2, 3, 4 ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrnanmvmr( 3 );

	acc(); // $ExpectType number | null
	acc( 3.14 ); // $ExpectType number | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrnanmvmr( 3 );

	acc( '5' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
