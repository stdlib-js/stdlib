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

import dcartesianPower = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower( 'row-major', x.length, 2, x, 1, out, 2 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a valid order...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower( 10, x.length, 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( true, x.length, 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( false, x.length, 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( null, x.length, 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( undefined, x.length, 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( [], x.length, 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( {}, x.length, 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( ( x: number ): number => x, x.length, 2, x, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower( 'row-major', '10', 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', true, 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', false, 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', null, 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', undefined, 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', [], 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', {}, 2, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', ( x: number ): number => x, 2, x, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower( 'row-major', x.length, '10', x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, true, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, false, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, null, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, undefined, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, [], x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, {}, x, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, ( x: number ): number => x, x, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const out = new Float64Array( 8 );

	dcartesianPower( 'row-major', 2, 2, 10, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', 2, 2, '10', 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', 2, 2, true, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', 2, 2, false, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', 2, 2, null, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', 2, 2, undefined, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', 2, 2, [], 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', 2, 2, {}, 1, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', 2, 2, ( x: number ): number => x, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower( 'row-major', x.length, 2, x, '10', out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, true, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, false, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, null, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, undefined, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, [], out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, {}, out, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, ( x: number ): number => x, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 2 );

	dcartesianPower( 'row-major', x.length, 2, x, 1, 10, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, '10', 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, true, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, false, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, null, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, undefined, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, [], 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, {}, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower( 'row-major', x.length, 2, x, 1, out, '10' ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, out, true ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, out, false ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, out, null ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, out, undefined ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, out, [] ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, out, {} ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower(); // $ExpectError
	dcartesianPower( 'row-major' ); // $ExpectError
	dcartesianPower( 'row-major', x.length ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1 ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, out ); // $ExpectError
	dcartesianPower( 'row-major', x.length, 2, x, 1, out, 2, 10 ); // $ExpectError
}

// The `ndarray` method returns a Float64Array...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower.ndarray( '10', 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( true, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( false, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( null, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( undefined, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( [], 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( {}, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( ( x: number ): number => x, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower.ndarray( x.length, '10', x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, true, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, false, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, null, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, undefined, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, [], x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, {}, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, ( x: number ): number => x, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const out = new Float64Array( 8 );

	dcartesianPower.ndarray( 2, 2, 10, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( 2, 2, '10', 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( 2, 2, true, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( 2, 2, false, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( 2, 2, null, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( 2, 2, undefined, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( 2, 2, [], 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( 2, 2, {}, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( 2, 2, ( x: number ): number => x, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower.ndarray( x.length, 2, x, '10', 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, true, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, false, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, null, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, undefined, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, [], 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, {}, 0, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, ( x: number ): number => x, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower.ndarray( x.length, 2, x, 1, '10', out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, true, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, false, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, null, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, undefined, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, [], out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, {}, out, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, ( x: number ): number => x, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 2 );

	dcartesianPower.ndarray( x.length, 2, x, 1, 0, 10, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, '10', 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, true, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, false, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, null, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, undefined, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, [], 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, {}, 2, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, ( x: number ): number => x, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, '10', 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, true, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, false, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, null, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, undefined, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, [], 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, {}, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, '10', 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, true, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, false, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, null, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, undefined, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, [], 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, {}, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, '10' ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, true ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, false ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, null ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, undefined ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, [] ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, {} ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	dcartesianPower.ndarray(); // $ExpectError
	dcartesianPower.ndarray( x.length ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1 ); // $ExpectError
	dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, 0, 10 ); // $ExpectError
}
