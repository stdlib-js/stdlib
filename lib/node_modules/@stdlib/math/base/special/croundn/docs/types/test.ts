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

import croundn = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	croundn( 5, 3, -2 ); // $ExpectType ArrayLike<number>
	croundn( [], 5, 3, -2 ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a real component which is not a number...
{
	croundn( true, 3, -2 ); // $ExpectError
	croundn( false, 3, -2 ); // $ExpectError
	croundn( null, 3, -2 ); // $ExpectError
	croundn( undefined, 3, -2 ); // $ExpectError
	croundn( '5', 3, -2 ); // $ExpectError
	croundn( [], 3, -2 ); // $ExpectError
	croundn( {}, 3, -2 ); // $ExpectError
	croundn( ( x: number ): number => x, 3, -2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an imaginary component which is not a number...
{
	croundn( 5, true, -2 ); // $ExpectError
	croundn( 5, false, -2 ); // $ExpectError
	croundn( 5, null, -2 ); // $ExpectError
	croundn( 5, undefined, -2 ); // $ExpectError
	croundn( 5, '5', -2 ); // $ExpectError
	croundn( 5, [], -2 ); // $ExpectError
	croundn( 5, {}, -2 ); // $ExpectError
	croundn( 5, ( x: number ): number => x, -2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an integer power which is not a number...
{
	croundn( 5, 3, true ); // $ExpectError
	croundn( 5, 3, false ); // $ExpectError
	croundn( 5, 3, null ); // $ExpectError
	croundn( 5, 3, undefined ); // $ExpectError
	croundn( 5, 3, '5' ); // $ExpectError
	croundn( 5, 3, [] ); // $ExpectError
	croundn( 5, 3, {} ); // $ExpectError
	croundn( 5, 3, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array which is not array-like...
{
	croundn( true, 5, 3, -2 ); // $ExpectError
	croundn( false, 5, 3, -2 ); // $ExpectError
	croundn( 'abc', 5, 3, -2 ); // $ExpectError
	croundn( {}, 5, 3, -2 ); // $ExpectError
	croundn( ( x: number ): number => x, 5, 3, -2 ); // $ExpectError
	croundn( 123, 5, 3, -2 ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	croundn(); // $ExpectError
	croundn( 2 ); // $ExpectError
	croundn( 5, 3 ); // $ExpectError
}
