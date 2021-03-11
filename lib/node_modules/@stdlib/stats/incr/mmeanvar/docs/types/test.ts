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

import incrmmeanvar = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrmmeanvar( 3 ); // $ExpectType accumulator
	const out = [ 0.0, 0.0 ];
	incrmmeanvar( out, 3 ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided a last argument that is not a number...
{
	incrmmeanvar( '5' ); // $ExpectError
	incrmmeanvar( true ); // $ExpectError
	incrmmeanvar( false ); // $ExpectError
	incrmmeanvar( null ); // $ExpectError
	incrmmeanvar( {} ); // $ExpectError
	incrmmeanvar( ( x: number ): number => x ); // $ExpectError

	const out = [ 0.0, 0.0 ];
	incrmmeanvar( out, '5' ); // $ExpectError
	incrmmeanvar( out, true ); // $ExpectError
	incrmmeanvar( out, false ); // $ExpectError
	incrmmeanvar( out, null ); // $ExpectError
	incrmmeanvar( out, {} ); // $ExpectError
	incrmmeanvar( out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array that is not an array-like object of numbers...
{
	incrmmeanvar( '5', 3 ); // $ExpectError
	incrmmeanvar( true, 3 ); // $ExpectError
	incrmmeanvar( false, 3 ); // $ExpectError
	incrmmeanvar( null, 3 ); // $ExpectError
	incrmmeanvar( {}, 3 ); // $ExpectError
	incrmmeanvar( ( x: number ): number => x, 3 ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrmmeanvar( 3 );

	acc(); // $ExpectType ArrayLike<number> | null
	acc( 3.14 ); // $ExpectType ArrayLike<number> | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrmmeanvar( 3 );

	acc( '5' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
