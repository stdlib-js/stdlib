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

import incrapcorr = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrapcorr(); // $ExpectType accumulator
	incrapcorr( 2, 4 ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided non-numeric arguments...
{
	incrapcorr( 2, '5' ); // $ExpectError
	incrapcorr( 2, true ); // $ExpectError
	incrapcorr( 2, false ); // $ExpectError
	incrapcorr( 2, null ); // $ExpectError
	incrapcorr( 2, undefined ); // $ExpectError
	incrapcorr( 2, [] ); // $ExpectError
	incrapcorr( 2, {} ); // $ExpectError
	incrapcorr( 2, ( x: number ): number => x ); // $ExpectError

	incrapcorr( '5', 4 ); // $ExpectError
	incrapcorr( true, 4 ); // $ExpectError
	incrapcorr( false, 4 ); // $ExpectError
	incrapcorr( null, 4 ); // $ExpectError
	incrapcorr( undefined, 4 ); // $ExpectError
	incrapcorr( [], 4 ); // $ExpectError
	incrapcorr( {}, 4 ); // $ExpectError
	incrapcorr( ( x: number ): number => x, 4 ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	incrapcorr( 1 ); // $ExpectError
	incrapcorr( 2, 2, 3 ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrapcorr();

	acc(); // $ExpectType number | null
	acc( 3.14, 2.0 ); // $ExpectType number | null
}

// The function returns an accumulator function which returns an accumulated result (known means)...
{
	const acc = incrapcorr( 2, -3 );

	acc(); // $ExpectType number | null
	acc( 3.14, 2.0 ); // $ExpectType number | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrapcorr();

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
	const acc = incrapcorr( 2, -3 );

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
