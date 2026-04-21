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
import gdiff = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectType Float64Array
	gdiff( x.length, 1, new AccessorArray( x ), 1, 1, new AccessorArray( p ), 1, 1, new AccessorArray( a ), 1, new AccessorArray( out ), 1, new AccessorArray( w ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( '10', 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( true, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( false, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( null, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( undefined, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( [], 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( {}, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( ( x: number ): number => x, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( x.length, '10', x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, true, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, false, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, null, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, undefined, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, [], x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, {}, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, ( x: number ): number => x, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( 5, 1, 10, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( 5, 1, true, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( 5, 1, false, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( 5, 1, null, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( 5, 1, undefined, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( 5, 1, {}, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( x.length, 1, x, '10', 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, true, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, false, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, null, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, undefined, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, [], 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, {}, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, ( x: number ): number => x, 1, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( x.length, 1, x, 1, '10', p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, true, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, false, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, null, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, undefined, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, [], p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, {}, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, ( x: number ): number => x, p, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a collection...
{
	const x = new Float64Array( 5 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( x.length, 1, x, 1, 1, 10, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, true, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, false, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, null, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, undefined, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, {}, 1, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( x.length, 1, x, 1, 1, p, '10', 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, true, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, false, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, null, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, undefined, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, [], 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, {}, 1, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, ( x: number ): number => x, 1, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( x.length, 1, x, 1, 1, p, 1, '10', a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, true, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, false, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, null, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, undefined, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, [], a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, {}, a, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, ( x: number ): number => x, a, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a collection...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( x.length, 1, x, 1, 1, p, 1, 1, 10, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, true, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, false, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, null, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, undefined, 1, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, {}, 1, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, '10', out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, true, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, false, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, null, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, undefined, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, [], out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, {}, out, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, ( x: number ): number => x, out, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a collection...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const w = new Float64Array( 6 );

	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, 10, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, true, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, false, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, null, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, undefined, 1, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, {}, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, '10', w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, true, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, false, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, null, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, undefined, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, [], w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, {}, w, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, ( x: number ): number => x, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a thirteenth argument which is not a collection...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );

	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, 10, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, true, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, false, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, null, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, undefined, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourteenth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, '10' ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, true ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, false ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, null ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, undefined ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, [] ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, {} ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff(); // $ExpectError
	gdiff( x.length ); // $ExpectError
	gdiff( x.length, 1 ); // $ExpectError
	gdiff( x.length, 1, x ); // $ExpectError
	gdiff( x.length, 1, x, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1 ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w ); // $ExpectError
	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectType Float64Array
	gdiff.ndarray( x.length, 1, new AccessorArray( x ), 1, 0, 1, new AccessorArray( p ), 1, 0, 1, new AccessorArray( a ), 1, 0, new AccessorArray( out ), 1, 0, new AccessorArray( w ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( '10', 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( true, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( false, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( null, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( undefined, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( [], 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( {}, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( ( x: number ): number => x, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, '10', x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, true, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, false, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, null, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, undefined, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, [], x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, {}, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, ( x: number ): number => x, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( 5, 1, 10, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( 5, 1, true, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( 5, 1, false, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( 5, 1, null, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( 5, 1, undefined, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( 5, 1, {}, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, '10', 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, true, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, false, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, null, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, undefined, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, [], 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, {}, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, ( x: number ): number => x, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, '10', 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, true, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, false, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, null, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, undefined, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, [], 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, {}, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, ( x: number ): number => x, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, '10', p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, true, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, false, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, null, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, undefined, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, [], p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, {}, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, ( x: number ): number => x, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a collection...
{
	const x = new Float64Array( 5 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, 10, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, true, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, false, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, null, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, undefined, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, {}, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, '10', 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, true, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, false, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, null, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, undefined, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, [], 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, {}, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, ( x: number ): number => x, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, '10', 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, true, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, false, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, null, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, undefined, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, [], 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, {}, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, ( x: number ): number => x, 1, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, '10', a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, true, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, false, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, null, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, undefined, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, [], a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, {}, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, ( x: number ): number => x, a, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a collection...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, 10, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, true, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, false, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, null, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, undefined, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, {}, 1, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelfth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, '10', 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, true, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, false, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, null, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, undefined, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, [], 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, {}, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, ( x: number ): number => x, 0, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a thirteenth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, '10', out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, true, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, false, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, null, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, undefined, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, [], out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, {}, out, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, ( x: number ): number => x, out, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourteenth argument which is not a collection...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, 10, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, true, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, false, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, null, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, undefined, 1, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, {}, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifteenth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, '10', 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, true, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, false, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, null, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, undefined, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, [], 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, {}, 0, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixteenth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, '10', w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, true, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, false, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, null, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, undefined, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, [], w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, {}, w, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventeenth argument which is not a collection...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, 10, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, true, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, false, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, null, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, undefined, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighteenth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, '10', 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, true, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, false, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, null, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, undefined, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, [], 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, {}, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a nineteenth argument which is not a number...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, '10' ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, true ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, false ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, null ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, undefined ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, [] ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, {} ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 5 );
	const p = new Float64Array( 1 );
	const a = new Float64Array( 1 );
	const out = new Float64Array( 6 );
	const w = new Float64Array( 6 );

	gdiff.ndarray(); // $ExpectError
	gdiff.ndarray( x.length ); // $ExpectError
	gdiff.ndarray( x.length, 1 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1 ); // $ExpectError
	gdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0, 10 ); // $ExpectError
}
