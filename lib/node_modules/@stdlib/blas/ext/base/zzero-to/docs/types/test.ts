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

import Complex128Array = require( '@stdlib/array/complex128' );
import zzeroTo = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zzeroTo( x.length, x, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zzeroTo( '10', x, 1 ); // $ExpectError
	zzeroTo( true, x, 1 ); // $ExpectError
	zzeroTo( false, x, 1 ); // $ExpectError
	zzeroTo( null, x, 1 ); // $ExpectError
	zzeroTo( undefined, x, 1 ); // $ExpectError
	zzeroTo( [], x, 1 ); // $ExpectError
	zzeroTo( {}, x, 1 ); // $ExpectError
	zzeroTo( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zzeroTo( x.length, 10, 1 ); // $ExpectError
	zzeroTo( x.length, '10', 1 ); // $ExpectError
	zzeroTo( x.length, true, 1 ); // $ExpectError
	zzeroTo( x.length, false, 1 ); // $ExpectError
	zzeroTo( x.length, null, 1 ); // $ExpectError
	zzeroTo( x.length, undefined, 1 ); // $ExpectError
	zzeroTo( x.length, [ '1' ], 1 ); // $ExpectError
	zzeroTo( x.length, {}, 1 ); // $ExpectError
	zzeroTo( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zzeroTo( x.length, x, '10' ); // $ExpectError
	zzeroTo( x.length, x, true ); // $ExpectError
	zzeroTo( x.length, x, false ); // $ExpectError
	zzeroTo( x.length, x, null ); // $ExpectError
	zzeroTo( x.length, x, undefined ); // $ExpectError
	zzeroTo( x.length, x, [] ); // $ExpectError
	zzeroTo( x.length, x, {} ); // $ExpectError
	zzeroTo( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	zzeroTo(); // $ExpectError
	zzeroTo( x.length ); // $ExpectError
	zzeroTo( x.length, x ); // $ExpectError
	zzeroTo( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zzeroTo.ndarray( x.length, x, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zzeroTo.ndarray( '10', x, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( true, x, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( false, x, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( null, x, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( undefined, x, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( [], x, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( {}, x, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zzeroTo.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, true, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, false, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, null, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, [ '1' ], 1, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zzeroTo.ndarray( x.length, x, '10', 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, x, true, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, x, false, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, x, null, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, x, [], 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, x, {}, 0 ); // $ExpectError
	zzeroTo.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zzeroTo.ndarray( x.length, x, 1, '10' ); // $ExpectError
	zzeroTo.ndarray( x.length, x, 1, true ); // $ExpectError
	zzeroTo.ndarray( x.length, x, 1, false ); // $ExpectError
	zzeroTo.ndarray( x.length, x, 1, null ); // $ExpectError
	zzeroTo.ndarray( x.length, x, 1, undefined ); // $ExpectError
	zzeroTo.ndarray( x.length, x, 1, [] ); // $ExpectError
	zzeroTo.ndarray( x.length, x, 1, {} ); // $ExpectError
	zzeroTo.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	zzeroTo.ndarray(); // $ExpectError
	zzeroTo.ndarray( x.length ); // $ExpectError
	zzeroTo.ndarray( x.length, x ); // $ExpectError
	zzeroTo.ndarray( x.length, x, 1 ); // $ExpectError
	zzeroTo.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}
