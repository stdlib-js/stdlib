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

import bigint2words = require( './index' );


// TESTS //

// The function returns an array...
{
	bigint2words( 1234n ); // $ExpectType [number, number]
}

// The compiler throws an error if the function is provided an argument that is not a bigint...
{
	bigint2words( 5 ); // $ExpectError
	bigint2words( '5' ); // $ExpectError
	bigint2words( true ); // $ExpectError
	bigint2words( false ); // $ExpectError
	bigint2words( null ); // $ExpectError
	bigint2words( {} ); // $ExpectError
	bigint2words( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	bigint2words(); // $ExpectError
	bigint2words( 1n,  2n ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array-like object containing numbers...
{
	bigint2words.assign( 1234n,  [ 0, 0 ], 1, 0 ); // $ExpectType number[]
	bigint2words.assign( 1234n,  new Uint32Array( 2 ), 1, 0 ); // $ExpectType Uint32Array
	bigint2words.assign( 1234n,  new Float64Array( 2 ), 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a bigint...
{
	const out = [ 0.0, 0.0 ];

	bigint2words.assign( 5, out, 1, 0 ); // $ExpectError
	bigint2words.assign( '5', out, 1, 0 ); // $ExpectError
	bigint2words.assign( true, out, 1, 0 ); // $ExpectError
	bigint2words.assign( false, out, 1, 0 ); // $ExpectError
	bigint2words.assign( null, out, 1, 0 ); // $ExpectError
	bigint2words.assign( [], out, 1, 0 ); // $ExpectError
	bigint2words.assign( {}, out, 1, 0 ); // $ExpectError
	bigint2words.assign( ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	bigint2words.assign( 1234n,  1, 1, 0 ); // $ExpectError
	bigint2words.assign( 1234n,  true, 1, 0 ); // $ExpectError
	bigint2words.assign( 1234n,  false, 1, 0 ); // $ExpectError
	bigint2words.assign( 1234n,  null, 1, 0 ); // $ExpectError
	bigint2words.assign( 1234n,  {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	bigint2words.assign( 1234n, out, '5', 0 ); // $ExpectError
	bigint2words.assign( 1234n, out, true, 0 ); // $ExpectError
	bigint2words.assign( 1234n, out, false, 0 ); // $ExpectError
	bigint2words.assign( 1234n, out, null, 0 ); // $ExpectError
	bigint2words.assign( 1234n, out, [], 0 ); // $ExpectError
	bigint2words.assign( 1234n, out, {}, 0 ); // $ExpectError
	bigint2words.assign( 1234n, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	bigint2words.assign( 1234n, out, 1, '5' ); // $ExpectError
	bigint2words.assign( 1234n, out, 1, true ); // $ExpectError
	bigint2words.assign( 1234n, out, 1, false ); // $ExpectError
	bigint2words.assign( 1234n, out, 1, null ); // $ExpectError
	bigint2words.assign( 1234n, out, 1, [] ); // $ExpectError
	bigint2words.assign( 1234n, out, 1, {} ); // $ExpectError
	bigint2words.assign( 1234n, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = [ 0.0, 0.0 ];

	bigint2words.assign(); // $ExpectError
	bigint2words.assign( 1234n ); // $ExpectError
	bigint2words.assign( 1234n, out ); // $ExpectError
	bigint2words.assign( 1234n, out, 1 ); // $ExpectError
	bigint2words.assign( 1234n, out, 1, 0, 1 ); // $ExpectError
}
