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
import gwhere = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere( 3, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectType Float64Array
	gwhere( 3, new AccessorArray( condition ), 1, new AccessorArray( x ), 1, new AccessorArray( y ), 1, new AccessorArray( out ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere( '10', condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( true, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( false, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( null, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( undefined, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( [], condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( {}, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( ( x: number ): number => x, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere( 3, 10, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, true, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, false, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, null, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, undefined, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, {}, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, ( x: number ): number => x, 1, x, 1, y, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere( 3, condition, '10', x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, true, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, false, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, null, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, undefined, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, [], x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, {}, x, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, ( x: number ): number => x, x, 1, y, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere( 3, condition, 1, 10, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, true, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, false, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, null, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, undefined, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, {}, 1, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, ( x: number ): number => x, 1, y, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere( 3, condition, 1, x, '10', y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, true, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, false, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, null, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, undefined, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, [], y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, {}, y, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, ( x: number ): number => x, y, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a collection...
{
	const x = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere( 3, condition, 1, x, 1, 10, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, true, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, false, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, null, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, undefined, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, {}, 1, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, ( x: number ): number => x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere( 3, condition, 1, x, 1, y, '10', out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, true, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, false, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, null, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, undefined, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, [], out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, {}, out, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, ( x: number ): number => x, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a collection...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );

	gwhere( 3, condition, 1, x, 1, y, 1, 10, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, true, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, false, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, null, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, undefined, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, {}, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere( 3, condition, 1, x, 1, y, 1, out, '10' ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, out, true ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, out, false ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, out, null ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, out, undefined ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, out, [] ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, out, {} ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere(); // $ExpectError
	gwhere( 3 ); // $ExpectError
	gwhere( 3, condition ); // $ExpectError
	gwhere( 3, condition, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x ); // $ExpectError
	gwhere( 3, condition, 1, x, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1 ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, out ); // $ExpectError
	gwhere( 3, condition, 1, x, 1, y, 1, out, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectType Float64Array
	gwhere.ndarray( 3, new AccessorArray( condition ), 1, 0, new AccessorArray( x ), 1, 0, new AccessorArray( y ), 1, 0, new AccessorArray( out ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( '10', condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( true, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( false, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( null, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( undefined, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( [], condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( {}, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( ( x: number ): number => x, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( 3, 10, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, true, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, false, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, null, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, undefined, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, {}, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, ( x: number ): number => x, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( 3, condition, '10', 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, true, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, false, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, null, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, undefined, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, [], 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, {}, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, ( x: number ): number => x, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( 3, condition, 1, '10', x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, true, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, false, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, null, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, undefined, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, [], x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, {}, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, ( x: number ): number => x, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( 3, condition, 1, 0, 10, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, true, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, false, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, null, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, undefined, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, {}, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, ( x: number ): number => x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( 3, condition, 1, 0, x, '10', 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, true, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, false, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, null, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, undefined, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, [], 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, {}, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, ( x: number ): number => x, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( 3, condition, 1, 0, x, 1, '10', y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, true, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, false, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, null, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, undefined, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, [], y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, {}, y, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, ( x: number ): number => x, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a collection...
{
	const x = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, 10, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, true, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, false, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, null, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, {}, 1, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, '10', 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, true, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, false, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, null, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, undefined, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, [], 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, {}, 0, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, '10', out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, true, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, false, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, null, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, undefined, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, [], out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, {}, out, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a collection...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );

	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, 10, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, true, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, false, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, null, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, undefined, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, {}, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelfth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, '10', 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, true, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, false, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, null, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, undefined, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, [], 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, {}, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a thirteenth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, '10' ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, true ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, false ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, null ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, undefined ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, [] ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, {} ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	gwhere.ndarray(); // $ExpectError
	gwhere.ndarray( 3 ); // $ExpectError
	gwhere.ndarray( 3, condition ); // $ExpectError
	gwhere.ndarray( 3, condition, 1 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1 ); // $ExpectError
	gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0, 10 ); // $ExpectError
}
