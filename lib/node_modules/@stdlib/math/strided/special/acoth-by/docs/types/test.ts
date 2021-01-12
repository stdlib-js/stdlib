/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import acothBy = require( './index' );

/**
* Accessor callback.
*
* @returns accessed value
*/
function accessor(): number {
	return 0.0;
}


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy( x.length, x, 1, y, 1, accessor ); // $ExpectType Collection
	acothBy( x.length, x, 1, y, 1, accessor, {} ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy( '10', x, 1, y, 1, accessor ); // $ExpectError
	acothBy( true, x, 1, y, 1, accessor ); // $ExpectError
	acothBy( false, x, 1, y, 1, accessor ); // $ExpectError
	acothBy( null, x, 1, y, 1, accessor ); // $ExpectError
	acothBy( undefined, x, 1, y, 1, accessor ); // $ExpectError
	acothBy( [], x, 1, y, 1, accessor ); // $ExpectError
	acothBy( {}, x, 1, y, 1, accessor ); // $ExpectError
	acothBy( ( x: number ): number => x, x, 1, y, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy( x.length, 10, 1, y, 1, accessor ); // $ExpectError
	acothBy( x.length, true, 1, y, 1, accessor ); // $ExpectError
	acothBy( x.length, false, 1, y, 1, accessor ); // $ExpectError
	acothBy( x.length, null, 1, y, 1, accessor ); // $ExpectError
	acothBy( x.length, undefined, 1, y, 1, accessor ); // $ExpectError
	acothBy( x.length, {}, 1, y, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy( x.length, x, '10', y, 1, accessor ); // $ExpectError
	acothBy( x.length, x, true, y, 1, accessor ); // $ExpectError
	acothBy( x.length, x, false, y, 1, accessor ); // $ExpectError
	acothBy( x.length, x, null, y, 1, accessor ); // $ExpectError
	acothBy( x.length, x, undefined, y, 1, accessor ); // $ExpectError
	acothBy( x.length, x, [], y, 1, accessor ); // $ExpectError
	acothBy( x.length, x, {}, y, 1, accessor ); // $ExpectError
	acothBy( x.length, x, ( x: number ): number => x, y, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	acothBy( x.length, x, 1, 10, 1, accessor ); // $ExpectError
	acothBy( x.length, x, 1, true, 1, accessor ); // $ExpectError
	acothBy( x.length, x, 1, false, 1, accessor ); // $ExpectError
	acothBy( x.length, x, 1, null, 1, accessor ); // $ExpectError
	acothBy( x.length, x, 1, undefined, 1, accessor ); // $ExpectError
	acothBy( x.length, x, 1, {}, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy( x.length, x, 1, y, '10', accessor ); // $ExpectError
	acothBy( x.length, x, 1, y, true, accessor ); // $ExpectError
	acothBy( x.length, x, 1, y, false, accessor ); // $ExpectError
	acothBy( x.length, x, 1, y, null, accessor ); // $ExpectError
	acothBy( x.length, x, 1, y, undefined, accessor ); // $ExpectError
	acothBy( x.length, x, 1, y, [], accessor ); // $ExpectError
	acothBy( x.length, x, 1, y, {}, accessor ); // $ExpectError
	acothBy( x.length, x, 1, y, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy( x.length, x, 1, y, 1, '10' ); // $ExpectError
	acothBy( x.length, x, 1, y, 1, 0 ); // $ExpectError
	acothBy( x.length, x, 1, y, 1, true ); // $ExpectError
	acothBy( x.length, x, 1, y, 1, false ); // $ExpectError
	acothBy( x.length, x, 1, y, 1, null ); // $ExpectError
	acothBy( x.length, x, 1, y, 1, undefined ); // $ExpectError
	acothBy( x.length, x, 1, y, 1, [] ); // $ExpectError
	acothBy( x.length, x, 1, y, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy(); // $ExpectError
	acothBy( x.length ); // $ExpectError
	acothBy( x.length, x ); // $ExpectError
	acothBy( x.length, x, 1 ); // $ExpectError
	acothBy( x.length, x, 1, y ); // $ExpectError
	acothBy( x.length, x, 1, y, 1 ); // $ExpectError
	acothBy( x.length, x, 1, y, 1, accessor, 10, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor ); // $ExpectType Collection
	acothBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor, {} ); // $ExpectType Collection
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy.ndarray( '10', x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( true, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( false, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( null, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( undefined, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( [], x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( {}, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy.ndarray( x.length, 10, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, true, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, false, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, null, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, undefined, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, {}, 1, 0, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy.ndarray( x.length, x, '10', 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, true, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, false, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, null, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, undefined, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, [], 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, {}, 0, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy.ndarray( x.length, x, 1, '10', y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, true, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, false, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, null, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, undefined, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, [], y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, {}, y, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	acothBy.ndarray( x.length, x, 1, 0, 10, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, true, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, false, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, null, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, undefined, 1, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, {}, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy.ndarray( x.length, x, 1, 0, y, '10', 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, true, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, false, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, null, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, undefined, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, [], 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, {}, 0, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy.ndarray( x.length, x, 1, 0, y, 1, '10', accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, true, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, false, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, null, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, undefined, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, [], accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, {}, accessor ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy.ndarray( x.length, x, 1, 0, y, 1, 0, '10' ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, 0, 0 ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, 0, true ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, 0, false ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, 0, null ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, 0, undefined ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, 0, [] ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acothBy.ndarray(); // $ExpectError
	acothBy.ndarray( x.length ); // $ExpectError
	acothBy.ndarray( x.length, x ); // $ExpectError
	acothBy.ndarray( x.length, x, 1 ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	acothBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor, 10, 10 ); // $ExpectError
}
