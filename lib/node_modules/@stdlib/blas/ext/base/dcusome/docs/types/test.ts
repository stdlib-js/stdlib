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

import BooleanArray = require( '@stdlib/array/bool' );
import dcusome = require( './index' );


// TESTS //

// The function returns a BooleanArray...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome( x.length, 5, x, 1, out, 1 ); // $ExpectType BooleanArray
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome( '10', 5, x, 1, out, 1 ); // $ExpectError
	dcusome( true, 5, x, 1, out, 1 ); // $ExpectError
	dcusome( false, 5, x, 1, out, 1 ); // $ExpectError
	dcusome( null, 5, x, 1, out, 1 ); // $ExpectError
	dcusome( undefined, 5, x, 1, out, 1 ); // $ExpectError
	dcusome( [], 5, x, 1, out, 1 ); // $ExpectError
	dcusome( {}, 5, x, 1, out, 1 ); // $ExpectError
	dcusome( ( x: number ): number => x, 5, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome( x.length, '5', x, 1, out, 1 ); // $ExpectError
	dcusome( x.length, true, x, 1, out, 1 ); // $ExpectError
	dcusome( x.length, false, x, 1, out, 1 ); // $ExpectError
	dcusome( x.length, null, x, 1, out, 1 ); // $ExpectError
	dcusome( x.length, undefined, x, 1, out, 1 ); // $ExpectError
	dcusome( x.length, [], x, 1, out, 1 ); // $ExpectError
	dcusome( x.length, {}, x, 1, out, 1 ); // $ExpectError
	dcusome( x.length, ( x: number ): number => x, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome( x.length, 5, '10', 1, out, 1 ); // $ExpectError
	dcusome( x.length, 5, true, 1, out, 1 ); // $ExpectError
	dcusome( x.length, 5, false, 1, out, 1 ); // $ExpectError
	dcusome( x.length, 5, null, 1, out, 1 ); // $ExpectError
	dcusome( x.length, 5, undefined, 1, out, 1 ); // $ExpectError
	dcusome( x.length, 5, [], 1, out, 1 ); // $ExpectError
	dcusome( x.length, 5, {}, 1, out, 1 ); // $ExpectError
	dcusome( x.length, 5, ( x: number ): number => x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome( x.length, 5, x, '1', out, 1 ); // $ExpectError
	dcusome( x.length, 5, x, true, out, 1 ); // $ExpectError
	dcusome( x.length, 5, x, false, out, 1 ); // $ExpectError
	dcusome( x.length, 5, x, null, out, 1 ); // $ExpectError
	dcusome( x.length, 5, x, undefined, out, 1 ); // $ExpectError
	dcusome( x.length, 5, x, [], out, 1 ); // $ExpectError
	dcusome( x.length, 5, x, {}, out, 1 ); // $ExpectError
	dcusome( x.length, 5, x, ( x: number ): number => x, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a BooleanArray...
{
	const x = new Float64Array( 10 );

	dcusome( x.length, 5, x, 1, 10, 1 ); // $ExpectError
	dcusome( x.length, 5, x, 1, '10', 1 ); // $ExpectError
	dcusome( x.length, 5, x, 1, true, 1 ); // $ExpectError
	dcusome( x.length, 5, x, 1, false, 1 ); // $ExpectError
	dcusome( x.length, 5, x, 1, null, 1 ); // $ExpectError
	dcusome( x.length, 5, x, 1, undefined, 1 ); // $ExpectError
	dcusome( x.length, 5, x, 1, [], 1 ); // $ExpectError
	dcusome( x.length, 5, x, 1, {}, 1 ); // $ExpectError
	dcusome( x.length, 5, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome( x.length, 5, x, 1, out, '10' ); // $ExpectError
	dcusome( x.length, 5, x, 1, out, true ); // $ExpectError
	dcusome( x.length, 5, x, 1, out, false ); // $ExpectError
	dcusome( x.length, 5, x, 1, out, null ); // $ExpectError
	dcusome( x.length, 5, x, 1, out, undefined ); // $ExpectError
	dcusome( x.length, 5, x, 1, out, [] ); // $ExpectError
	dcusome( x.length, 5, x, 1, out, {} ); // $ExpectError
	dcusome( x.length, 5, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome(); // $ExpectError
	dcusome( x.length ); // $ExpectError
	dcusome( x.length, 5 ); // $ExpectError
	dcusome( x.length, 5, x ); // $ExpectError
	dcusome( x.length, 5, x, 1 ); // $ExpectError
	dcusome( x.length, 5, x, 1, out ); // $ExpectError
	dcusome( x.length, 5, x, 1, out, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a BooleanArray...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome.ndarray( x.length, 5, x, 1, 0, out, 1, 0 ); // $ExpectType BooleanArray
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome.ndarray( '10', 5, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( true, 5, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( false, 5, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( null, 5, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( undefined, 5, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( [], 5, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( {}, 5, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( ( x: number ): number => x, 5, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome.ndarray( x.length, '5', x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, true, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, false, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, null, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, undefined, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, [], x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, {}, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, ( x: number ): number => x, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome.ndarray( x.length, 5, '10', 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, true, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, false, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, null, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, [], 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, {}, 1, 0, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome.ndarray( x.length, 5, x, 1, '10', out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, true, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, false, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, null, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, undefined, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, [], out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, {}, out, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcusome.ndarray( x.length, 5, x, 1, 0, 10, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, '10', 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, true, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, false, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, null, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, [], 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, {}, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome.ndarray( x.length, 5, x, 1, 0, out, '10', 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, true, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, false, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, null, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, undefined, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, [], 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, {}, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome.ndarray( x.length, 5, x, 1, 0, out, 1, '10' ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, 1, true ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, 1, false ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, 1, null ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, 1, undefined ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, 1, [] ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, 1, {} ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcusome.ndarray(); // $ExpectError
	dcusome.ndarray( x.length ); // $ExpectError
	dcusome.ndarray( x.length, 5 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, 1 ); // $ExpectError
	dcusome.ndarray( x.length, 5, x, 1, 0, out, 1, 0, 10 ); // $ExpectError
}
