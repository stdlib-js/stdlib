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

import indicesComplement = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	indicesComplement( 5, [ 0, 1 ] ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided invalid values...
{
	indicesComplement( true, [ 0, 1 ] ); // $ExpectError
	indicesComplement( false, [ 0, 1 ] ); // $ExpectError
	indicesComplement( '5', [ 0, 1 ] ); // $ExpectError
	indicesComplement( [ '5' ], [ 0, 1 ] ); // $ExpectError
	indicesComplement( {}, [ 0, 1 ] ); // $ExpectError
	indicesComplement( ( x: number ): number => x, [ 0, 1 ] ); // $ExpectError

	indicesComplement( 5, true ); // $ExpectError
	indicesComplement( 5, false ); // $ExpectError
	indicesComplement( 5, '5' ); // $ExpectError
	indicesComplement( 5, 5 ); // $ExpectError
	indicesComplement( 5, {} ); // $ExpectError
	indicesComplement( 5, ( x: number ): number => x ); // $ExpectError

	indicesComplement( [], true ); // $ExpectError
	indicesComplement( {}, false ); // $ExpectError
	indicesComplement( false, '5' ); // $ExpectError
	indicesComplement( {}, [] ); // $ExpectError
	indicesComplement( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	indicesComplement(); // $ExpectError
	indicesComplement( 5 ); // $ExpectError
}
