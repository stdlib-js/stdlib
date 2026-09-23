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

import dlarf1f = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a valid layout...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f( 5, 'left', 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( true, 'left', 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( false, 'left', 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( null, 'left', 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( void 0, 'left', 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( [], 'left', 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( {}, 'left', 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( ( x: number ): number => x, 'left', 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid operation side...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f( 'row-major', 5, 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', true, 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', false, 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', null, 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', void 0, 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', [], 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', {}, 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', ( x: number ): number => x, 4, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f( 'row-major', 'left', '5', 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', true, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', false, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', null, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', void 0, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', [], 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', {}, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', ( x: number ): number => x, 3, V, 1, 1.0, C, 3, work ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f( 'row-major', 'left', 4, '5', V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, true, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, false, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, null, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, void 0, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, [], V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, {}, V, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, ( x: number ): number => x, V, 1, 1.0, C, 3, work ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const C = new Float64Array( 12 );
	const work = new Float64Array( 3 );
	dlarf1f( 'row-major', 'left', 4, 3, '5', 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, 5, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, true, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, false, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, null, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, void 0, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, [], 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, {}, 1, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, ( x: number ): number => x, 1, 1.0, C, 3, work ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f( 'row-major', 'left', 4, 3, V, '5', 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, true, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, false, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, null, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, void 0, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, [], 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, {}, 1.0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, ( x: number ): number => x, 1.0, C, 3, work ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, '5', C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, true, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, false, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, null, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, void 0, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, [], C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, {}, C, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, ( x: number ): number => x, C, 3, work ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a Float64Array...
{
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, '5', 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, 5, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, true, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, false, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, null, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, void 0, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, [], 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, {}, 3, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, ( x: number ): number => x, 3, work ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, '5', work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, true, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, false, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, null, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, void 0, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, [], work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, {}, work ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, ( x: number ): number => x, work ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a Float64Array...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, '5' ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, 5 ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, true ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, false ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, null ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, void 0 ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, [] ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, {} ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f(); // $ExpectError
	dlarf1f( 'row-major' ); // $ExpectError
	dlarf1f( 'row-major', 'left' ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4 ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3 ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1 ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0 ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3 ); // $ExpectError
	dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, work, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a valid operation side...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 5, 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( true, 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( false, 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( null, 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( void 0, 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( [], 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( {}, 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( ( x: number ): number => x, 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', '5', 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', true, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', false, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', null, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', void 0, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', [], 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', {}, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', ( x: number ): number => x, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', 4, '5', V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, true, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, false, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, null, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, void 0, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, [], V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, {}, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, ( x: number ): number => x, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Float64Array...
{
	const C = new Float64Array( 12 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', 4, 3, '5', 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, 5, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, true, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, false, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, null, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, void 0, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, [], 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, {}, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, ( x: number ): number => x, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', 4, 3, V, '5', 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, true, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, false, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, null, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, void 0, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, [], 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, {}, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, ( x: number ): number => x, 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', 4, 3, V, 1, '5', 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, true, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, false, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, null, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, void 0, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, [], 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, {}, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, ( x: number ): number => x, 1.0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, '5', C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, true, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, false, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, null, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, void 0, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, [], C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, {}, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, ( x: number ): number => x, C, 3, 1, 0, work, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a Float64Array...
{
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, '5', 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, 5, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, true, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, false, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, null, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, void 0, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, [], 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, {}, 3, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, ( x: number ): number => x, 3, 1, 0, work, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, '5', 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, true, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, false, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, null, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, void 0, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, [], 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, {}, 1, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, ( x: number ): number => x, 1, 0, work, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, '5', 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, true, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, false, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, null, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, void 0, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, [], 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, {}, 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, ( x: number ): number => x, 0, work, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, '5', work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, true, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, false, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, null, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, void 0, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, [], work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, {}, work, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, ( x: number ): number => x, work, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelfth argument which is not a Float64Array...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, '5', 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, 5, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, true, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, false, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, null, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, void 0, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, [], 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, {}, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a thirteenth argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, '5', 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, true, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, false, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, null, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, void 0, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, [], 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, {}, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourteenth argument which is not a number...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, '5' ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, true ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, false ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, null ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, void 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, [] ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, {} ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const C = new Float64Array( 12 );
	const V = new Float64Array( 4 );
	const work = new Float64Array( 3 );
	dlarf1f.ndarray(); // $ExpectError
	dlarf1f.ndarray( 'left' ); // $ExpectError
	dlarf1f.ndarray( 'left', 4 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1 ); // $ExpectError
	dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0, 10 ); // $ExpectError
}
