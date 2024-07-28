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

import dlassq = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq( 4, X, 1, 1.0, 0.0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq( '5', X, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( true, X, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( false, X, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( null, X, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( void 0, X, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( [], X, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( {}, X, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( ( x: number ): number => x, X, 1, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	dlassq( 4, '5', 1, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, 5, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, true, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, false, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, null, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, void 0, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, [], 1, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, {}, 1, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, ( x: number ): number => x, 1, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq( 4, X, '5', 1.0, 0.0 ); // $ExpectError
	dlassq( 4, X, true, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, X, false, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, X, null, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, X, void 0, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, X, [], 1.0, 0.0 ); // $ExpectError
	dlassq( 4, X, {}, 1.0, 0.0 ); // $ExpectError
	dlassq( 4, X, ( x: number ): number => x, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq( 4, X, 1, '5', 0.0 ); // $ExpectError
	dlassq( 4, X, 1, true, 0.0 ); // $ExpectError
	dlassq( 4, X, 1, false, 0.0 ); // $ExpectError
	dlassq( 4, X, 1, null, 0.0 ); // $ExpectError
	dlassq( 4, X, 1, void 0, 0.0 ); // $ExpectError
	dlassq( 4, X, 1, [], 0.0 ); // $ExpectError
	dlassq( 4, X, 1, {}, 0.0 ); // $ExpectError
	dlassq( 4, X, 1, ( x: number ): number => x, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq( 4, X, 1, 1.0, '5' ); // $ExpectError
	dlassq( 4, X, 1, 1.0, true ); // $ExpectError
	dlassq( 4, X, 1, 1.0, false ); // $ExpectError
	dlassq( 4, X, 1, 1.0, null ); // $ExpectError
	dlassq( 4, X, 1, 1.0, void 0 ); // $ExpectError
	dlassq( 4, X, 1, 1.0, [] ); // $ExpectError
	dlassq( 4, X, 1, 1.0, {} ); // $ExpectError
	dlassq( 4, X, 1, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq(); // $ExpectError
	dlassq( 4 ); // $ExpectError
	dlassq( 4, X ); // $ExpectError
	dlassq( 4, X, 1 ); // $ExpectError
	dlassq( 4, X, 1, 1.0 ); // $ExpectError
	dlassq( 4, X, 1, 1.0, 0.0, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const out = new Float64Array( [ 0.0, 0.0 ] );
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const out = new Float64Array( [ 0.0, 0.0 ] );
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq.ndarray( '5', X, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( true, X, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( false, X, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( null, X, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( void 0, X, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( [], X, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( {}, X, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( ( x: number ): number => x, X, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const out = new Float64Array( [ 0.0, 0.0 ] );

	dlassq.ndarray( 4, '5', 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, 5, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, true, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, false, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, null, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, void 0, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, [], 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, {}, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, ( x: number ): number => x, 1, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const out = new Float64Array( [ 0.0, 0.0 ] );
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq.ndarray( 4, X, '5', 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, true, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, false, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, null, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, void 0, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, [], 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, {}, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, ( x: number ): number => x, 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const out = new Float64Array( [ 0.0, 0.0 ] );
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq.ndarray( 4, X, 1, '5', 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, true, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, false, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, null, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, void 0, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, [], 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, {}, 1.0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, ( x: number ): number => x, 1.0, 0.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const out = new Float64Array( [ 0.0, 0.0 ] );
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq.ndarray( 4, X, 1, 0, '5', 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, true, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, false, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, null, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, void 0, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, [], 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, {}, 0.0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, ( x: number ): number => x, 0.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const out = new Float64Array( [ 0.0, 0.0 ] );
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq.ndarray( 4, X, 1, 0, 1.0, '5', out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, true, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, false, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, null, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, void 0, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, [], out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, {}, out, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, '5', 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, 5, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, true, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, false, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, null, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, void 0, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, [], 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, {}, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const out = new Float64Array( [ 0.0, 0.0 ] );
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, '5', 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, true, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, false, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, null, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, void 0, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, [], 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, {}, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const out = new Float64Array( [ 0.0, 0.0 ] );
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, '5' ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, true ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, false ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, null ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, void 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, [] ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, {} ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const out = new Float64Array( [ 0.0, 0.0 ] );
	const X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlassq.ndarray(); // $ExpectError
	dlassq.ndarray( 4 ); // $ExpectError
	dlassq.ndarray( 4, X ); // $ExpectError
	dlassq.ndarray( 4, X, 1 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1 ); // $ExpectError
	dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, 0, 10 ); // $ExpectError
}
