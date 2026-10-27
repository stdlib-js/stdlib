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

import string2words = require( './index' );


// TESTS //

// The function returns an array...
{
	string2words( '1234', 10 ); // $ExpectType [number, number]
}

// The compiler throws an error if the function is provided a first argument that is not a string...
{
	string2words( 5, 10 ); // $ExpectError
	string2words( true, 10 ); // $ExpectError
	string2words( false, 10 ); // $ExpectError
	string2words( null, 10 ); // $ExpectError
	string2words( {}, 10 ); // $ExpectError
	string2words( ( x: number ): number => x, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	string2words( '1234', '5' ); // $ExpectError
	string2words( '1234', true ); // $ExpectError
	string2words( '1234', false ); // $ExpectError
	string2words( '1234', null ); // $ExpectError
	string2words( '1234', {} ); // $ExpectError
	string2words( '1234', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	string2words(); // $ExpectError
	string2words( '1234', 10, 1 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array-like object containing numbers...
{
	string2words.assign( '1234', 10, [ 0, 0 ], 1, 0 ); // $ExpectType number[]
	string2words.assign( '1234', 10, new Uint32Array( 2 ), 1, 0 ); // $ExpectType Uint32Array
	string2words.assign( '1234', 10, new Float64Array( 2 ), 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a string...
{
	const out = [ 0.0, 0.0 ];

	string2words.assign( 5, 10, out, 1, 0 ); // $ExpectError
	string2words.assign( true, 10, out, 1, 0 ); // $ExpectError
	string2words.assign( false, 10, out, 1, 0 ); // $ExpectError
	string2words.assign( null, 10, out, 1, 0 ); // $ExpectError
	string2words.assign( [], 10, out, 1, 0 ); // $ExpectError
	string2words.assign( {}, 10, out, 1, 0 ); // $ExpectError
	string2words.assign( ( x: number ): number => x, 10, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	string2words.assign( '1234', '5', out, 1, 0 ); // $ExpectError
	string2words.assign( '1234', true, out, 1, 0 ); // $ExpectError
	string2words.assign( '1234', false, out, 1, 0 ); // $ExpectError
	string2words.assign( '1234', null, out, 1, 0 ); // $ExpectError
	string2words.assign( '1234', [], out, 1, 0 ); // $ExpectError
	string2words.assign( '1234', {}, out, 1, 0 ); // $ExpectError
	string2words.assign( '1234', ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array-like object...
{
	string2words.assign( '1234', 10, 1, 1, 0 ); // $ExpectError
	string2words.assign( '1234', 10, true, 1, 0 ); // $ExpectError
	string2words.assign( '1234', 10, false, 1, 0 ); // $ExpectError
	string2words.assign( '1234', 10, null, 1, 0 ); // $ExpectError
	string2words.assign( '1234', 10, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	string2words.assign( '1234', 10, out, '5', 0 ); // $ExpectError
	string2words.assign( '1234', 10, out, true, 0 ); // $ExpectError
	string2words.assign( '1234', 10, out, false, 0 ); // $ExpectError
	string2words.assign( '1234', 10, out, null, 0 ); // $ExpectError
	string2words.assign( '1234', 10, out, [], 0 ); // $ExpectError
	string2words.assign( '1234', 10, out, {}, 0 ); // $ExpectError
	string2words.assign( '1234', 10, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	string2words.assign( '1234', 10, out, 1, '5' ); // $ExpectError
	string2words.assign( '1234', 10, out, 1, true ); // $ExpectError
	string2words.assign( '1234', 10, out, 1, false ); // $ExpectError
	string2words.assign( '1234', 10, out, 1, null ); // $ExpectError
	string2words.assign( '1234', 10, out, 1, [] ); // $ExpectError
	string2words.assign( '1234', 10, out, 1, {} ); // $ExpectError
	string2words.assign( '1234', 10, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = [ 0.0, 0.0 ];

	string2words.assign(); // $ExpectError
	string2words.assign( '1234' ); // $ExpectError
	string2words.assign( '1234', 10 ); // $ExpectError
	string2words.assign( '1234', 10, out ); // $ExpectError
	string2words.assign( '1234', 10, out, 1 ); // $ExpectError
	string2words.assign( '1234', 10, out, 1, 0, 1 ); // $ExpectError
}
