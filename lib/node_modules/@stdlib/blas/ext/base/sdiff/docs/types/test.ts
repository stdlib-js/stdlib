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

import sdiff = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( '10', 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( true, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( false, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( null, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( undefined, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( [], 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( {}, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( ( x: number ): number => x, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( x.length, '10', x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, true, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, false, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, null, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, undefined, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, [], x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, {}, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, ( x: number ): number => x, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( x.length, 1, '10', 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, true, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, false, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, null, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, undefined, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, [], 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, {}, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, ( x: number ): number => x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( x.length, 1, x, '10', 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, true, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, false, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, null, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, undefined, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, [], 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, {}, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, ( x: number ): number => x, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( x.length, 1, x, 1, '10', p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, true, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, false, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, null, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, undefined, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, [], p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, {}, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, ( x: number ): number => x, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( x.length, 1, x, 1, 1, '10', 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, true, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, false, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, null, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, undefined, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, [], 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, {}, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, ( x: number ): number => x, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( x.length, 1, x, 1, 1, p, '10', 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, true, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, false, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, null, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, undefined, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, [], 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, {}, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, ( x: number ): number => x, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( x.length, 1, x, 1, 1, p, 1, '10', a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, true, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, false, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, null, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, undefined, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, [], a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, {}, a, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, ( x: number ): number => x, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( x.length, 1, x, 1, 1, p, 1, 1, '10', 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, true, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, false, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, null, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, undefined, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, [], 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, {}, 1, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, ( x: number ): number => x, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, '10', out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, true, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, false, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, null, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, undefined, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, [], out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, {}, out, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, ( x: number ): number => x, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const w = new Float32Array( 9 );

	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, '10', 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, true, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, false, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, null, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, undefined, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, [], 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, {}, 1, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, ( x: number ): number => x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, '10', w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, true, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, false, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, null, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, undefined, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, [], w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, {}, w, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, ( x: number ): number => x, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a thirteenth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 9 );

	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, '10', 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, true, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, false, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, null, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, undefined, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, [], 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, {}, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourteenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, '10' ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, true ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, false ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, null ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, undefined ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, [] ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, {} ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff(); // $ExpectError
	sdiff( x.length ); // $ExpectError
	sdiff( x.length, 1 ); // $ExpectError
	sdiff( x.length, 1, x ); // $ExpectError
	sdiff( x.length, 1, x, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w ); // $ExpectError
	sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( '10', 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( true, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( false, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( null, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( undefined, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( [], 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( {}, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( ( x: number ): number => x, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, '10', x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, true, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, false, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, null, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, undefined, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, [], x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, {}, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, ( x: number ): number => x, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, '10', 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, true, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, false, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, null, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, undefined, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, [], 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, {}, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, ( x: number ): number => x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, '10', 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, true, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, false, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, null, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, undefined, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, [], 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, {}, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, ( x: number ): number => x, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, '10', 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, true, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, false, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, null, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, undefined, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, [], 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, {}, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, ( x: number ): number => x, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, '10', p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, true, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, false, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, null, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, undefined, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, [], p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, {}, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, ( x: number ): number => x, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, '10', 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, true, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, false, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, null, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, undefined, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, [], 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, {}, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, ( x: number ): number => x, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, '10', 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, true, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, false, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, null, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, undefined, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, [], 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, {}, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, ( x: number ): number => x, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, '10', 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, true, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, false, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, null, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, undefined, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, [], 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, {}, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, ( x: number ): number => x, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, '10', a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, true, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, false, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, null, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, undefined, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, [], a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, {}, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, ( x: number ): number => x, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 9 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, '10', 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, true, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, false, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, null, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, undefined, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, [], 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, {}, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, ( x: number ): number => x, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelfth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, '10', 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, true, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, false, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, null, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, undefined, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, [], 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, {}, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, ( x: number ): number => x, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a thirteenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 9 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, '10', out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, true, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, false, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, null, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, undefined, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, [], out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, {}, out, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, ( x: number ): number => x, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourteenth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, '10', 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, true, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, false, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, null, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, undefined, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, [], 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, {}, 1, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, ( x: number ): number => x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifteenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, '10', 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, true, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, false, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, null, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, undefined, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, [], 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, {}, 0, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixteenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, '10', w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, true, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, false, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, null, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, undefined, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, [], w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, {}, w, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventeenth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, '10', 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, true, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, false, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, null, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, undefined, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, [], 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, {}, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighteenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, '10', 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, true, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, false, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, null, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, undefined, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, [], 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, {}, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a nineteenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 0, '10' ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 0, true ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 0, false ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 0, null ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 0, undefined ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 0, [] ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 0, {} ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const p = new Float32Array( 1 );
	const a = new Float32Array( 1 );
	const out = new Float32Array( 11 );
	const w = new Float32Array( 11 );

	sdiff.ndarray(); // $ExpectError
	sdiff.ndarray( x.length ); // $ExpectError
	sdiff.ndarray( x.length, 1 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1 ); // $ExpectError
	sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0, {} ); // $ExpectError
}
