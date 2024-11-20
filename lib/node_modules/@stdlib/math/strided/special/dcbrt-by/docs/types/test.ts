/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import dcbrtBy = require( './index' );

/**
* Accessor callback.
*
* @returns accessed value
*/
function accessor(): number {
	return 0.0;
}


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy( x.length, x, 1, y, 1, accessor ); // $ExpectType Float64Array
	dcbrtBy( x.length, x, 1, y, 1, accessor, {} ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy( '10', x, 1, y, 1, accessor ); // $ExpectError
	dcbrtBy( true, x, 1, y, 1, accessor ); // $ExpectError
	dcbrtBy( false, x, 1, y, 1, accessor ); // $ExpectError
	dcbrtBy( null, x, 1, y, 1, accessor ); // $ExpectError
	dcbrtBy( undefined, x, 1, y, 1, accessor ); // $ExpectError
	dcbrtBy( [], x, 1, y, 1, accessor ); // $ExpectError
	dcbrtBy( {}, x, 1, y, 1, accessor ); // $ExpectError
	dcbrtBy( ( x: number ): number => x, x, 1, y, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy( x.length, 10, 1, y, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, true, 1, y, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, false, 1, y, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, null, 1, y, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, undefined, 1, y, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, {}, 1, y, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy( x.length, x, '10', y, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, x, true, y, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, x, false, y, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, x, null, y, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, x, undefined, y, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, x, [], y, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, x, {}, y, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, x, ( x: number ): number => x, y, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dcbrtBy( x.length, x, 1, 10, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, x, 1, true, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, x, 1, false, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, x, 1, null, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, x, 1, undefined, 1, accessor ); // $ExpectError
	dcbrtBy( x.length, x, 1, {}, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy( x.length, x, 1, y, '10', accessor ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, true, accessor ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, false, accessor ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, null, accessor ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, undefined, accessor ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, [], accessor ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, {}, accessor ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy( x.length, x, 1, y, 1, '10' ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, 1, 0 ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, 1, true ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, 1, false ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, 1, null ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, 1, undefined ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, 1, [] ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy(); // $ExpectError
	dcbrtBy( x.length ); // $ExpectError
	dcbrtBy( x.length, x ); // $ExpectError
	dcbrtBy( x.length, x, 1 ); // $ExpectError
	dcbrtBy( x.length, x, 1, y ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, 1 ); // $ExpectError
	dcbrtBy( x.length, x, 1, y, 1, accessor, 10, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor ); // $ExpectType Float64Array
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor, {} ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy.ndarray( '10', x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( true, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( false, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( null, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( undefined, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( [], x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( {}, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy.ndarray( x.length, 10, 1, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, true, 1, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, false, 1, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, null, 1, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, undefined, 1, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, {}, 1, 0, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy.ndarray( x.length, x, '10', 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, true, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, false, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, null, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, undefined, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, [], 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, {}, 0, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy.ndarray( x.length, x, 1, '10', y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, true, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, false, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, null, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, undefined, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, [], y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, {}, y, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dcbrtBy.ndarray( x.length, x, 1, 0, 10, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, true, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, false, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, null, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, undefined, 1, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, {}, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy.ndarray( x.length, x, 1, 0, y, '10', 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, true, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, false, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, null, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, undefined, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, [], 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, {}, 0, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, '10', accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, true, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, false, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, null, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, undefined, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, [], accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, {}, accessor ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, '10' ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, 0 ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, true ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, false ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, null ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, undefined ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, [] ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcbrtBy.ndarray(); // $ExpectError
	dcbrtBy.ndarray( x.length ); // $ExpectError
	dcbrtBy.ndarray( x.length, x ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1 ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	dcbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor, 10, 10 ); // $ExpectError
}
