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

/// <reference types="@stdlib/types"/>

import sici = require( './index' );


// TESTS //

// The function returns a collection...
{
	sici( 1.0 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a last argument other than a number...
{
	sici( true ); // $ExpectError
	sici( false ); // $ExpectError
	sici( null ); // $ExpectError
	sici( undefined ); // $ExpectError
	sici( '5' ); // $ExpectError
	sici( [] ); // $ExpectError
	sici( {} ); // $ExpectError
	sici( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	sici(); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array-like object containing numbers...
{
	const out = [ 0.0, 0.0 ];

	sici.assign( 3.0, out, 1, 0 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	sici.assign( true, out, 1, 0 ); // $ExpectError
	sici.assign( false, out, 1, 0 ); // $ExpectError
	sici.assign( '5', out, 1, 0 ); // $ExpectError
	sici.assign( null, out, 1, 0 ); // $ExpectError
	sici.assign( [], out, 1, 0 ); // $ExpectError
	sici.assign( {}, out, 1, 0 ); // $ExpectError
	sici.assign( ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	sici.assign( 1.0, 1, 1, 0 ); // $ExpectError
	sici.assign( 1.0, true, 1, 0 ); // $ExpectError
	sici.assign( 1.0, false, 1, 0 ); // $ExpectError
	sici.assign( 1.0, null, 1, 0 ); // $ExpectError
	sici.assign( 1.0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	sici.assign( 1.0, out, '5', 0 ); // $ExpectError
	sici.assign( 1.0, out, true, 0 ); // $ExpectError
	sici.assign( 1.0, out, false, 0 ); // $ExpectError
	sici.assign( 1.0, out, null, 0 ); // $ExpectError
	sici.assign( 1.0, out, [], 0 ); // $ExpectError
	sici.assign( 1.0, out, {}, 0 ); // $ExpectError
	sici.assign( 1.0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	sici.assign( 1.0, out, 1, '5' ); // $ExpectError
	sici.assign( 1.0, out, 1, true ); // $ExpectError
	sici.assign( 1.0, out, 1, false ); // $ExpectError
	sici.assign( 1.0, out, 1, null ); // $ExpectError
	sici.assign( 1.0, out, 1, [] ); // $ExpectError
	sici.assign( 1.0, out, 1, {} ); // $ExpectError
	sici.assign( 1.0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = [ 0.0, 0.0 ];

	sici.assign(); // $ExpectError
	sici.assign( 1.0 ); // $ExpectError
	sici.assign( 1.0, out ); // $ExpectError
	sici.assign( 1.0, out, 1 ); // $ExpectError
	sici.assign( 1.0, out, 1, 0, 1 ); // $ExpectError
}
