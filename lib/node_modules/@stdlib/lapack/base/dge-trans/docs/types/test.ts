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

import dgetrans = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans( 'row-major', 2, 2, A, 2, out, 2 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans( 5, 2, 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( true, 2, 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( false, 2, 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( null, 2, 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( void 0, 2, 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( [], 2, 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( {}, 2, 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( ( x: number ): number => x, 2, 2, A, 2, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans( 'row-major', '5', 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', true, 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', false, 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', null, 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', void 0, 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', [], 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', {}, 2, A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', ( x: number ): number => x, 2, A, 2, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans( 'row-major', 2, '5', A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, true, A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, false, A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, null, A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, void 0, A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, [], A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, {}, A, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, ( x: number ): number => x, A, 2, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans( 'row-major', 2, 2, '5', 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, 5, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, true, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, false, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, null, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, void 0, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, [], 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, {}, 2, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, ( x: number ): number => x, 2, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans( 'row-major', 2, 2, A, '5', out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, true, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, false, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, null, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, void 0, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, [], out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, {}, out, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, ( x: number ): number => x, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float64Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dgetrans( 'row-major', 2, 2, A, 2, '5', 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, 5, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, true, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, false, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, null, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, void 0, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, [], 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, {}, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans( 'row-major', 2, 2, A, 2, out, '5' ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, out, true ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, out, false ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, out, null ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, out, void 0 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, out, [] ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, out, {} ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans(); // $ExpectError
	dgetrans( 'row-major' ); // $ExpectError
	dgetrans( 'row-major', 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2 ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, out ); // $ExpectError
	dgetrans( 'row-major', 2, 2, A, 2, out, 2, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans.ndarray( '5', 2, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( true, 2, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( false, 2, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( null, 2, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( void 0, 2, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( [], 2, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( {}, 2, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( ( x: number ): number => x, 2, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans.ndarray( 2, '5', A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, true, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, false, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, null, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, void 0, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, [], A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, {}, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, ( x: number ): number => x, A, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans.ndarray( 2, 2, '5', 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, 5, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, true, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, false, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, null, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, void 0, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, [], 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, {}, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, ( x: number ): number => x, 2, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans.ndarray( 2, 2, A, '5', 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, true, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, false, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, null, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, void 0, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, [], 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, {}, 1, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, ( x: number ): number => x, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans.ndarray( 2, 2, A, 2, '5', 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, true, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, false, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, null, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, void 0, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, [], 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, {}, 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, ( x: number ): number => x, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans.ndarray( 2, 2, A, 2, 1, '5', out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, true, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, false, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, null, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, void 0, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, [], out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, {}, out, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, ( x: number ): number => x, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dgetrans.ndarray( 2, 2, A, 2, 1, 0, '5', 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, 5, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, true, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, false, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, null, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, void 0, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, [], 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, {}, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, ( x: number ): number => x, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, '5', 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, true, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, false, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, null, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, void 0, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, [], 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, {}, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, '5', 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, true, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, false, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, null, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, void 0, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, [], 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, {}, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, 1, '5' ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, 1, true ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, 1, false ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, 1, null ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, 1, void 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, 1, [] ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, 1, {} ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	dgetrans.ndarray(); // $ExpectError
	dgetrans.ndarray( 2 ); // $ExpectError
	dgetrans.ndarray( 2, 2 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, 1 ); // $ExpectError
	dgetrans.ndarray( 2, 2, A, 2, 1, 0, out, 2, 1, 0, 10 ); // $ExpectError
}
