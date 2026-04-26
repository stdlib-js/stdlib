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
import nancount = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nancount( x.length, x, 1 ); // $ExpectType number
	nancount( x.length, new AccessorArray( x ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nancount( '10', x, 1 ); // $ExpectError
	nancount( true, x, 1 ); // $ExpectError
	nancount( false, x, 1 ); // $ExpectError
	nancount( null, x, 1 ); // $ExpectError
	nancount( undefined, x, 1 ); // $ExpectError
	nancount( [], x, 1 ); // $ExpectError
	nancount( {}, x, 1 ); // $ExpectError
	nancount( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	nancount( x.length, 10, 1 ); // $ExpectError
	nancount( x.length, '10', 1 ); // $ExpectError
	nancount( x.length, true, 1 ); // $ExpectError
	nancount( x.length, false, 1 ); // $ExpectError
	nancount( x.length, null, 1 ); // $ExpectError
	nancount( x.length, undefined, 1 ); // $ExpectError
	nancount( x.length, {}, 1 ); // $ExpectError
	nancount( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	nancount( x.length, x, '10' ); // $ExpectError
	nancount( x.length, x, true ); // $ExpectError
	nancount( x.length, x, false ); // $ExpectError
	nancount( x.length, x, null ); // $ExpectError
	nancount( x.length, x, undefined ); // $ExpectError
	nancount( x.length, x, [] ); // $ExpectError
	nancount( x.length, x, {} ); // $ExpectError
	nancount( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nancount(); // $ExpectError
	nancount( x.length ); // $ExpectError
	nancount( x.length, x ); // $ExpectError
	nancount( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	nancount.ndarray( x.length, x, 1, 0 ); // $ExpectType number
	nancount.ndarray( x.length, new AccessorArray( x ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nancount.ndarray( '10', x, 1, 0 ); // $ExpectError
	nancount.ndarray( true, x, 1, 0 ); // $ExpectError
	nancount.ndarray( false, x, 1, 0 ); // $ExpectError
	nancount.ndarray( null, x, 1, 0 ); // $ExpectError
	nancount.ndarray( undefined, x, 1, 0 ); // $ExpectError
	nancount.ndarray( [], x, 1, 0 ); // $ExpectError
	nancount.ndarray( {}, x, 1, 0 ); // $ExpectError
	nancount.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	nancount.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	nancount.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	nancount.ndarray( x.length, true, 1, 0 ); // $ExpectError
	nancount.ndarray( x.length, false, 1, 0 ); // $ExpectError
	nancount.ndarray( x.length, null, 1, 0 ); // $ExpectError
	nancount.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	nancount.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	nancount.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	nancount.ndarray( x.length, x, '10', 0 ); // $ExpectError
	nancount.ndarray( x.length, x, true, 0 ); // $ExpectError
	nancount.ndarray( x.length, x, false, 0 ); // $ExpectError
	nancount.ndarray( x.length, x, null, 0 ); // $ExpectError
	nancount.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	nancount.ndarray( x.length, x, [], 0 ); // $ExpectError
	nancount.ndarray( x.length, x, {}, 0 ); // $ExpectError
	nancount.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	nancount.ndarray( x.length, x, 1, '10' ); // $ExpectError
	nancount.ndarray( x.length, x, 1, true ); // $ExpectError
	nancount.ndarray( x.length, x, 1, false ); // $ExpectError
	nancount.ndarray( x.length, x, 1, null ); // $ExpectError
	nancount.ndarray( x.length, x, 1, undefined ); // $ExpectError
	nancount.ndarray( x.length, x, 1, [] ); // $ExpectError
	nancount.ndarray( x.length, x, 1, {} ); // $ExpectError
	nancount.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nancount.ndarray(); // $ExpectError
	nancount.ndarray( x.length ); // $ExpectError
	nancount.ndarray( x.length, x ); // $ExpectError
	nancount.ndarray( x.length, x, 1 ); // $ExpectError
	nancount.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}
