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

import linspace2d = require( './index' );


// TESTS //

// The function returns an array of arrays...
{
	linspace2d( 0, 11, [ 2, 3 ], false ); // $ExpectType Array2D<number>
}

// The compiler throws an error if the function is provided values other than two numbers for the first two parameters...
{
	linspace2d( true, 10, [ 2, 3 ], false ); // $ExpectError
	linspace2d( false, 10, [ 2, 3 ], false ); // $ExpectError
	linspace2d( '5', 10, [ 2, 3 ], false ); // $ExpectError
	linspace2d( [], 10, [ 2, 3 ], false ); // $ExpectError
	linspace2d( {}, 10, [ 2, 3 ], false ); // $ExpectError
	linspace2d( ( x: number ): number => x, 10, [ 2, 3 ], false ); // $ExpectError

	linspace2d( 9, true, [ 2, 3 ], false ); // $ExpectError
	linspace2d( 9, false, [ 2, 3 ], false ); // $ExpectError
	linspace2d( 5, '5', [ 2, 3 ], false ); // $ExpectError
	linspace2d( 8, [], [ 2, 3 ], false ); // $ExpectError
	linspace2d( 9, {}, [ 2, 3 ], false ); // $ExpectError
	linspace2d( 8, ( x: number ): number => x, [ 2, 3 ], false ); // $ExpectError
}

// The compiler throws an error if the function is provided a value other than an array of numbers for the third parameter...
{
	linspace2d( 3, 20, true, false ); // $ExpectError
	linspace2d( 4, 20, false, false ); // $ExpectError
	linspace2d( 2, 20, '5', false ); // $ExpectError
	linspace2d( 2, 20, [], false ); // $ExpectError
	linspace2d( 9, 20, {}, false ); // $ExpectError
	linspace2d( 9, 20, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a value other than a boolean for the fourth parameter...
{
	linspace2d( 3, 20, [ 2, 3 ], false, '5' ); // $ExpectError
	linspace2d( 4, 20, [ 2, 3 ], false, 2 ); // $ExpectError
	linspace2d( 2, 20, [ 2, 3 ], false, [] ); // $ExpectError
	linspace2d( 2, 20, [ 2, 3 ], false, {} ); // $ExpectError
	linspace2d( 9, 20, [ 2, 3 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	linspace2d(); // $ExpectError
	linspace2d( 3, 20 ); // $ExpectError
	linspace2d( 3, 20, [ 2, 3 ] ); // $ExpectError
	linspace2d( 3, 20, [ 2, 3 ], false, {} ); // $ExpectError
}
