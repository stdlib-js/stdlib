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
import nanmidrangeBy = require( './index' );

const accessor = (): number => {
	return 5.0;
};


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy( x.length, x, 1, accessor ); // $ExpectType number
	nanmidrangeBy( x.length, new AccessorArray ( x ), 1, accessor ); // $ExpectType number

	nanmidrangeBy( x.length, x, 1, accessor, {} ); // $ExpectType number
	nanmidrangeBy( x.length, new AccessorArray ( x ), 1, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy( '10', x, 1, accessor ); // $ExpectError
	nanmidrangeBy( true, x, 1, accessor ); // $ExpectError
	nanmidrangeBy( false, x, 1, accessor ); // $ExpectError
	nanmidrangeBy( null, x, 1, accessor ); // $ExpectError
	nanmidrangeBy( undefined, x, 1, accessor ); // $ExpectError
	nanmidrangeBy( [], x, 1, accessor ); // $ExpectError
	nanmidrangeBy( {}, x, 1, accessor ); // $ExpectError
	nanmidrangeBy( ( x: number ): number => x, x, 1, accessor ); // $ExpectError

	nanmidrangeBy( '10', x, 1, accessor, {} ); // $ExpectError
	nanmidrangeBy( true, x, 1, accessor, {} ); // $ExpectError
	nanmidrangeBy( false, x, 1, accessor, {} ); // $ExpectError
	nanmidrangeBy( null, x, 1, accessor, {} ); // $ExpectError
	nanmidrangeBy( undefined, x, 1, accessor, {} ); // $ExpectError
	nanmidrangeBy( [], x, 1, accessor, {} ); // $ExpectError
	nanmidrangeBy( {}, x, 1, accessor, {} ); // $ExpectError
	nanmidrangeBy( ( x: number ): number => x, x, 1, accessor, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy( x.length, 10, 1, accessor ); // $ExpectError
	nanmidrangeBy( x.length, true, 1, accessor ); // $ExpectError
	nanmidrangeBy( x.length, false, 1, accessor ); // $ExpectError
	nanmidrangeBy( x.length, null, 1, accessor ); // $ExpectError
	nanmidrangeBy( x.length, undefined, 1, accessor ); // $ExpectError
	nanmidrangeBy( x.length, {}, 1, accessor ); // $ExpectError

	nanmidrangeBy( x.length, 10, 1, accessor, {} ); // $ExpectError
	nanmidrangeBy( x.length, true, 1, accessor, {} ); // $ExpectError
	nanmidrangeBy( x.length, false, 1, accessor, {} ); // $ExpectError
	nanmidrangeBy( x.length, null, 1, accessor, {} ); // $ExpectError
	nanmidrangeBy( x.length, undefined, 1, accessor, {} ); // $ExpectError
	nanmidrangeBy( x.length, {}, 1, accessor, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy( x.length, x, '10', accessor ); // $ExpectError
	nanmidrangeBy( x.length, x, true, accessor ); // $ExpectError
	nanmidrangeBy( x.length, x, false, accessor ); // $ExpectError
	nanmidrangeBy( x.length, x, null, accessor ); // $ExpectError
	nanmidrangeBy( x.length, x, undefined, accessor ); // $ExpectError
	nanmidrangeBy( x.length, x, [], accessor ); // $ExpectError
	nanmidrangeBy( x.length, x, {}, accessor ); // $ExpectError
	nanmidrangeBy( x.length, x, ( x: number ): number => x, accessor ); // $ExpectError

	nanmidrangeBy( x.length, x, '10', accessor, {} ); // $ExpectError
	nanmidrangeBy( x.length, x, true, accessor, {} ); // $ExpectError
	nanmidrangeBy( x.length, x, false, accessor, {} ); // $ExpectError
	nanmidrangeBy( x.length, x, null, accessor, {} ); // $ExpectError
	nanmidrangeBy( x.length, x, undefined, accessor, {} ); // $ExpectError
	nanmidrangeBy( x.length, x, [], accessor, {} ); // $ExpectError
	nanmidrangeBy( x.length, x, {}, accessor, {} ); // $ExpectError
	nanmidrangeBy( x.length, x, ( x: number ): number => x, accessor, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy( x.length, x, 1, '10' ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, true ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, false ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, null ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, undefined ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, [] ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, {} ); // $ExpectError

	nanmidrangeBy( x.length, x, 1, '10', {} ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, true, {} ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, false, {} ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, null, {} ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, undefined, {} ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, [], {} ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy(); // $ExpectError
	nanmidrangeBy( x.length ); // $ExpectError
	nanmidrangeBy( x.length, x ); // $ExpectError
	nanmidrangeBy( x.length, x, 1 ); // $ExpectError
	nanmidrangeBy( x.length, x, 1, accessor, {}, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy.ndarray( x.length, x, 1, 0, accessor ); // $ExpectType number
	nanmidrangeBy.ndarray( x.length, new AccessorArray ( x ), 1, 0, accessor ); // $ExpectType number

	nanmidrangeBy.ndarray( x.length, x, 1, 0, accessor, {} ); // $ExpectType number
	nanmidrangeBy.ndarray( x.length, new AccessorArray ( x ), 1, 0, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy.ndarray( '10', x, 1, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( true, x, 1, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( false, x, 1, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( null, x, 1, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( undefined, x, 1, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( [], x, 1, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( {}, x, 1, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( ( x: number ): number => x, x, 1, 0, accessor ); // $ExpectError

	nanmidrangeBy.ndarray( '10', x, 1, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( true, x, 1, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( false, x, 1, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( null, x, 1, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( undefined, x, 1, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( [], x, 1, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( {}, x, 1, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( ( x: number ): number => x, x, 1, 0, accessor, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy.ndarray( x.length, 10, 1, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, true, 1, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, false, 1, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, null, 1, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, undefined, 1, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, {}, 1, 0, accessor ); // $ExpectError

	nanmidrangeBy.ndarray( x.length, 10, 1, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, true, 1, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, false, 1, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, null, 1, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, undefined, 1, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, {}, 1, 0, accessor, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy.ndarray( x.length, x, '10', 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, true, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, false, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, null, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, undefined, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, [], 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, {}, 0, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, ( x: number ): number => x, 0, accessor ); // $ExpectError

	nanmidrangeBy.ndarray( x.length, x, '10', 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, true, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, false, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, null, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, undefined, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, [], 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, {}, 0, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, ( x: number ): number => x, 0, accessor, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy.ndarray( x.length, x, 1, '10', accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, true, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, false, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, null, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, undefined, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, [], accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, {}, accessor ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, ( x: number ): number => x, accessor ); // $ExpectError

	nanmidrangeBy.ndarray( x.length, x, 1, '10', accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, true, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, false, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, null, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, undefined, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, [], accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, {}, accessor, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, ( x: number ): number => x, accessor, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a function...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy.ndarray( x.length, x, 1, 0, '10' ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, true ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, false ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, null ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, undefined ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, [] ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, {} ); // $ExpectError

	nanmidrangeBy.ndarray( x.length, x, 1, 0, '10', {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, true, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, false, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, null, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, undefined, {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, [], {} ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, {}, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanmidrangeBy.ndarray(); // $ExpectError
	nanmidrangeBy.ndarray( x.length ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1 ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	nanmidrangeBy.ndarray( x.length, x, 1, 0, accessor, {}, 10 ); // $ExpectError
}
