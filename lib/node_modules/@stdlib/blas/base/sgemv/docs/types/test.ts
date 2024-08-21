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

import sgemv = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1  ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv( 10, 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( true, 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( false, 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( null, 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( undefined, 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( [], 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( {}, 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( ( x: number ): number => x, 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv( 'row-major', 10, 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', true, 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', false, 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', null, 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', undefined, 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', [ '1' ], 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', {}, 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', ( x: number ): number => x, 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv( 'row-major', 'no-transpose', '10', 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', true, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', false, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', null, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', undefined, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', [], 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', {}, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', ( x: number ): number => x, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv( 'row-major', 'no-transpose', 10, '10', 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, true, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, false, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, null, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, undefined, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, [], 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, {}, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, ( x: number ): number => x, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv( 'row-major', 'no-transpose', 10, 10, '10', A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, true, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, false, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, null, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, undefined, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, [], A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, {}, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, ( x: number ): number => x, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, 10, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, '10', 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, true, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, false, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, null, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, undefined, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, [ '1' ], 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, {}, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, ( x: number ): number => x, 10, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, '10', x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, true, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, false, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, null, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, undefined, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, [], x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, {}, x, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, ( x: number ): number => x, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a Float32Array...
{
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, 10, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, '10', 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, true, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, false, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, null, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, undefined, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, [ '1' ], 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, {}, 1, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, ( x: number ): number => x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, '10', 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, true, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, false, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, null, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, undefined, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, [], 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, {}, 1.0, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, ( x: number ): number => x, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, '10', y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, true, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, false, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, null, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, undefined, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, [], y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, {}, y, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, 10, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, '10', 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, true, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, false, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, null, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, undefined, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, [ '1' ], 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, {}, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, '10' ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, true ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, false ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, null ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, undefined ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, [] ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, {} ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv(); // $ExpectError
	sgemv( 'row-major' ); // $ExpectError
	sgemv( 'row-major', 'no-transpose' ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0 ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y ); // $ExpectError
	sgemv( 'row-major', 'no-transpose', 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 10, 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( true, 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( false, 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( null, 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( undefined, 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( [ '1' ], 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( {}, 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( ( x: number ): number => x, 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', '10', 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', true, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', false, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', null, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', undefined, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', [], 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', {}, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', ( x: number ): number => x, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, '10', 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, true, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, false, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, null, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, undefined, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, [], 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, {}, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, ( x: number ): number => x, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, 10, '10', A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, true, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, false, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, null, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, undefined, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, [], A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, {}, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, ( x: number ): number => x, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, 10, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, '10', 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, true, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, false, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, null, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, undefined, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, [ '1' ], 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, {}, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, ( x: number ): number => x, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, '10', 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, true, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, false, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, null, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, undefined, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, [], 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, {}, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, ( x: number ): number => x, 1, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, '10', 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, true, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, false, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, null, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, undefined, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, [], 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, {}, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, ( x: number ): number => x, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, '10', x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, true, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, false, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, null, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, undefined, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, [], x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, {}, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, ( x: number ): number => x, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a Float32Array...
{
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, 10, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, '10', 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, true, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, false, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, null, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, undefined, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, [ '1' ], 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, {}, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, ( x: number ): number => x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, '10', 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, true, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, false, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, null, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, undefined, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, [], 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, {}, 0, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, ( x: number ): number => x, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, '10', 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, true, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, false, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, null, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, undefined, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, [], 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, {}, 1.0, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, ( x: number ): number => x, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, '10', y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, true, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, false, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, null, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, undefined, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, [], y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, {}, y, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a thirteenth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, 10, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, '10', 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, true, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, false, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, null, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, undefined, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, [ '1' ], 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, {}, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourteenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, '10', 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, true, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, false, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, null, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, undefined, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, [], 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, {}, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifteenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, '10' ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, true ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, false ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, null ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, undefined ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, [] ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, {} ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 20 );

	sgemv.ndarray(); // $ExpectError
	sgemv.ndarray( 'no-transpose' ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1 ); // $ExpectError
	sgemv.ndarray( 'no-transpose', 10, 10, 1.0, A, 10, 1, 0, x, 1, 0, 1.0, y, 1, 0, 10 ); // $ExpectError
}
