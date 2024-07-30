/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import ssyr = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, A, 10 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr( 10, 'upper', 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( true, 'upper', 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( false, 'upper', 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( null, 'upper', 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( undefined, 'upper', 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( [], 'upper', 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( {}, 'upper', 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( ( x: number ): number => x, 'upper', 10, 1.0, x, 1, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr( 'row-major', 10, 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', true, 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', false, 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', null, 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', undefined, 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', [ '1' ], 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', {}, 10, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', ( x: number ): number => x, 10, 1.0, x, 1, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr( 'row-major', 'upper', '10', 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', true, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', false, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', null, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', undefined, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', [], 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', {}, 1.0, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', ( x: number ): number => x, 1.0, x, 1, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr( 'row-major', 'upper', 10, '10', x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, true, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, false, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, null, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, undefined, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, [], x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, {}, x, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, ( x: number ): number => x, x, 1, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float32Array...
{
	const A = new Float32Array( 20 );

	ssyr( 'row-major', 'upper', 10, 1.0, 10, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, '10', 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, true, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, false, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, null, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, undefined, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, [ '1' ], 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, {}, 1, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, ( x: number ): number => x, 1, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr( 'row-major', 'upper', 10, 1.0, x, '10', A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, true, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, false, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, null, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, undefined, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, [], A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, {}, A, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, ( x: number ): number => x, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, 10, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, '10', 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, true, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, false, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, null, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, undefined, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, [ '1' ], 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, {}, 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, ( x: number ): number => x, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, A, '10' ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, A, true ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, A, false ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, A, null ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, A, undefined ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, A, [] ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, A, {} ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, A, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr(); // $ExpectError
	ssyr( 'row-major' ); // $ExpectError
	ssyr( 'row-major', 'upper' ); // $ExpectError
	ssyr( 'row-major', 'upper', 10 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1 ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, A ); // $ExpectError
	ssyr( 'row-major', 'upper', 10, 1.0, x, 1, A, 10, 1 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr.ndarray( 10, 10, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( true, 10, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( false, 10, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( null, 10, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( undefined, 10, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( [ '1' ], 10, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( {}, 10, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( ( x: number ): number => x, 10, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr.ndarray( 'upper', '10', 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', true, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', false, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', null, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', undefined, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', [], 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', {}, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', ( x: number ): number => x, 1.0, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr.ndarray( 'upper', 10, '10', x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, true, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, false, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, null, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, undefined, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, [], x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, {}, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, ( x: number ): number => x, x, 1, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float32Array...
{
	const A = new Float32Array( 20 );

	ssyr.ndarray( 'upper', 10, 1.0, 10, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, '10', 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, true, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, false, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, null, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, undefined, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, [ '1' ], 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, {}, 1, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, ( x: number ): number => x, 1, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr.ndarray( 'upper', 10, 1.0, x, '10', 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, true, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, false, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, null, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, undefined, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, [], 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, {}, 0, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, ( x: number ): number => x, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr.ndarray( 'upper', 10, 1.0, x, 1, '10', A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, true, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, false, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, null, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, undefined, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, [], A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, {}, A, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, ( x: number ): number => x, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, 10, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, '10', 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, true, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, false, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, null, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, undefined, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, [ '1' ], 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, {}, 10, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, ( x: number ): number => x, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, '10', 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, true, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, false, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, null, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, undefined, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, [], 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, {}, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, '10', 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, true, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, false, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, null, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, undefined, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, [], 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, {}, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, 1, '10' ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, 1, true ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, 1, false ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, 1, null ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, 1, undefined ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, 1, [] ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, 1, {} ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	ssyr.ndarray(); // $ExpectError
	ssyr.ndarray( 'upper' ); // $ExpectError
	ssyr.ndarray( 'upper', 10 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, 1 ); // $ExpectError
	ssyr.ndarray( 'upper', 10, 1.0, x, 1, 0, A, 10, 1, 0, 10 ); // $ExpectError
}
