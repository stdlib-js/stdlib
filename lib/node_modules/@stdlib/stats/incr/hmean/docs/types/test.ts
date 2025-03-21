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

import incrhmean = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrhmean(); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided arguments...
{
	incrhmean( '5' ); // $ExpectError
	incrhmean( 5 ); // $ExpectError
	incrhmean( true ); // $ExpectError
	incrhmean( false ); // $ExpectError
	incrhmean( null ); // $ExpectError
	incrhmean( undefined ); // $ExpectError
	incrhmean( [] ); // $ExpectError
	incrhmean( {} ); // $ExpectError
	incrhmean( ( x: number ): number => x ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrhmean();

	acc(); // $ExpectType number | null
	acc( 3.14 ); // $ExpectType number | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrhmean();

	acc( '5' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
