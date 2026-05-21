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

import dediff = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff( '10', x, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( true, x, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( false, x, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( null, x, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( undefined, x, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( [], x, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( {}, x, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( ( x: number ): number => x, x, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff( x.length, '10', 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, true, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, false, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, null, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, undefined, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, [], 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, {}, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, ( x: number ): number => x, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff( x.length, x, '10', 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, true, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, false, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, null, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, undefined, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, [], 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, {}, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, ( x: number ): number => x, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff( x.length, x, 1, '10', p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, true, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, false, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, null, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, undefined, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, [], p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, {}, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, ( x: number ): number => x, p, 1, 1, a, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff( x.length, x, 1, 1, '10', 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, true, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, false, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, null, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, undefined, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, [], 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, {}, 1, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, ( x: number ): number => x, 1, 1, a, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff( x.length, x, 1, 1, p, '10', 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, true, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, false, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, null, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, undefined, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, [], 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, {}, 1, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, ( x: number ): number => x, 1, a, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff( x.length, x, 1, 1, p, 1, '10', a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, true, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, false, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, null, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, undefined, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, [], a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, {}, a, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, ( x: number ): number => x, a, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eigth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff( x.length, x, 1, 1, p, 1, 1, '10', 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, true, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, false, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, null, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, undefined, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, [], 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, {}, 1, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, ( x: number ): number => x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff( x.length, x, 1, 1, p, 1, 1, a, '10', out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, true, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, false, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, null, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, undefined, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, [], out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, {}, out, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, ( x: number ): number => x, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );

	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, '10', 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, true, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, false, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, null, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, undefined, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, [], 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, {}, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, '10' ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, true ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, false ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, null ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, undefined ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, [] ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, {} ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff(); // $ExpectError
	dediff( x.length ); // $ExpectError
	dediff( x.length, x ); // $ExpectError
	dediff( x.length, x, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1 ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out ); // $ExpectError
	dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( '10', x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( true, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( false, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( null, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( undefined, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( [], x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( {}, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( ( x: number ): number => x, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, '10', 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, true, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, false, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, null, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, undefined, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, [], 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, {}, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, ( x: number ): number => x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, x, '10', 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, true, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, false, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, null, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, undefined, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, [], 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, {}, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, ( x: number ): number => x, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, x, 1, '10', 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, true, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, false, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, null, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, undefined, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, [], 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, {}, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, ( x: number ): number => x, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, x, 1, 0, '10', p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, true, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, false, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 1, null, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, undefined, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, [], p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, {}, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, ( x: number ): number => x, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, x, 1, 0, 1, '10', 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, true, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, false, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, null, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, undefined, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, [], 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, {}, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, ( x: number ): number => x, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, x, 1, 0, 1, p, '10', 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, true, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, false, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, null, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, undefined, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, [], 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, {}, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, ( x: number ): number => x, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eigth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, '10', 1, a, 0, 1, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, true, 1, a, 0, 1, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, false, 1, a, 0, 1, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, null, 1, a, 0, 1, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, undefined, 1, a, 0, 1, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, [], 1, a, 0, 1, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, {}, 1, a, 0, 1, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, ( x: number ): number => x, 1, a, 0, 1, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, '10', a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, true, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, false, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, null, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, undefined, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, [], a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, {}, a, 1, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, ( x: number ): number => x, a, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, '10', 1, 0, out, 0, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, true, 1, 0, out, 0, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, false, 1, 0, out, 0, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, null, 1, 0, out, 0, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, undefined, 1, 0, out, 0, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, [], 1, 0, out, 0, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, {}, 1, 0, out, 0, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, ( x: number ): number => x, 1, 0, out, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, '10', 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, true, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, false, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, null, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, undefined, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, [], 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, {}, 0, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelveth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 9 );

	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, '10', out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, true, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, false, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, null, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, undefined, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, [], out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, {}, out, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a thirteenth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );

	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, '10', 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, true, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, false, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, null, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, undefined, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, [], 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, {}, 1, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourteenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, '10', 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, true, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, false, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, null, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, undefined, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, [], 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, {}, 0 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifteenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, '10' ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, true ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, false ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, null ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, undefined ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, [] ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, {} ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 11 );

	dediff.ndarray(); // $ExpectError
	dediff.ndarray( x.length ); // $ExpectError
	dediff.ndarray( x.length, x ); // $ExpectError
	dediff.ndarray( x.length, x, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1 ); // $ExpectError
	dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, {} ); // $ExpectError
}
