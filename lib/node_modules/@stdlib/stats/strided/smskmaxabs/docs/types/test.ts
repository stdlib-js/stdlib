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

import smskmaxabs = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs( x.length, x, 1, mask, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs( '10', x, 1, mask, 1 ); // $ExpectError
	smskmaxabs( true, x, 1, mask, 1 ); // $ExpectError
	smskmaxabs( false, x, 1, mask, 1 ); // $ExpectError
	smskmaxabs( null, x, 1, mask, 1 ); // $ExpectError
	smskmaxabs( undefined, x, 1, mask, 1 ); // $ExpectError
	smskmaxabs( [], x, 1, mask, 1 ); // $ExpectError
	smskmaxabs( {}, x, 1, mask, 1 ); // $ExpectError
	smskmaxabs( ( x: number ): number => x, x, 1, mask, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs( x.length, 10, 1, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, '10', 1, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, true, 1, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, false, 1, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, null, 1, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, undefined, 1, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, [], 1, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, {}, 1, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, ( x: number ): number => x, 1, mask, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs( x.length, x, '10', mask, 1 ); // $ExpectError
	smskmaxabs( x.length, x, true, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, x, false, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, x, null, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, x, undefined, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, x, [], mask, 1 ); // $ExpectError
	smskmaxabs( x.length, x, {}, mask, 1 ); // $ExpectError
	smskmaxabs( x.length, x, ( x: number ): number => x, mask, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Uint8Array...
{
	const x = new Float32Array( 10 );

	smskmaxabs( x.length, x, 1, 10, 1 ); // $ExpectError
	smskmaxabs( x.length, x, 1, '10', 1 ); // $ExpectError
	smskmaxabs( x.length, x, 1, true, 1 ); // $ExpectError
	smskmaxabs( x.length, x, 1, false, 1 ); // $ExpectError
	smskmaxabs( x.length, x, 1, null, 1 ); // $ExpectError
	smskmaxabs( x.length, x, 1, undefined, 1 ); // $ExpectError
	smskmaxabs( x.length, x, 1, [], 1 ); // $ExpectError
	smskmaxabs( x.length, x, 1, {}, 1 ); // $ExpectError
	smskmaxabs( x.length, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs( x.length, x, 1, mask, '10' ); // $ExpectError
	smskmaxabs( x.length, x, 1, mask, true ); // $ExpectError
	smskmaxabs( x.length, x, 1, mask, false ); // $ExpectError
	smskmaxabs( x.length, x, 1, mask, null ); // $ExpectError
	smskmaxabs( x.length, x, 1, mask, undefined ); // $ExpectError
	smskmaxabs( x.length, x, 1, mask, [] ); // $ExpectError
	smskmaxabs( x.length, x, 1, mask, {} ); // $ExpectError
	smskmaxabs( x.length, x, 1, mask, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs(); // $ExpectError
	smskmaxabs( x.length ); // $ExpectError
	smskmaxabs( x.length, x, 1 ); // $ExpectError
	smskmaxabs( x.length, x, 1, mask ); // $ExpectError
	smskmaxabs( x.length, x, 1, mask, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs.ndarray( '10', x, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( true, x, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( false, x, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( null, x, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( undefined, x, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( [], x, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( {}, x, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( ( x: number ): number => x, x, 1, 0, mask, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs.ndarray( x.length, 10, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, '10', 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, true, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, false, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, null, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, undefined, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, [], 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, {}, 1, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, ( x: number ): number => x, 1, 0, mask, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs.ndarray( x.length, x, '10', 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, true, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, false, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, null, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, undefined, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, [], 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, {}, 0, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, ( x: number ): number => x, 0, mask, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs.ndarray( x.length, x, 1, '10', mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, true, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, false, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, null, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, undefined, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, [], mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, {}, mask, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, ( x: number ): number => x, mask, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Uint8Array...
{
	const x = new Float32Array( 10 );

	smskmaxabs.ndarray( x.length, x, 1, 0, 10, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, '10', 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, true, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, false, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, null, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, [], 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, {}, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs.ndarray( x.length, x, 1, 0, mask, '10', 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, true, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, false, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, null, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, undefined, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, [], 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, {}, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, '10' ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, true ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, false ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, null ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, undefined ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, [] ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, {} ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const mask = new Uint8Array( 10 );

	smskmaxabs.ndarray(); // $ExpectError
	smskmaxabs.ndarray( x.length ); // $ExpectError
	smskmaxabs.ndarray( x.length, x ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, 1 ); // $ExpectError
	smskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, 0, 10 ); // $ExpectError
}
