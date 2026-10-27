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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import midrangeBy = require( './index' );

const accessor = (): number => {
	return 5.0;
};


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	midrangeBy( x.length, x, 1, accessor ); // $ExpectType number
	midrangeBy( x.length, new AccessorArray ( x ), 1, accessor ); // $ExpectType number

	midrangeBy( x.length, x, 1, accessor, {} ); // $ExpectType number
	midrangeBy( x.length, new AccessorArray ( x ), 1, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	midrangeBy( '10', x, 1, accessor ); // $ExpectError
	midrangeBy( true, x, 1, accessor ); // $ExpectError
	midrangeBy( false, x, 1, accessor ); // $ExpectError
	midrangeBy( null, x, 1, accessor ); // $ExpectError
	midrangeBy( undefined, x, 1, accessor ); // $ExpectError
	midrangeBy( [], x, 1, accessor ); // $ExpectError
	midrangeBy( {}, x, 1, accessor ); // $ExpectError
	midrangeBy( ( x: number ): number => x, x, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	midrangeBy( x.length, 10, 1, accessor ); // $ExpectError
	midrangeBy( x.length, true, 1, accessor ); // $ExpectError
	midrangeBy( x.length, false, 1, accessor ); // $ExpectError
	midrangeBy( x.length, null, 1, accessor ); // $ExpectError
	midrangeBy( x.length, undefined, 1, accessor ); // $ExpectError
	midrangeBy( x.length, {}, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	midrangeBy( x.length, x, '10', accessor ); // $ExpectError
	midrangeBy( x.length, x, true, accessor ); // $ExpectError
	midrangeBy( x.length, x, false, accessor ); // $ExpectError
	midrangeBy( x.length, x, null, accessor ); // $ExpectError
	midrangeBy( x.length, x, undefined, accessor ); // $ExpectError
	midrangeBy( x.length, x, [], accessor ); // $ExpectError
	midrangeBy( x.length, x, {}, accessor ); // $ExpectError
	midrangeBy( x.length, x, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = new Float64Array( 10 );

	midrangeBy( x.length, x, 1, '10' ); // $ExpectError
	midrangeBy( x.length, x, 1, true ); // $ExpectError
	midrangeBy( x.length, x, 1, false ); // $ExpectError
	midrangeBy( x.length, x, 1, null ); // $ExpectError
	midrangeBy( x.length, x, 1, undefined ); // $ExpectError
	midrangeBy( x.length, x, 1, [] ); // $ExpectError
	midrangeBy( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	midrangeBy(); // $ExpectError
	midrangeBy( x.length ); // $ExpectError
	midrangeBy( x.length, x ); // $ExpectError
	midrangeBy( x.length, x, 1 ); // $ExpectError
	midrangeBy( x.length, x, 1, accessor, {}, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	midrangeBy.ndarray( x.length, x, 1, 0, accessor ); // $ExpectType number
	midrangeBy.ndarray( x.length, new AccessorArray ( x ), 1, 0, accessor ); // $ExpectType number

	midrangeBy.ndarray( x.length, x, 1, 0, accessor, {} ); // $ExpectType number
	midrangeBy.ndarray( x.length, new AccessorArray ( x ), 1, 0, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	midrangeBy.ndarray( '10', x, 1, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( true, x, 1, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( false, x, 1, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( null, x, 1, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( undefined, x, 1, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( [], x, 1, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( {}, x, 1, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( ( x: number ): number => x, x, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	midrangeBy.ndarray( x.length, 10, 1, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, true, 1, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, false, 1, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, null, 1, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, undefined, 1, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, {}, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	midrangeBy.ndarray( x.length, x, '10', 0, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, true, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, false, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, null, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, undefined, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, [], 0, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, {}, 0, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, ( x: number ): number => x, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	midrangeBy.ndarray( x.length, x, 1, '10', accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, true, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, false, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, null, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, undefined, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, [], accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, {}, accessor ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a function...
{
	const x = new Float64Array( 10 );

	midrangeBy.ndarray( x.length, x, 1, 0, '10' ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, 0, true ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, 0, false ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, 0, null ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, 0, undefined ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, 0, [] ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	midrangeBy.ndarray(); // $ExpectError
	midrangeBy.ndarray( x.length ); // $ExpectError
	midrangeBy.ndarray( x.length, x ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1 ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	midrangeBy.ndarray( x.length, x, 1, 0, accessor, {}, 10 ); // $ExpectError
}
