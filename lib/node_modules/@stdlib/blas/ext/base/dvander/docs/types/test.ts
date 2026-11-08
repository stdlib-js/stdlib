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

import dvander = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander( 'row-major', -1, 10, 10, x, 1, out, 10 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a valid order...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander( '10', -1, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 10, -1, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( true, -1, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( false, -1, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( null, -1, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( undefined, -1, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( [], -1, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( {}, -1, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( ( x: number ): number => x, -1, 10, 10, x, 1, out, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander( 'row-major', '10', 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', true, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', false, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', null, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', undefined, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', [], 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', {}, 10, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', ( x: number ): number => x, 10, 10, x, 1, out, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander( 'row-major', -1, '10', 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, true, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, false, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, null, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, undefined, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, [], 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, {}, 10, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, ( x: number ): number => x, 10, x, 1, out, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander( 'row-major', -1, 10, '10', x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, true, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, false, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, null, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, undefined, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, [], x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, {}, x, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, ( x: number ): number => x, x, 1, out, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const out = new Float64Array( 100 );

	dvander( 'row-major', -1, 10, 10, 10, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, '10', 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, true, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, false, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, null, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, undefined, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, [ '1' ], 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, {}, 1, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, ( x: number ): number => x, 1, out, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander( 'row-major', -1, 10, 10, x, '10', out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, true, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, false, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, null, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, undefined, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, [], out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, {}, out, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, ( x: number ): number => x, out, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dvander( 'row-major', -1, 10, 10, x, 1, 10, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, '10', 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, true, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, false, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, null, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, undefined, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, [ '1' ], 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, {}, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, ( x: number ): number => x, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander( 'row-major', -1, 10, 10, x, 1, out, '10' ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, out, true ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, out, false ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, out, null ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, out, undefined ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, out, [] ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, out, {} ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander(); // $ExpectError
	dvander( 'row-major' ); // $ExpectError
	dvander( 'row-major', -1 ); // $ExpectError
	dvander( 'row-major', -1, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1 ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, out ); // $ExpectError
	dvander( 'row-major', -1, 10, 10, x, 1, out, 10, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander.ndarray( '10', 10, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( true, 10, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( false, 10, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( null, 10, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( undefined, 10, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( [], 10, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( {}, 10, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( ( x: number ): number => x, 10, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander.ndarray( -1, '10', 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, true, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, false, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, null, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, undefined, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, [], 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, {}, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, ( x: number ): number => x, 10, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander.ndarray( -1, 10, '10', x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, true, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, false, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, null, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, undefined, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, [], x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, {}, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, ( x: number ): number => x, x, 1, 0, out, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Float64Array...
{
	const out = new Float64Array( 100 );

	dvander.ndarray( -1, 10, 10, 10, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, '10', 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, true, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, false, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, null, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, undefined, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, [ '1' ], 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, {}, 1, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, ( x: number ): number => x, 1, 0, out, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander.ndarray( -1, 10, 10, x, '10', 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, true, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, false, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, null, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, undefined, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, [], 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, {}, 0, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, ( x: number ): number => x, 0, out, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander.ndarray( -1, 10, 10, x, 1, '10', out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, true, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, false, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, null, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, undefined, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, [], out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, {}, out, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, ( x: number ): number => x, out, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dvander.ndarray( -1, 10, 10, x, 1, 0, 10, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, '10', 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, true, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, false, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, null, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, undefined, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, [ '1' ], 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, {}, 10, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, ( x: number ): number => x, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander.ndarray( -1, 10, 10, x, 1, 0, out, '10', 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, true, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, false, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, null, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, undefined, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, [], 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, {}, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, '10', 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, true, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, false, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, null, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, undefined, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, [], 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, {}, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, 1, '10' ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, 1, true ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, 1, false ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, 1, null ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, 1, undefined ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, 1, [] ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, 1, {} ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 100 );

	dvander.ndarray(); // $ExpectError
	dvander.ndarray( -1 ); // $ExpectError
	dvander.ndarray( -1, 10 ); // $ExpectError
	dvander.ndarray( -1, 10, 10 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, 1 ); // $ExpectError
	dvander.ndarray( -1, 10, 10, x, 1, 0, out, 10, 1, 0, 10 ); // $ExpectError
}
