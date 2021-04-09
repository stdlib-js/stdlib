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

import float64ToInt64Bytes = require( './index' );


// TESTS //

// The function returns a Uint8Array...
{
	float64ToInt64Bytes( 3 ); // $ExpectType Uint8Array
	float64ToInt64Bytes( 0 ); // $ExpectType Uint8Array
}

// The compiler throws an error if the function is provided a value other than a number...
{
	float64ToInt64Bytes( true ); // $ExpectError
	float64ToInt64Bytes( false ); // $ExpectError
	float64ToInt64Bytes( '5' ); // $ExpectError
	float64ToInt64Bytes( [] ); // $ExpectError
	float64ToInt64Bytes( {} ); // $ExpectError
	float64ToInt64Bytes( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	float64ToInt64Bytes(); // $ExpectError
	float64ToInt64Bytes( 1.0, 2.0 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const out = new Uint8Array( 8 );

	float64ToInt64Bytes.assign( 3, out, 1, 0 ); // $ExpectType Collection
	float64ToInt64Bytes.assign( 0, out, 1, 0 ); // $ExpectType Collection
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = new Uint8Array( 8 );

	float64ToInt64Bytes.assign( true, out, 1, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( false, out, 1, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( '5', out, 1, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( null, out, 1, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( [], out, 1, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( {}, out, 1, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a collection...
{
	float64ToInt64Bytes.assign( 1.0, 1, 1, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, true, 1, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, false, 1, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, null, 1, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const out = new Uint8Array( 8 );

	float64ToInt64Bytes.assign( 1.0, out, '5', 0 ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, true, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, false, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, null, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, [], 0 ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, {}, 0 ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = new Uint8Array( 8 );

	float64ToInt64Bytes.assign( 1.0, out, 1, '5' ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, 1, true ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, 1, false ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, 1, null ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, 1, [] ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, 1, {} ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = new Uint8Array( 8 );

	float64ToInt64Bytes.assign(); // $ExpectError
	float64ToInt64Bytes.assign( 1.0 ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, 1 ); // $ExpectError
	float64ToInt64Bytes.assign( 1.0, out, 1, 0, 1 ); // $ExpectError
}
