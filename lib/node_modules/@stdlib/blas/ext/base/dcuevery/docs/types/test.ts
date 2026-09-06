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
import dcuevery = require( './index' );


// TESTS //

// The function returns a BooleanArray...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery( x.length, x, 1, out, 1 ); // $ExpectType BooleanArray
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery( '10', x, 1, out, 1 ); // $ExpectError
	dcuevery( true, x, 1, out, 1 ); // $ExpectError
	dcuevery( false, x, 1, out, 1 ); // $ExpectError
	dcuevery( null, x, 1, out, 1 ); // $ExpectError
	dcuevery( undefined, x, 1, out, 1 ); // $ExpectError
	dcuevery( [], x, 1, out, 1 ); // $ExpectError
	dcuevery( {}, x, 1, out, 1 ); // $ExpectError
	dcuevery( ( x: number ): number => x, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery( x.length, 10, 1, out, 1 ); // $ExpectError
	dcuevery( x.length, '10', 1, out, 1 ); // $ExpectError
	dcuevery( x.length, true, 1, out, 1 ); // $ExpectError
	dcuevery( x.length, false, 1, out, 1 ); // $ExpectError
	dcuevery( x.length, null, 1, out, 1 ); // $ExpectError
	dcuevery( x.length, undefined, 1, out, 1 ); // $ExpectError
	dcuevery( x.length, [], 1, out, 1 ); // $ExpectError
	dcuevery( x.length, {}, 1, out, 1 ); // $ExpectError
	dcuevery( x.length, ( x: number ): number => x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery( x.length, x, '10', out, 1 ); // $ExpectError
	dcuevery( x.length, x, true, out, 1 ); // $ExpectError
	dcuevery( x.length, x, false, out, 1 ); // $ExpectError
	dcuevery( x.length, x, null, out, 1 ); // $ExpectError
	dcuevery( x.length, x, undefined, out, 1 ); // $ExpectError
	dcuevery( x.length, x, [], out, 1 ); // $ExpectError
	dcuevery( x.length, x, {}, out, 1 ); // $ExpectError
	dcuevery( x.length, x, ( x: number ): number => x, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a BooleanArray...
{
	const x = new Float64Array( 10 );

	dcuevery( x.length, x, 1, 10, 1 ); // $ExpectError
	dcuevery( x.length, x, 1, '10', 1 ); // $ExpectError
	dcuevery( x.length, x, 1, true, 1 ); // $ExpectError
	dcuevery( x.length, x, 1, false, 1 ); // $ExpectError
	dcuevery( x.length, x, 1, null, 1 ); // $ExpectError
	dcuevery( x.length, x, 1, undefined, 1 ); // $ExpectError
	dcuevery( x.length, x, 1, [], 1 ); // $ExpectError
	dcuevery( x.length, x, 1, {}, 1 ); // $ExpectError
	dcuevery( x.length, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery( x.length, x, 1, out, '10' ); // $ExpectError
	dcuevery( x.length, x, 1, out, true ); // $ExpectError
	dcuevery( x.length, x, 1, out, false ); // $ExpectError
	dcuevery( x.length, x, 1, out, null ); // $ExpectError
	dcuevery( x.length, x, 1, out, undefined ); // $ExpectError
	dcuevery( x.length, x, 1, out, [] ); // $ExpectError
	dcuevery( x.length, x, 1, out, {} ); // $ExpectError
	dcuevery( x.length, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery(); // $ExpectError
	dcuevery( x.length ); // $ExpectError
	dcuevery( x.length, x ); // $ExpectError
	dcuevery( x.length, x, 1 ); // $ExpectError
	dcuevery( x.length, x, 1, out ); // $ExpectError
	dcuevery( x.length, x, 1, out, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a BooleanArray...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery.ndarray( x.length, x, 1, 0, out, 1, 0 ); // $ExpectType BooleanArray
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery.ndarray( '10', x, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( true, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( false, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( null, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( undefined, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( [], x, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( {}, x, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( ( x: number ): number => x, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery.ndarray( x.length, 10, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, '10', 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, true, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, false, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, null, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, [], 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, {}, 1, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery.ndarray( x.length, x, '10', 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, true, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, false, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, null, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, undefined, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, [], 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, {}, 0, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery.ndarray( x.length, x, 1, '10', out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, true, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, false, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, null, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, undefined, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, [], out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, {}, out, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a BooleanArray...
{
	const x = new Float64Array( 10 );

	dcuevery.ndarray( x.length, x, 1, 0, 10, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, '10', 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, true, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, false, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, null, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, [], 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, {}, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery.ndarray( x.length, x, 1, 0, out, '10', 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, true, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, false, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, null, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, undefined, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, [], 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, {}, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery.ndarray( x.length, x, 1, 0, out, 1, '10' ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, 1, true ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, 1, false ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, 1, null ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, 1, undefined ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, 1, [] ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, 1, {} ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new BooleanArray( 10 );

	dcuevery.ndarray(); // $ExpectError
	dcuevery.ndarray( x.length ); // $ExpectError
	dcuevery.ndarray( x.length, x ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, 1 ); // $ExpectError
	dcuevery.ndarray( x.length, x, 1, 0, out, 1, 0, 10 ); // $ExpectError
}
