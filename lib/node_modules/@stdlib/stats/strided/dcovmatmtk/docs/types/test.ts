/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import dcovmatmtk = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a valid string...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk( '10', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 10, 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( true, 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( false, 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( null, 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( undefined, 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( [], 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( {}, 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( ( x: number ): number => x, 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid string...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk( 'row-major', '10', 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 10, 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', true, 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', false, 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', null, 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', undefined, 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', [], 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', {}, 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', ( x: number ): number => x, 'full', 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid string...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk( 'row-major', 'rows', 10, 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', true, 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', false, 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', null, 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', undefined, 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', [], 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', {}, 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', ( x: number ): number => x, 3, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk( 'row-major', 'rows', 'full', '10', 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', true, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', false, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', null, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', undefined, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', [], 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', {}, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', ( x: number ): number => x, 3, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk( 'row-major', 'rows', 'full', 3, '10', 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, true, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, false, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, null, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, undefined, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, [], 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, {}, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, ( x: number ): number => x, 1, mu, 1, A, 3, B, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, '10', mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, true, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, false, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, null, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, undefined, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, [], mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, {}, mu, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, ( x: number ): number => x, mu, 1, A, 3, B, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );

	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, '10', 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, true, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, false, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, null, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, undefined, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, [], 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, {}, 1, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, ( x: number ): number => x, 1, A, 3, B, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, '10', A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, true, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, false, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, null, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, undefined, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, [], A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, {}, A, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, ( x: number ): number => x, A, 3, B, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a Float64Array...
{
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, '10', 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, true, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, false, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, null, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, undefined, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, [], 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, {}, 3, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, ( x: number ): number => x, 3, B, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, '10', B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, true, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, false, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, null, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, undefined, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, [], B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, {}, B, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, ( x: number ): number => x, B, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a Float64Array...
{
	const A = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, '10', 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, true, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, false, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, null, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, undefined, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, [], 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, {}, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, '10' ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, true ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, false ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, null ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, undefined ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, [] ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, {} ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk(); // $ExpectError
	dcovmatmtk( 'row-major' ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows' ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full' ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3 ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B ); // $ExpectError
	dcovmatmtk( 'row-major', 'rows', 'full', 3, 3, 1, mu, 1, A, 3, B, 3, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a valid string...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( '10', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 10, 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( true, 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( false, 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( null, 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( undefined, 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( [], 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( {}, 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( ( x: number ): number => x, 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid string...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 10, 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', true, 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', false, 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', null, 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', undefined, 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', [], 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', {}, 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', ( x: number ): number => x, 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', '10', 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', true, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', false, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', null, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', undefined, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', [], 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', {}, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', ( x: number ): number => x, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, '10', 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, true, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, false, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, null, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, undefined, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, [], 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, {}, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, ( x: number ): number => x, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, '10', mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, true, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, false, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, null, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, undefined, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, [], mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, {}, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, ( x: number ): number => x, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float64Array...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, '10', 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, true, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, false, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, null, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, undefined, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, [], 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, {}, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, ( x: number ): number => x, 1, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, '10', 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, true, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, false, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, null, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, undefined, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, [], 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, {}, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, ( x: number ): number => x, 0, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, '10', A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, true, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, false, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, null, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, undefined, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, [], A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, {}, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, ( x: number ): number => x, A, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a Float64Array...
{
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, '10', 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, true, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, false, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, null, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, undefined, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, [], 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, {}, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, ( x: number ): number => x, 3, 1, 0, B, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, '10', 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, true, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, false, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, null, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, undefined, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, [], 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, {}, 1, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, ( x: number ): number => x, 1, 0, B, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, '10', 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, true, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, false, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, null, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, undefined, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, [], 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, {}, 0, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, ( x: number ): number => x, 0, B, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelfth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, '10', B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, true, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, false, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, null, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, undefined, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, [], B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, {}, B, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, ( x: number ): number => x, B, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a thirteenth argument which is not a Float64Array...
{
	const A = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, '10', 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, true, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, false, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, null, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, undefined, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, [], 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, {}, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, ( x: number ): number => x, 3, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourteenth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, '10', 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, true, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, false, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, null, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, undefined, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, [], 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, {}, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifteenth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, '10', 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, true, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, false, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, null, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, undefined, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, [], 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, {}, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixteenth argument which is not a number...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, '10' ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, true ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, false ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, null ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, undefined ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, [] ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, {} ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const A = new Float64Array( 9 );
	const B = new Float64Array( 9 );
	const mu = new Float64Array( 3 );

	dcovmatmtk.ndarray(); // $ExpectError
	dcovmatmtk.ndarray( 'rows' ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full' ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1 ); // $ExpectError
	dcovmatmtk.ndarray( 'rows', 'full', 3, 3, 1, mu, 1, 0, A, 3, 1, 0, B, 3, 1, 0, 0 ); // $ExpectError
}
