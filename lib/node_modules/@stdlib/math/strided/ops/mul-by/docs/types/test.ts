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

import mulBy = require( './index' );

/**
* Accessor callback.
*
* @returns accessed values
*/
function accessor( values: Array<number> ): Array<number> {
	return values;
}


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy( x.length, x, 1, y, 1, z, 1, accessor ); // $ExpectType Collection<number>
	mulBy( x.length, x, 1, y, 1, z, 1, accessor, {} ); // $ExpectType Collection<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy( '10', x, 1, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( true, x, 1, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( false, x, 1, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( null, x, 1, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( undefined, x, 1, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( [], x, 1, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( {}, x, 1, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( ( x: number ): number => x, x, 1, y, 1, z, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy( x.length, 10, 1, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, true, 1, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, false, 1, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, null, 1, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, undefined, 1, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, {}, 1, y, 1, z, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy( x.length, x, '10', y, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, true, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, false, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, null, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, undefined, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, [], y, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, {}, y, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, ( x: number ): number => x, y, 1, z, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy( x.length, x, 1, 10, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, true, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, false, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, null, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, undefined, 1, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, {}, 1, z, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy( x.length, x, 1, y, '10', z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, true, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, false, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, null, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, undefined, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, [], z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, {}, z, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, ( x: number ): number => x, z, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mulBy( x.length, x, 1, y, 1, 10, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, true, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, false, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, null, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, undefined, 1, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, {}, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy( x.length, x, 1, y, 1, z, '10', accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, true, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, false, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, null, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, undefined, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, [], accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, {}, accessor ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy( x.length, x, 1, y, 1, z, 1, '10' ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, 1, 0 ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, 1, true ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, 1, false ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, 1, null ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, 1, undefined ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, 1, [] ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy(); // $ExpectError
	mulBy( x.length ); // $ExpectError
	mulBy( x.length, x ); // $ExpectError
	mulBy( x.length, x, 1 ); // $ExpectError
	mulBy( x.length, x, 1, y ); // $ExpectError
	mulBy( x.length, x, 1, y, 1 ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, 1 ); // $ExpectError
	mulBy( x.length, x, 1, y, 1, z, 1, accessor, 10, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectType Collection<number>
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor, {} ); // $ExpectType Collection<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy.ndarray( '10', x, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( true, x, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( false, x, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( null, x, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( undefined, x, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( [], x, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( {}, x, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy.ndarray( x.length, 10, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, true, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, false, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, null, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, undefined, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, {}, 1, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy.ndarray( x.length, x, '10', 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, true, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, false, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, null, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, undefined, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, [], 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, {}, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy.ndarray( x.length, x, 1, '10', y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, true, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, false, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, null, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, undefined, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, [], y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, {}, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, z, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy.ndarray( x.length, x, 1, 0, 10, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, true, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, false, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, null, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, undefined, 1, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, {}, 1, 0, z, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy.ndarray( x.length, x, 1, 0, y, '10', 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, true, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, false, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, null, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, undefined, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, [], 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, {}, 0, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, z, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy.ndarray( x.length, x, 1, 0, y, 1, '10', z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, true, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, false, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, null, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, undefined, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, [], z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, {}, z, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, z, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, 10, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, true, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, false, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, null, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, undefined, 1, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, {}, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, '10', 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, true, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, false, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, null, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, undefined, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, [], 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, {}, 0, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, ( x: number ): number => x, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, '10', accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, true, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, false, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, null, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, undefined, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, [], accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, {}, accessor ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, '10' ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, 0 ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, true ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, false ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, null ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, undefined ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, [] ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mulBy.ndarray(); // $ExpectError
	mulBy.ndarray( x.length ); // $ExpectError
	mulBy.ndarray( x.length, x ); // $ExpectError
	mulBy.ndarray( x.length, x, 1 ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1 ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0 ); // $ExpectError
	mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor, 10, 10 ); // $ExpectError
}
