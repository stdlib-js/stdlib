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

import dger = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger( 10, 10, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( true, 10, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( false, 10, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( null, 10, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( undefined, 10, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( [], 10, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( {}, 10, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( ( x: number ): number => x, 10, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger( 'row-major', '10', 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', true, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', false, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', null, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', undefined, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', [], 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', {}, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', ( x: number ): number => x, 10, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger( 'row-major', 10, '10', 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, true, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, false, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, null, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, undefined, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, [], 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, {}, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, ( x: number ): number => x, 1.0, x, 1, y, 1, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger( 'row-major', 10, 10, '10', x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, true, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, false, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, null, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, undefined, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, [], x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, {}, x, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, ( x: number ): number => x, x, 1, y, 1, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger( 'row-major', 10, 10, 1.0, 10, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, '10', 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, true, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, false, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, null, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, undefined, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, [ '1' ], 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, {}, 1, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, ( x: number ): number => x, 1, y, 1, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger( 'row-major', 10, 10, 1.0, x, '10', y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, true, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, false, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, null, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, undefined, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, [], y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, {}, y, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, ( x: number ): number => x, y, 1, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger( 'row-major', 10, 10, 1.0, x, 1, 10, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, '10', 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, true, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, false, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, null, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, undefined, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, [ '1' ], 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, {}, 1, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, ( x: number ): number => x, 1, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger( 'row-major', 10, 10, 1.0, x, 1, y, '10', A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, true, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, false, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, null, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, undefined, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, [], A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, {}, A, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, ( x: number ): number => x, A, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, 10, 1 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, '10', 1 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, true, 1 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, false, 1 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, null, 1 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, undefined, 1 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, [ '1' ], 1 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, {}, 1 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, A, '10' ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, A, true ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, A, false ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, A, null ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, A, undefined ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, A, [] ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, A, {} ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, A, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger(); // $ExpectError
	dger( 'row-major' ); // $ExpectError
	dger( 'row-major', 10 ); // $ExpectError
	dger( 'row-major', 10, 10 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1 ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, A ); // $ExpectError
	dger( 'row-major', 10, 10, 1.0, x, 1, y, 1, A, 10, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( '10', 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( true, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( false, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( null, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( undefined, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( [], 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( {}, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( ( x: number ): number => x, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( 10, '10', 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, true, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, false, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, null, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, undefined, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, [], 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, {}, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, ( x: number ): number => x, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( 10, 10, '10', x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, true, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, false, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, null, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, undefined, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, [], x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, {}, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, ( x: number ): number => x, x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( 10, 10, 1.0, 10, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, '10', 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, true, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, false, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, null, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, undefined, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, [ '1' ], 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, {}, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, ( x: number ): number => x, 1, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( 10, 10, 1.0, x, '10', 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, true, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, false, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, null, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, undefined, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, [], 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, {}, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, ( x: number ): number => x, 0, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( 10, 10, 1.0, x, 1, '10', y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, true, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, false, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, null, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, undefined, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, [], y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, {}, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, ( x: number ): number => x, y, 1, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( 10, 10, 1.0, x, 1, 0, 10, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, '10', 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, true, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, false, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, null, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, undefined, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, [ '1' ], 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, {}, 1, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, ( x: number ): number => x, 1, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, '10', 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, true, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, false, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, null, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, undefined, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, [], 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, {}, 0, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, ( x: number ): number => x, 0, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, '10', A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, true, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, false, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, null, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, undefined, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, [], A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, {}, A, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, ( x: number ): number => x, A, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, 10, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, '10', 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, true, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, false, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, null, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, undefined, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, [ '1' ], 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, {}, 10, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, ( x: number ): number => x, 10, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, '10', 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, true, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, false, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, null, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, undefined, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, [], 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, {}, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, '10', 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, true, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, false, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, null, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, undefined, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, [], 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, {}, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a thirteenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, '10' ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, true ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, false ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, null ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, undefined ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, [] ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, {} ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dger.ndarray(); // $ExpectError
	dger.ndarray( 10 ); // $ExpectError
	dger.ndarray( 10, 10 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1 ); // $ExpectError
	dger.ndarray( 10, 10, 1.0, x, 1, 0, y, 1, 0, A, 10, 1, 0, 10 ); // $ExpectError
}
