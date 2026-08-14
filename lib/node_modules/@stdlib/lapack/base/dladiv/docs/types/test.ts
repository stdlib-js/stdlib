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

import dladiv = require( './index' );


// TESTS //

// The function returns void...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv( -13.0, -1.0, -2.0, 1.0, P, Q ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv( '5', -1.0, -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( true, -1.0, -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( false, -1.0, -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( null, -1.0, -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( void 0, -1.0, -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( [], -1.0, -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( {}, -1.0, -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( ( x: number ): number => x, -1.0, -2.0, 1.0, P, Q ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv( -13.0, '5', -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, true, -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, false, -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, null, -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, void 0, -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, [], -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, {}, -2.0, 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, ( x: number ): number => x, -2.0, 1.0, P, Q ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv( -13.0, -1.0, '5', 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, true, 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, false, 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, null, 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, void 0, 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, [], 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, {}, 1.0, P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, ( x: number ): number => x, 1.0, P, Q ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv( -13.0, -1.0, -2.0, '5', P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, true, P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, false, P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, null, P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, void 0, P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, [], P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, {}, P, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, ( x: number ): number => x, P, Q ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const Q = new Float64Array( 1 );

	dladiv( -13.0, -1.0, -2.0, 1.0, '5', Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, 5, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, true, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, false, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, null, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, void 0, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, [], Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, {}, Q ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, ( x: number ): number => x, Q ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float64Array...
{
	const P = new Float64Array( 1 );

	dladiv( -13.0, -1.0, -2.0, 1.0, P, '5' ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, P, 5 ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, P, true ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, P, false ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, P, null ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, P, void 0 ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, P, [] ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, P, {} ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, P, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv(); // $ExpectError
	dladiv( -13.0 ); // $ExpectError
	dladiv( -13.0, -1.0 ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0 ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0 ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, P ); // $ExpectError
	dladiv( -13.0, -1.0, -2.0, 1.0, P, Q, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns void...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv.ndarray( '5', -1.0, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( true, -1.0, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( false, -1.0, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( null, -1.0, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( void 0, -1.0, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( [], -1.0, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( {}, -1.0, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( ( x: number ): number => x, -1.0, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv.ndarray( -13.0, '5', -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, true, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, false, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, null, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, void 0, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, [], -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, {}, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, ( x: number ): number => x, -2.0, 1.0, P, 0, Q, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv.ndarray( -13.0, -1.0, '5', 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, true, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, false, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, null, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, void 0, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, [], 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, {}, 1.0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, ( x: number ): number => x, 1.0, P, 0, Q, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv.ndarray( -13.0, -1.0, -2.0, '5', P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, true, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, false, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, null, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, void 0, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, [], P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, {}, P, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, ( x: number ): number => x, P, 0, Q, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const Q = new Float64Array( 1 );

	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, '5', 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, 5, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, true, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, false, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, null, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, void 0, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, [], 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, {}, 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, ( x: number ): number => x, 0, Q, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, '5', Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, true, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, false, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, null, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, void 0, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, [], Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, {}, Q, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, ( x: number ): number => x, Q, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const P = new Float64Array( 1 );

	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, '5', 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, 5, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, true, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, false, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, null, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, void 0, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, [], 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, {}, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, '5' ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, true ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, false ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, null ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, void 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, [] ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, {} ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const P = new Float64Array( 1 );
	const Q = new Float64Array( 1 );

	dladiv.ndarray(); // $ExpectError
	dladiv.ndarray( -13.0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0 ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q ); // $ExpectError
	dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, 0, 10 ); // $ExpectError
}
