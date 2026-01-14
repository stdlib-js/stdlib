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

import dgemm = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 10, 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( true, 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( false, 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( null, 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( undefined, 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( [], 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( {}, 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( ( A: number ): number => A, 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 10, 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', true, 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', false, 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', null, 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', undefined, 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', [ '1' ], 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', {}, 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', ( A: number ): number => A, 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a string...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 10, 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', true, 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', false, 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', null, 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', undefined, 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', [ '1' ], 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', {}, 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', ( A: number ): number => A, 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 'no-transpose', '10', 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', true, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', false, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', null, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', undefined, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', [], 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', {}, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', ( A: number ): number => A, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, '10', 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, true, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, false, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, null, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, undefined, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, [], 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, {}, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, ( A: number ): number => A, 5, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, '10', 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, true, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, false, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, null, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, undefined, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, [], 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, {}, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, ( A: number ): number => A, 1.0, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, '10', A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, true, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, false, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, null, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, undefined, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, [], A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, {}, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, ( A: number ): number => A, A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a Float64Array...
{
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, 10, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, '10', 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, true, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, false, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, null, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, undefined, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, [ '1' ], 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, {}, 5, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, ( A: number ): number => A, 5, B, 5, 1.0, C, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, '10', B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, true, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, false, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, null, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, undefined, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, [], B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, {}, B, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, ( A: number ): number => A, B, 5, 1.0, C, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a Float64Array...
{
	const A = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 10, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, '10', 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, true, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, false, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, null, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, undefined, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, [ '1' ], 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, {}, 5, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, ( A: number ): number => A, 5, 1.0, C, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, '10', 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, true, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, false, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, null, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, undefined, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, [], 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, {}, 1.0, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, ( A: number ): number => A, 1.0, C, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, '10', C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, true, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, false, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, null, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, undefined, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, [], C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, {}, C, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, ( A: number ): number => A, C, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a thirteenth argument which is not a Float64Array...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, 10, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, '10', 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, true, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, false, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, null, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, undefined, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, [ '1' ], 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, {}, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, ( A: number ): number => A, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourteenth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, '10' ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, true ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, false ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, null ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, undefined ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, [] ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, {} ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, ( A: number ): number => A ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm(); // $ExpectError
	dgemm( 'row-major' ); // $ExpectError
	dgemm( 'row-major', 'no-transpose' ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose' ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0 ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C ); // $ExpectError
	dgemm( 'row-major', 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, B, 5, 1.0, C, 5, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 10, 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( true, 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( false, 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( null, 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( undefined, 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( [ '1' ], 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( {}, 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( ( A: number ): number => A, 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 10, 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', true, 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', false, 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', null, 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', undefined, 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', [ '1' ], 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', {}, 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', ( A: number ): number => A, 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', '10', 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', true, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', false, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', null, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', undefined, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', [], 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', {}, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', ( A: number ): number => A, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, '10', 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, true, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, false, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, null, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, undefined, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, [], 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, {}, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, ( A: number ): number => A, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, '10', 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, true, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, false, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, null, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, undefined, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, [], 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, {}, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, ( A: number ): number => A, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, '10', A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, true, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, false, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, null, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, undefined, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, [], A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, {}, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, ( A: number ): number => A, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, 10, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, '10', 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, true, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, false, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, null, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, undefined, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, [ '1' ], 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, {}, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, ( A: number ): number => A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, '10', 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, true, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, false, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, null, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, undefined, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, [], 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, {}, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, ( A: number ): number => A, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, '10', 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, true, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, false, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, null, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, undefined, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, [], 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, {}, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, ( A: number ): number => A, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, '10', B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, true, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, false, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, null, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, undefined, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, [], B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, {}, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, ( A: number ): number => A, B, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a Float64Array...
{
	const A = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, 10, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, '10', 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, true, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, false, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, null, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, undefined, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, [ '1' ], 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, {}, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, ( A: number ): number => A, 5, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, '10', 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, true, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, false, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, null, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, undefined, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, [], 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, {}, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, ( A: number ): number => A, 1, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a thirteenth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, '10', 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, true, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, false, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, null, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, undefined, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, [], 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, {}, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, ( A: number ): number => A, 0, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourteenth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, '10', 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, true, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, false, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, null, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, undefined, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, [], 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, {}, 1.0, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, ( A: number ): number => A, 1.0, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifteenth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, '10', C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, true, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, false, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, null, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, undefined, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, [], C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, {}, C, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, ( A: number ): number => A, C, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixteenth argument which is not a Float64Array...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, 10, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, '10', 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, true, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, false, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, null, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, undefined, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, [ '1' ], 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, {}, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, ( A: number ): number => A, 5, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventeenth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, '10', 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, true, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, false, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, null, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, undefined, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, [], 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, {}, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, ( A: number ): number => A, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighteenth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, '10', 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, true, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, false, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, null, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, undefined, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, [], 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, {}, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, ( A: number ): number => A, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a nineteenth argument which is not a number...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, '10' ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, true ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, false ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, null ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, undefined ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, [] ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, {} ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, ( A: number ): number => A ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const A = new Float64Array( 25 );
	const B = new Float64Array( 25 );
	const C = new Float64Array( 25 );

	dgemm.ndarray(); // $ExpectError
	dgemm.ndarray( 'no-transpose' ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose' ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1 ); // $ExpectError
	dgemm.ndarray( 'no-transpose', 'no-transpose', 5, 5, 5, 1.0, A, 5, 1, 0, B, 5, 1, 0, 1.0, C, 5, 1, 0, 10 ); // $ExpectError
}
