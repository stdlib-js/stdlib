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
import znancount = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Complex128Array( 10 );

	znancount( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );

	znancount( '10', x, 1 ); // $ExpectError
	znancount( true, x, 1 ); // $ExpectError
	znancount( false, x, 1 ); // $ExpectError
	znancount( null, x, 1 ); // $ExpectError
	znancount( undefined, x, 1 ); // $ExpectError
	znancount( [], x, 1 ); // $ExpectError
	znancount( {}, x, 1 ); // $ExpectError
	znancount( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	znancount( x.length, 10, 1 ); // $ExpectError
	znancount( x.length, '10', 1 ); // $ExpectError
	znancount( x.length, true, 1 ); // $ExpectError
	znancount( x.length, false, 1 ); // $ExpectError
	znancount( x.length, null, 1 ); // $ExpectError
	znancount( x.length, undefined, 1 ); // $ExpectError
	znancount( x.length, [], 1 ); // $ExpectError
	znancount( x.length, {}, 1 ); // $ExpectError
	znancount( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );

	znancount( x.length, x, '10' ); // $ExpectError
	znancount( x.length, x, true ); // $ExpectError
	znancount( x.length, x, false ); // $ExpectError
	znancount( x.length, x, null ); // $ExpectError
	znancount( x.length, x, undefined ); // $ExpectError
	znancount( x.length, x, [] ); // $ExpectError
	znancount( x.length, x, {} ); // $ExpectError
	znancount( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	znancount(); // $ExpectError
	znancount( x.length ); // $ExpectError
	znancount( x.length, x ); // $ExpectError
	znancount( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Complex128Array( 10 );

	znancount.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );

	znancount.ndarray( '10', x, 1, 0 ); // $ExpectError
	znancount.ndarray( true, x, 1, 0 ); // $ExpectError
	znancount.ndarray( false, x, 1, 0 ); // $ExpectError
	znancount.ndarray( null, x, 1, 0 ); // $ExpectError
	znancount.ndarray( undefined, x, 1, 0 ); // $ExpectError
	znancount.ndarray( [], x, 1, 0 ); // $ExpectError
	znancount.ndarray( {}, x, 1, 0 ); // $ExpectError
	znancount.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	znancount.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	znancount.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	znancount.ndarray( x.length, true, 1, 0 ); // $ExpectError
	znancount.ndarray( x.length, false, 1, 0 ); // $ExpectError
	znancount.ndarray( x.length, null, 1, 0 ); // $ExpectError
	znancount.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	znancount.ndarray( x.length, [], 1, 0 ); // $ExpectError
	znancount.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	znancount.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );

	znancount.ndarray( x.length, x, '10', 0 ); // $ExpectError
	znancount.ndarray( x.length, x, true, 0 ); // $ExpectError
	znancount.ndarray( x.length, x, false, 0 ); // $ExpectError
	znancount.ndarray( x.length, x, null, 0 ); // $ExpectError
	znancount.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	znancount.ndarray( x.length, x, [], 0 ); // $ExpectError
	znancount.ndarray( x.length, x, {}, 0 ); // $ExpectError
	znancount.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );

	znancount.ndarray( x.length, x, 1, '10' ); // $ExpectError
	znancount.ndarray( x.length, x, 1, true ); // $ExpectError
	znancount.ndarray( x.length, x, 1, false ); // $ExpectError
	znancount.ndarray( x.length, x, 1, null ); // $ExpectError
	znancount.ndarray( x.length, x, 1, undefined ); // $ExpectError
	znancount.ndarray( x.length, x, 1, [] ); // $ExpectError
	znancount.ndarray( x.length, x, 1, {} ); // $ExpectError
	znancount.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	znancount.ndarray(); // $ExpectError
	znancount.ndarray( x.length ); // $ExpectError
	znancount.ndarray( x.length, x ); // $ExpectError
	znancount.ndarray( x.length, x, 1 ); // $ExpectError
	znancount.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}
