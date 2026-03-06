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

import incrmapcorr = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrmapcorr( 3 ); // $ExpectType accumulator
	incrmapcorr( 3, 2.5, 4.5 ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided non-numeric arguments...
{
	incrmapcorr( 2, '5' ); // $ExpectError
	incrmapcorr( 2, true ); // $ExpectError
	incrmapcorr( 2, false ); // $ExpectError
	incrmapcorr( 2, null ); // $ExpectError
	incrmapcorr( 2, undefined ); // $ExpectError
	incrmapcorr( 2, [] ); // $ExpectError
	incrmapcorr( 2, {} ); // $ExpectError
	incrmapcorr( 2, ( x: number ): number => x ); // $ExpectError

	incrmapcorr( '5', 4 ); // $ExpectError
	incrmapcorr( true, 4 ); // $ExpectError
	incrmapcorr( false, 4 ); // $ExpectError
	incrmapcorr( null, 4 ); // $ExpectError
	incrmapcorr( undefined, 4 ); // $ExpectError
	incrmapcorr( [], 4 ); // $ExpectError
	incrmapcorr( {}, 4 ); // $ExpectError
	incrmapcorr( ( x: number ): number => x, 4 ); // $ExpectError

	incrmapcorr( '5', 2.5, 3.5 ); // $ExpectError
	incrmapcorr( true, 2.5, 3.5 ); // $ExpectError
	incrmapcorr( false, 2.5, 3.5 ); // $ExpectError
	incrmapcorr( null, 2.5, 3.5 ); // $ExpectError
	incrmapcorr( undefined, 2.5, 3.5 ); // $ExpectError
	incrmapcorr( [], 2.5, 3.5 ); // $ExpectError
	incrmapcorr( {}, 2.5, 3.5 ); // $ExpectError
	incrmapcorr( ( x: number ): number => x, 2.5, 3.5 ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	incrmapcorr(); // $ExpectError
	incrmapcorr( 2, 2 ); // $ExpectError
	incrmapcorr( 2, 2, 3, 4 ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrmapcorr( 3 );

	acc(); // $ExpectType number | null
	acc( 3.14, 2.0 ); // $ExpectType number | null
}

// The function returns an accumulator function which returns an accumulated result (known means)...
{
	const acc = incrmapcorr( 3, 2, -3 );

	acc(); // $ExpectType number | null
	acc( 3.14, 2.0 ); // $ExpectType number | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrmapcorr( 3 );

	acc( '5', 1.0 ); // $ExpectError
	acc( true, 1.0 ); // $ExpectError
	acc( false, 1.0 ); // $ExpectError
	acc( null, 1.0 ); // $ExpectError
	acc( [], 1.0 ); // $ExpectError
	acc( {}, 1.0 ); // $ExpectError
	acc( ( x: number ): number => x, 1.0 ); // $ExpectError

	acc( 3.14, '5' ); // $ExpectError
	acc( 3.14, true ); // $ExpectError
	acc( 3.14, false ); // $ExpectError
	acc( 3.14, null ); // $ExpectError
	acc( 3.14, [] ); // $ExpectError
	acc( 3.14, {} ); // $ExpectError
	acc( 3.14, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments (known means)...
{
	const acc = incrmapcorr( 3, 2, -3 );

	acc( '5', 1.0 ); // $ExpectError
	acc( true, 1.0 ); // $ExpectError
	acc( false, 1.0 ); // $ExpectError
	acc( null, 1.0 ); // $ExpectError
	acc( [], 1.0 ); // $ExpectError
	acc( {}, 1.0 ); // $ExpectError
	acc( ( x: number ): number => x, 1.0 ); // $ExpectError

	acc( 3.14, '5' ); // $ExpectError
	acc( 3.14, true ); // $ExpectError
	acc( 3.14, false ); // $ExpectError
	acc( 3.14, null ); // $ExpectError
	acc( 3.14, [] ); // $ExpectError
	acc( 3.14, {} ); // $ExpectError
	acc( 3.14, ( x: number ): number => x ); // $ExpectError
}
