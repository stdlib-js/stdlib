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
import gvander = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander( 'row-major', 1, 10, 3, x, 1, out, 3 ); // $ExpectType Float64Array
	gvander( 'row-major', 1, 10, 3, new AccessorArray( x ), 1, new AccessorArray( out ), 3 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a valid order...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander( '10', 1, 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( true, 1, 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( false, 1, 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( null, 1, 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( undefined, 1, 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( [], 1, 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( {}, 1, 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( ( x: number ): number => x, 1, 10, 3, x, 1, out, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander( 'row-major', '10', 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', true, 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', false, 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', null, 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', undefined, 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', [], 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', {}, 10, 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', ( x: number ): number => x, 10, 3, x, 1, out, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander( 'row-major', 1, '10', 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, true, 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, false, 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, null, 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, undefined, 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, [], 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, {}, 3, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, ( x: number ): number => x, 3, x, 1, out, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander( 'row-major', 1, 10, '10', x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, true, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, false, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, null, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, undefined, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, [], x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, {}, x, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, ( x: number ): number => x, x, 1, out, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a numeric array...
{
	const out = new Float64Array( 30 );

	gvander( 'row-major', 1, 10, 3, '10', 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, true, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, false, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, null, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, undefined, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, [ '1' ], 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, {}, 1, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, ( x: number ): number => x, 1, out, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander( 'row-major', 1, 10, 3, x, '10', out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, true, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, false, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, null, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, undefined, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, [], out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, {}, out, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, ( x: number ): number => x, out, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gvander( 'row-major', 1, 10, 3, x, 1, '10', 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, true, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, false, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, null, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, undefined, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, [ '1' ], 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, {}, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander( 'row-major', 1, 10, 3, x, 1, out, '10' ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, out, true ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, out, false ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, out, null ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, out, undefined ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, out, [] ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, out, {} ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander(); // $ExpectError
	gvander( 'row-major' ); // $ExpectError
	gvander( 'row-major', 1 ); // $ExpectError
	gvander( 'row-major', 1, 10 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1 ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, out ); // $ExpectError
	gvander( 'row-major', 1, 10, 3, x, 1, out, 3, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectType Float64Array
	gvander.ndarray( 1, 10, 3, new AccessorArray( x ), 1, 0, new AccessorArray( out ), 3, 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander.ndarray( '10', 10, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( true, 10, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( false, 10, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( null, 10, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( undefined, 10, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( [], 10, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( {}, 10, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( ( x: number ): number => x, 10, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander.ndarray( 1, '10', 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, true, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, false, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, null, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, undefined, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, [], 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, {}, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, ( x: number ): number => x, 3, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander.ndarray( 1, 10, '10', x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, true, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, false, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, null, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, undefined, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, [], x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, {}, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, ( x: number ): number => x, x, 1, 0, out, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a numeric array...
{
	const out = new Float64Array( 30 );

	gvander.ndarray( 1, 10, 3, '10', 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, true, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, false, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, null, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, undefined, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, [ '1' ], 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, {}, 1, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, ( x: number ): number => x, 1, 0, out, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander.ndarray( 1, 10, 3, x, '10', 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, true, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, false, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, null, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, undefined, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, [], 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, {}, 0, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, ( x: number ): number => x, 0, out, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander.ndarray( 1, 10, 3, x, 1, '10', out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, true, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, false, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, null, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, undefined, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, [], out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, {}, out, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, ( x: number ): number => x, out, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gvander.ndarray( 1, 10, 3, x, 1, 0, '10', 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, true, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, false, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, null, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, undefined, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, [ '1' ], 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, {}, 3, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, ( x: number ): number => x, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander.ndarray( 1, 10, 3, x, 1, 0, out, '10', 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, true, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, false, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, null, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, undefined, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, [], 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, {}, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, '10', 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, true, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, false, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, null, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, undefined, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, [], 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, {}, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, 1, '10' ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, 1, true ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, 1, false ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, 1, null ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, 1, undefined ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, 1, [] ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, 1, {} ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 30 );

	gvander.ndarray(); // $ExpectError
	gvander.ndarray( 1 ); // $ExpectError
	gvander.ndarray( 1, 10 ); // $ExpectError
	gvander.ndarray( 1, 10, 3 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, 1 ); // $ExpectError
	gvander.ndarray( 1, 10, 3, x, 1, 0, out, 3, 1, 0, 10 ); // $ExpectError
}
