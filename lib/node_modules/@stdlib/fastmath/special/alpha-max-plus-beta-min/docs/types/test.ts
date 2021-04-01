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

import ampbm = require( './index' );


// TESTS //

// The function returns a number...
{
	ampbm( 2, 8 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	ampbm( true, 3 ); // $ExpectError
	ampbm( false, 2 ); // $ExpectError
	ampbm( '5', 1 ); // $ExpectError
	ampbm( [], 1 ); // $ExpectError
	ampbm( {}, 2 ); // $ExpectError
	ampbm( ( x: number ): number => x, 2 ); // $ExpectError

	ampbm( 9, true ); // $ExpectError
	ampbm( 9, false ); // $ExpectError
	ampbm( 5, '5' ); // $ExpectError
	ampbm( 8, [] ); // $ExpectError
	ampbm( 9, {} ); // $ExpectError
	ampbm( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	ampbm(); // $ExpectError
	ampbm( 2 ); // $ExpectError
	ampbm( 2, 3, 4 ); // $ExpectError
	ampbm( 2, 3, 4, 1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	ampbm.factory( 1.0, 0.5 ); // $ExpectType HypotFunction
	ampbm.factory( 1.0, 0.5, true ); // $ExpectType HypotFunction
	ampbm.factory( 1.0, 0.5, true, false ); // $ExpectType HypotFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn = ampbm.factory( 1.0, 0.5 );
	fcn( 2, 3 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn = ampbm.factory( 3, 4 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = ampbm.factory( 3, 4 );
	fcn(); // $ExpectError
	fcn( 2 ); // $ExpectError
	fcn( 2, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a first argument that is not a number...
{
	ampbm.factory( true, 3 ); // $ExpectError
	ampbm.factory( false, 2 ); // $ExpectError
	ampbm.factory( '5', 1 ); // $ExpectError
	ampbm.factory( [], 1 ); // $ExpectError
	ampbm.factory( {}, 2 ); // $ExpectError
	ampbm.factory( ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a second argument that is not a number...
{
	ampbm.factory( 9, true ); // $ExpectError
	ampbm.factory( 9, false ); // $ExpectError
	ampbm.factory( 5, '5' ); // $ExpectError
	ampbm.factory( 8, [] ); // $ExpectError
	ampbm.factory( 9, {} ); // $ExpectError
	ampbm.factory( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a third argument that is not a boolean...
{
	ampbm.factory( 3, 9, 123 ); // $ExpectError
	ampbm.factory( 3, 5, '5' ); // $ExpectError
	ampbm.factory( 3, 8, [] ); // $ExpectError
	ampbm.factory( 3, 9, {} ); // $ExpectError
	ampbm.factory( 3, 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a fourth argument that is not a boolean...
{
	ampbm.factory( 3, 9, true, 123 ); // $ExpectError
	ampbm.factory( 3, 5, true, '5' ); // $ExpectError
	ampbm.factory( 3, 8, true, [] ); // $ExpectError
	ampbm.factory( 3, 9, true, {} ); // $ExpectError
	ampbm.factory( 3, 8, true, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	ampbm.factory(); // $ExpectError
	ampbm.factory( 0 ); // $ExpectError
	ampbm.factory( 0, 4, false, true, 0 ); // $ExpectError
}
