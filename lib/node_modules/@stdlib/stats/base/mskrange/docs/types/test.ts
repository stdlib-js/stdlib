/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import mskrange = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange( x.length, x, 1, mask, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange( '10', x, 1, mask, 1 ); // $ExpectError
	mskrange( true, x, 1, mask, 1 ); // $ExpectError
	mskrange( false, x, 1, mask, 1 ); // $ExpectError
	mskrange( null, x, 1, mask, 1 ); // $ExpectError
	mskrange( undefined, x, 1, mask, 1 ); // $ExpectError
	mskrange( [], x, 1, mask, 1 ); // $ExpectError
	mskrange( {}, x, 1, mask, 1 ); // $ExpectError
	mskrange( ( x: number ): number => x, x, 1, mask, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange( x.length, 10, 1, mask, 1 ); // $ExpectError
	mskrange( x.length, '10', 1, mask, 1 ); // $ExpectError
	mskrange( x.length, true, 1, mask, 1 ); // $ExpectError
	mskrange( x.length, false, 1, mask, 1 ); // $ExpectError
	mskrange( x.length, null, 1, mask, 1 ); // $ExpectError
	mskrange( x.length, undefined, 1, mask, 1 ); // $ExpectError
	mskrange( x.length, [ '1' ], 1, mask, 1 ); // $ExpectError
	mskrange( x.length, {}, 1, mask, 1 ); // $ExpectError
	mskrange( x.length, ( x: number ): number => x, 1, mask, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange( x.length, x, '10', mask, 1 ); // $ExpectError
	mskrange( x.length, x, true, mask, 1 ); // $ExpectError
	mskrange( x.length, x, false, mask, 1 ); // $ExpectError
	mskrange( x.length, x, null, mask, 1 ); // $ExpectError
	mskrange( x.length, x, undefined, mask, 1 ); // $ExpectError
	mskrange( x.length, x, [], mask, 1 ); // $ExpectError
	mskrange( x.length, x, {}, mask, 1 ); // $ExpectError
	mskrange( x.length, x, ( x: number ): number => x, mask, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	mskrange( x.length, x, 1, 10, 1 ); // $ExpectError
	mskrange( x.length, x, 1, '10', 1 ); // $ExpectError
	mskrange( x.length, x, 1, true, 1 ); // $ExpectError
	mskrange( x.length, x, 1, false, 1 ); // $ExpectError
	mskrange( x.length, x, 1, null, 1 ); // $ExpectError
	mskrange( x.length, x, 1, undefined, 1 ); // $ExpectError
	mskrange( x.length, x, 1, [ '1' ], 1 ); // $ExpectError
	mskrange( x.length, x, 1, {}, 1 ); // $ExpectError
	mskrange( x.length, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange( x.length, x, 1, mask, '10' ); // $ExpectError
	mskrange( x.length, x, 1, mask, true ); // $ExpectError
	mskrange( x.length, x, 1, mask, false ); // $ExpectError
	mskrange( x.length, x, 1, mask, null ); // $ExpectError
	mskrange( x.length, x, 1, mask, undefined ); // $ExpectError
	mskrange( x.length, x, 1, mask, [] ); // $ExpectError
	mskrange( x.length, x, 1, mask, {} ); // $ExpectError
	mskrange( x.length, x, 1, mask, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange(); // $ExpectError
	mskrange( x.length ); // $ExpectError
	mskrange( x.length, x, 1 ); // $ExpectError
	mskrange( x.length, x, 1, mask ); // $ExpectError
	mskrange( x.length, x, 1, mask, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange.ndarray( '10', x, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( true, x, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( false, x, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( null, x, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( undefined, x, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( [], x, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( {}, x, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( ( x: number ): number => x, x, 1, 0, mask, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange.ndarray( x.length, 10, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, '10', 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, true, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, false, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, null, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, undefined, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, [ '1' ], 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, {}, 1, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, ( x: number ): number => x, 1, 0, mask, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange.ndarray( x.length, x, '10', 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, true, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, false, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, null, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, undefined, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, [], 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, {}, 0, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, ( x: number ): number => x, 0, mask, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange.ndarray( x.length, x, 1, '10', mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, true, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, false, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, null, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, undefined, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, [], mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, {}, mask, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, ( x: number ): number => x, mask, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	mskrange.ndarray( x.length, 1, 0, 10, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, 1, 0, '10', 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, 1, 0, true, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, 1, 0, false, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, 1, 0, null, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, 1, 0, undefined, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, 1, 0, {}, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange.ndarray( x.length, x, 1, 0, mask, '10', 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, true, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, false, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, null, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, undefined, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, [], 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, {}, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange.ndarray( x.length, x, 1, 0, mask, 1, '10' ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, 1, true ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, 1, false ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, 1, null ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, 1, undefined ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, 1, [] ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, 1, {} ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	mskrange.ndarray(); // $ExpectError
	mskrange.ndarray( x.length ); // $ExpectError
	mskrange.ndarray( x.length, x ); // $ExpectError
	mskrange.ndarray( x.length, x, 1 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, 1 ); // $ExpectError
	mskrange.ndarray( x.length, x, 1, 0, mask, 1, 0, 10 ); // $ExpectError
}
