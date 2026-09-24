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

import incrnanmvariance = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrnanmvariance( 3 ); // $ExpectType accumulator
	incrnanmvariance( 3, 0.0 ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	incrnanmvariance( '5' ); // $ExpectError
	incrnanmvariance( true ); // $ExpectError
	incrnanmvariance( false ); // $ExpectError
	incrnanmvariance( null ); // $ExpectError
	incrnanmvariance( [] ); // $ExpectError
	incrnanmvariance( {} ); // $ExpectError
	incrnanmvariance( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	incrnanmvariance( 3, '5' ); // $ExpectError
	incrnanmvariance( 3, true ); // $ExpectError
	incrnanmvariance( 3, false ); // $ExpectError
	incrnanmvariance( 3, null ); // $ExpectError
	incrnanmvariance( 3, [] ); // $ExpectError
	incrnanmvariance( 3, {} ); // $ExpectError
	incrnanmvariance( 3, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	incrnanmvariance(); // $ExpectError
	incrnanmvariance( 3, 2.5, 3 ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrnanmvariance( 3 );

	acc(); // $ExpectType number | null
	acc( 3.14 ); // $ExpectType number | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrnanmvariance( 3 );

	acc( '5' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
