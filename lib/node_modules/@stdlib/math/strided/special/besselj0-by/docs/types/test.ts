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

import besselj0By = require( './index' );

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

	besselj0By( x.length, x, 1, y, 1, accessor ); // $ExpectType Collection
	besselj0By( x.length, x, 1, y, 1, accessor, {} ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By( '10', x, 1, y, 1, accessor ); // $ExpectError
	besselj0By( true, x, 1, y, 1, accessor ); // $ExpectError
	besselj0By( false, x, 1, y, 1, accessor ); // $ExpectError
	besselj0By( null, x, 1, y, 1, accessor ); // $ExpectError
	besselj0By( undefined, x, 1, y, 1, accessor ); // $ExpectError
	besselj0By( [], x, 1, y, 1, accessor ); // $ExpectError
	besselj0By( {}, x, 1, y, 1, accessor ); // $ExpectError
	besselj0By( ( x: number ): number => x, x, 1, y, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By( x.length, 10, 1, y, 1, accessor ); // $ExpectError
	besselj0By( x.length, true, 1, y, 1, accessor ); // $ExpectError
	besselj0By( x.length, false, 1, y, 1, accessor ); // $ExpectError
	besselj0By( x.length, null, 1, y, 1, accessor ); // $ExpectError
	besselj0By( x.length, undefined, 1, y, 1, accessor ); // $ExpectError
	besselj0By( x.length, {}, 1, y, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By( x.length, x, '10', y, 1, accessor ); // $ExpectError
	besselj0By( x.length, x, true, y, 1, accessor ); // $ExpectError
	besselj0By( x.length, x, false, y, 1, accessor ); // $ExpectError
	besselj0By( x.length, x, null, y, 1, accessor ); // $ExpectError
	besselj0By( x.length, x, undefined, y, 1, accessor ); // $ExpectError
	besselj0By( x.length, x, [], y, 1, accessor ); // $ExpectError
	besselj0By( x.length, x, {}, y, 1, accessor ); // $ExpectError
	besselj0By( x.length, x, ( x: number ): number => x, y, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	besselj0By( x.length, x, 1, 10, 1, accessor ); // $ExpectError
	besselj0By( x.length, x, 1, true, 1, accessor ); // $ExpectError
	besselj0By( x.length, x, 1, false, 1, accessor ); // $ExpectError
	besselj0By( x.length, x, 1, null, 1, accessor ); // $ExpectError
	besselj0By( x.length, x, 1, undefined, 1, accessor ); // $ExpectError
	besselj0By( x.length, x, 1, {}, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By( x.length, x, 1, y, '10', accessor ); // $ExpectError
	besselj0By( x.length, x, 1, y, true, accessor ); // $ExpectError
	besselj0By( x.length, x, 1, y, false, accessor ); // $ExpectError
	besselj0By( x.length, x, 1, y, null, accessor ); // $ExpectError
	besselj0By( x.length, x, 1, y, undefined, accessor ); // $ExpectError
	besselj0By( x.length, x, 1, y, [], accessor ); // $ExpectError
	besselj0By( x.length, x, 1, y, {}, accessor ); // $ExpectError
	besselj0By( x.length, x, 1, y, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By( x.length, x, 1, y, 1, '10' ); // $ExpectError
	besselj0By( x.length, x, 1, y, 1, 0 ); // $ExpectError
	besselj0By( x.length, x, 1, y, 1, true ); // $ExpectError
	besselj0By( x.length, x, 1, y, 1, false ); // $ExpectError
	besselj0By( x.length, x, 1, y, 1, null ); // $ExpectError
	besselj0By( x.length, x, 1, y, 1, undefined ); // $ExpectError
	besselj0By( x.length, x, 1, y, 1, [] ); // $ExpectError
	besselj0By( x.length, x, 1, y, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By(); // $ExpectError
	besselj0By( x.length ); // $ExpectError
	besselj0By( x.length, x ); // $ExpectError
	besselj0By( x.length, x, 1 ); // $ExpectError
	besselj0By( x.length, x, 1, y ); // $ExpectError
	besselj0By( x.length, x, 1, y, 1 ); // $ExpectError
	besselj0By( x.length, x, 1, y, 1, accessor, 10, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, accessor ); // $ExpectType Collection
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, accessor, {} ); // $ExpectType Collection
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By.ndarray( '10', x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( true, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( false, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( null, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( undefined, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( [], x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( {}, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By.ndarray( x.length, 10, 1, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, true, 1, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, false, 1, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, null, 1, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, undefined, 1, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, {}, 1, 0, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By.ndarray( x.length, x, '10', 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, true, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, false, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, null, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, undefined, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, [], 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, {}, 0, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By.ndarray( x.length, x, 1, '10', y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, true, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, false, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, null, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, undefined, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, [], y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, {}, y, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	besselj0By.ndarray( x.length, x, 1, 0, 10, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, true, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, false, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, null, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, undefined, 1, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, {}, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By.ndarray( x.length, x, 1, 0, y, '10', 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, true, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, false, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, null, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, undefined, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, [], 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, {}, 0, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By.ndarray( x.length, x, 1, 0, y, 1, '10', accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, true, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, false, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, null, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, undefined, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, [], accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, {}, accessor ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, '10' ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, 0 ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, true ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, false ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, null ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, undefined ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, [] ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	besselj0By.ndarray(); // $ExpectError
	besselj0By.ndarray( x.length ); // $ExpectError
	besselj0By.ndarray( x.length, x ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1 ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0 ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, accessor, 10, 10 ); // $ExpectError
}
