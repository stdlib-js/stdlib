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

import smskramp = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp( x.length, x, 1, m, 1, y, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp( '10', x, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( true, x, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( false, x, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( null, x, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( undefined, x, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( [], x, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( {}, x, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( ( x: number ): number => x, x, 1, m, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp( x.length, 10, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, '10', 1, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, true, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, false, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, null, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, undefined, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, [ '1' ], 1, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, {}, 1, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, ( x: number ): number => x, 1, m, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp( x.length, x, '10', m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, true, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, false, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, null, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, undefined, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, [], m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, {}, m, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, ( x: number ): number => x, m, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Uint8Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smskramp( x.length, x, 1, 10, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, '10', 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, true, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, false, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, null, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, undefined, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, [ '1' ], 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, {}, 1, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp( x.length, x, 1, m, '10', y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, true, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, false, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, null, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, undefined, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, [], y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, {}, y, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );

	smskramp( x.length, x, 1, m, 1, 10, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, '10', 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, true, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, false, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, null, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, undefined, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, [ '1' ], 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, {}, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp( x.length, x, 1, m, 1, y, '10' ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, y, true ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, y, false ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, y, null ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, y, undefined ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, y, [] ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, y, {} ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp(); // $ExpectError
	smskramp( x.length ); // $ExpectError
	smskramp( x.length, x ); // $ExpectError
	smskramp( x.length, x, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m ); // $ExpectError
	smskramp( x.length, x, 1, m, 1 ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, y ); // $ExpectError
	smskramp( x.length, x, 1, m, 1, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp.ndarray( '10', x, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( true, x, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( false, x, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( null, x, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( undefined, x, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( [], x, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( {}, x, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( ( x: number ): number => x, x, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp.ndarray( x.length, 10, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, '10', 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, true, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, false, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, null, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, undefined, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, [ '1' ], 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, {}, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, ( x: number ): number => x, 1, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp.ndarray( x.length, x, '10', 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, true, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, false, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, null, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, undefined, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, [], 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, {}, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, ( x: number ): number => x, 0, m, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp.ndarray( x.length, x, 1, '10', m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, true, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, false, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, null, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, undefined, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, [], m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, {}, m, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, ( x: number ): number => x, m, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Uint8Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smskramp.ndarray( x.length, x, 1, 0, 10, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, '10', 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, true, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, false, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, null, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, [ '1' ], 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, {}, 1, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp.ndarray( x.length, x, 1, 0, m, '10', 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, true, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, false, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, null, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, undefined, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, [], 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, {}, 0, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp.ndarray( x.length, x, 1, 0, m, 1, '10', y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, true, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, false, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, null, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, undefined, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, [], y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, {}, y, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );

	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, 10, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, '10', 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, true, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, false, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, null, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, undefined, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, {}, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, '10', 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, true, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, false, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, null, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, undefined, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, [], 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, {}, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, '10' ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, true ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, false ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, null ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, undefined ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, [] ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, {} ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float32Array( 10 );

	smskramp.ndarray(); // $ExpectError
	smskramp.ndarray( x.length ); // $ExpectError
	smskramp.ndarray( x.length, x ); // $ExpectError
	smskramp.ndarray( x.length, x, 1 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1 ); // $ExpectError
	smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0, 10 ); // $ExpectError
}
