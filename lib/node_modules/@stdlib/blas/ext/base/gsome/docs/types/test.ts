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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import gsome = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = new Float64Array( 10 );

	gsome( x.length, 5, x, 1 ); // $ExpectType boolean
	gsome( x.length, 5, new AccessorArray( x ), 1 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gsome( '10', 5, x, 1 ); // $ExpectError
	gsome( true, 5, x, 1 ); // $ExpectError
	gsome( false, 5, x, 1 ); // $ExpectError
	gsome( null, 5, x, 1 ); // $ExpectError
	gsome( undefined, 5, x, 1 ); // $ExpectError
	gsome( [], 5, x, 1 ); // $ExpectError
	gsome( {}, 5, x, 1 ); // $ExpectError
	gsome( ( x: number ): number => x, 5, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gsome( x.length, '5', x, 1 ); // $ExpectError
	gsome( x.length, true, x, 1 ); // $ExpectError
	gsome( x.length, false, x, 1 ); // $ExpectError
	gsome( x.length, null, x, 1 ); // $ExpectError
	gsome( x.length, undefined, x, 1 ); // $ExpectError
	gsome( x.length, [], x, 1 ); // $ExpectError
	gsome( x.length, {}, x, 1 ); // $ExpectError
	gsome( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object...
{
	const x = new Float64Array( 10 );

	gsome( x.length, 5, 10, 1 ); // $ExpectError
	gsome( x.length, 5, true, 1 ); // $ExpectError
	gsome( x.length, 5, false, 1 ); // $ExpectError
	gsome( x.length, 5, null, 1 ); // $ExpectError
	gsome( x.length, 5, undefined, 1 ); // $ExpectError
	gsome( x.length, 5, {}, 1 ); // $ExpectError
	gsome( x.length, 5, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gsome( x.length, 5, x, '10' ); // $ExpectError
	gsome( x.length, 5, x, true ); // $ExpectError
	gsome( x.length, 5, x, false ); // $ExpectError
	gsome( x.length, 5, x, null ); // $ExpectError
	gsome( x.length, 5, x, undefined ); // $ExpectError
	gsome( x.length, 5, x, [] ); // $ExpectError
	gsome( x.length, 5, x, {} ); // $ExpectError
	gsome( x.length, 5, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gsome(); // $ExpectError
	gsome( x.length ); // $ExpectError
	gsome( x.length, 5 ); // $ExpectError
	gsome( x.length, 5, x ); // $ExpectError
	gsome( x.length, 5, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a boolean...
{
	const x = new Float64Array( 10 );

	gsome.ndarray( x.length, 5, x, 1, 0 ); // $ExpectType boolean
	gsome.ndarray( x.length, 5, new AccessorArray( x ), 1, 0 ); // $ExpectType boolean
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gsome.ndarray( '10', 5, x, 1, 0 ); // $ExpectError
	gsome.ndarray( true, 5, x, 1, 0 ); // $ExpectError
	gsome.ndarray( false, 5, x, 1, 0 ); // $ExpectError
	gsome.ndarray( null, 5, x, 1, 0 ); // $ExpectError
	gsome.ndarray( undefined, 5, x, 1, 0 ); // $ExpectError
	gsome.ndarray( [], 5, x, 1, 0 ); // $ExpectError
	gsome.ndarray( {}, 5, x, 1, 0 ); // $ExpectError
	gsome.ndarray( ( x: number ): number => x, 5, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gsome.ndarray( x.length, '5', x, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object...
{
	const x = new Float64Array( 10 );

	gsome.ndarray( x.length, 5, 10, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, true, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, false, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, null, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, undefined, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, {}, 1, 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gsome.ndarray( x.length, 5, x, '10', 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, x, true, 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, x, false, 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, x, null, 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, x, undefined, 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, x, [], 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, x, {}, 0 ); // $ExpectError
	gsome.ndarray( x.length, 5, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gsome.ndarray( x.length, 5, x, 1, '0' ); // $ExpectError
	gsome.ndarray( x.length, 5, x, 1, true ); // $ExpectError
	gsome.ndarray( x.length, 5, x, 1, false ); // $ExpectError
	gsome.ndarray( x.length, 5, x, 1, null ); // $ExpectError
	gsome.ndarray( x.length, 5, x, 1, undefined ); // $ExpectError
	gsome.ndarray( x.length, 5, x, 1, [] ); // $ExpectError
	gsome.ndarray( x.length, 5, x, 1, {} ); // $ExpectError
	gsome.ndarray( x.length, 5, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gsome.ndarray(); // $ExpectError
	gsome.ndarray( x.length ); // $ExpectError
	gsome.ndarray( x.length, 5 ); // $ExpectError
	gsome.ndarray( x.length, 5, x ); // $ExpectError
	gsome.ndarray( x.length, 5, x, 1 ); // $ExpectError
	gsome.ndarray( x.length, 5, x, 1, 0, 10 ); // $ExpectError
}
