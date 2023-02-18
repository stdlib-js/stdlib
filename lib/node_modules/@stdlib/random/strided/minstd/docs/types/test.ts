/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import random = require( './index' );


// TESTS //

// The function returns a collection...
{
	const out = new Float64Array( 10 );

	random( out.length, out, 1 ); // $ExpectType Collection
	random( out.length, out, 1, {} ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const out = new Float64Array( 10 );

	random( '10', out, 1 ); // $ExpectError
	random( true, out, 1 ); // $ExpectError
	random( false, out, 1 ); // $ExpectError
	random( null, out, 1 ); // $ExpectError
	random( undefined, out, 1 ); // $ExpectError
	random( [], out, 1 ); // $ExpectError
	random( {}, out, 1 ); // $ExpectError
	random( ( x: number ): number => x, out, 1 ); // $ExpectError

	random( '10', out, 1, {} ); // $ExpectError
	random( true, out, 1, {} ); // $ExpectError
	random( false, out, 1, {} ); // $ExpectError
	random( null, out, 1, {} ); // $ExpectError
	random( undefined, out, 1, {} ); // $ExpectError
	random( [], out, 1, {} ); // $ExpectError
	random( {}, out, 1, {} ); // $ExpectError
	random( ( x: number ): number => x, out, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	random( 10, 10, 1 ); // $ExpectError
	random( 10, true, 1 ); // $ExpectError
	random( 10, false, 1 ); // $ExpectError
	random( 10, null, 1 ); // $ExpectError
	random( 10, undefined, 1 ); // $ExpectError
	random( 10, {}, 1 ); // $ExpectError

	random( 10, 10, 1, {} ); // $ExpectError
	random( 10, true, 1, {} ); // $ExpectError
	random( 10, false, 1, {} ); // $ExpectError
	random( 10, null, 1, {} ); // $ExpectError
	random( 10, undefined, 1, {} ); // $ExpectError
	random( 10, {}, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const out = new Float64Array( 10 );

	random( out.length, out, '10' ); // $ExpectError
	random( out.length, out, true ); // $ExpectError
	random( out.length, out, false ); // $ExpectError
	random( out.length, out, null ); // $ExpectError
	random( out.length, out, undefined ); // $ExpectError
	random( out.length, out, [] ); // $ExpectError
	random( out.length, out, {} ); // $ExpectError
	random( out.length, out, ( x: number ): number => x ); // $ExpectError

	random( out.length, out, '10', {} ); // $ExpectError
	random( out.length, out, true, {} ); // $ExpectError
	random( out.length, out, false, {} ); // $ExpectError
	random( out.length, out, null, {} ); // $ExpectError
	random( out.length, out, undefined, {} ); // $ExpectError
	random( out.length, out, [], {} ); // $ExpectError
	random( out.length, out, {}, {} ); // $ExpectError
	random( out.length, out, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid option...
{
	const out = new Float64Array( 10 );

	random( out.length, out, 1, { 'copy': '10' } ); // $ExpectError
	random( out.length, out, 1, { 'copy': null } ); // $ExpectError
	random( out.length, out, 1, { 'copy': [] } ); // $ExpectError
	random( out.length, out, 1, { 'copy': {} } ); // $ExpectError
	random( out.length, out, 1, { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const out = new Float64Array( 10 );

	random(); // $ExpectError
	random( out.length ); // $ExpectError
	random( out.length, out ); // $ExpectError
	random( out.length, out, 1, out ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const out = new Float64Array( 10 );

	random.ndarray( out.length, out, 1, 0 ); // $ExpectType Collection
	random.ndarray( out.length, out, 1, 0, {} ); // $ExpectType Collection
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const out = new Float64Array( 10 );

	random.ndarray( '10', out, 1, 0 ); // $ExpectError
	random.ndarray( true, out, 1, 0 ); // $ExpectError
	random.ndarray( false, out, 1, 0 ); // $ExpectError
	random.ndarray( null, out, 1, 0 ); // $ExpectError
	random.ndarray( undefined, out, 1, 0 ); // $ExpectError
	random.ndarray( [], out, 1, 0 ); // $ExpectError
	random.ndarray( {}, out, 1, 0 ); // $ExpectError
	random.ndarray( ( x: number ): number => x, out, 1, 0 ); // $ExpectError

	random.ndarray( '10', out, 1, 0, {} ); // $ExpectError
	random.ndarray( true, out, 1, 0, {} ); // $ExpectError
	random.ndarray( false, out, 1, 0, {} ); // $ExpectError
	random.ndarray( null, out, 1, 0, {} ); // $ExpectError
	random.ndarray( undefined, out, 1, 0, {} ); // $ExpectError
	random.ndarray( [], out, 1, 0, {} ); // $ExpectError
	random.ndarray( {}, out, 1, 0, {} ); // $ExpectError
	random.ndarray( ( x: number ): number => x, out, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	random.ndarray( 10, 10, 1, 0 ); // $ExpectError
	random.ndarray( 10, true, 1, 0 ); // $ExpectError
	random.ndarray( 10, false, 1, 0 ); // $ExpectError
	random.ndarray( 10, null, 1, 0 ); // $ExpectError
	random.ndarray( 10, undefined, 1, 0 ); // $ExpectError
	random.ndarray( 10, {}, 1, 0 ); // $ExpectError

	random.ndarray( 10, 10, 1, 0, {} ); // $ExpectError
	random.ndarray( 10, true, 1, 0, {} ); // $ExpectError
	random.ndarray( 10, false, 1, 0, {} ); // $ExpectError
	random.ndarray( 10, null, 1, 0, {} ); // $ExpectError
	random.ndarray( 10, undefined, 1, 0, {} ); // $ExpectError
	random.ndarray( 10, {}, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const out = new Float64Array( 10 );

	random.ndarray( out.length, out, '10', 0 ); // $ExpectError
	random.ndarray( out.length, out, true, 0 ); // $ExpectError
	random.ndarray( out.length, out, false, 0 ); // $ExpectError
	random.ndarray( out.length, out, null, 0 ); // $ExpectError
	random.ndarray( out.length, out, undefined, 0 ); // $ExpectError
	random.ndarray( out.length, out, [], 0 ); // $ExpectError
	random.ndarray( out.length, out, {}, 0 ); // $ExpectError
	random.ndarray( out.length, out, ( x: number ): number => x, 0 ); // $ExpectError

	random.ndarray( out.length, out, '10', 0, {} ); // $ExpectError
	random.ndarray( out.length, out, true, 0, {} ); // $ExpectError
	random.ndarray( out.length, out, false, 0, {} ); // $ExpectError
	random.ndarray( out.length, out, null, 0, {} ); // $ExpectError
	random.ndarray( out.length, out, undefined, 0, {} ); // $ExpectError
	random.ndarray( out.length, out, [], 0, {} ); // $ExpectError
	random.ndarray( out.length, out, {}, 0, {} ); // $ExpectError
	random.ndarray( out.length, out, ( x: number ): number => x, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const out = new Float64Array( 10 );

	random.ndarray( out.length, out, 1, '10' ); // $ExpectError
	random.ndarray( out.length, out, 1, true ); // $ExpectError
	random.ndarray( out.length, out, 1, false ); // $ExpectError
	random.ndarray( out.length, out, 1, null ); // $ExpectError
	random.ndarray( out.length, out, 1, undefined ); // $ExpectError
	random.ndarray( out.length, out, 1, [] ); // $ExpectError
	random.ndarray( out.length, out, 1, {} ); // $ExpectError
	random.ndarray( out.length, out, 1, ( x: number ): number => x ); // $ExpectError

	random.ndarray( out.length, out, 1, '10', {} ); // $ExpectError
	random.ndarray( out.length, out, 1, true, {} ); // $ExpectError
	random.ndarray( out.length, out, 1, false, {} ); // $ExpectError
	random.ndarray( out.length, out, 1, null, {} ); // $ExpectError
	random.ndarray( out.length, out, 1, undefined, {} ); // $ExpectError
	random.ndarray( out.length, out, 1, [], {} ); // $ExpectError
	random.ndarray( out.length, out, 1, {}, {} ); // $ExpectError
	random.ndarray( out.length, out, 1, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an invalid option...
{
	const out = new Float64Array( 10 );

	random.ndarray( out.length, out, 1, 0, { 'copy': '10' } ); // $ExpectError
	random.ndarray( out.length, out, 1, 0, { 'copy': null } ); // $ExpectError
	random.ndarray( out.length, out, 1, 0, { 'copy': [] } ); // $ExpectError
	random.ndarray( out.length, out, 1, 0, { 'copy': {} } ); // $ExpectError
	random.ndarray( out.length, out, 1, 0, { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const out = new Float64Array( 10 );

	random.ndarray(); // $ExpectError
	random.ndarray( out.length ); // $ExpectError
	random.ndarray( out.length, out ); // $ExpectError
	random.ndarray( out.length, out, 1 ); // $ExpectError
	random.ndarray( out.length, out, 1, 0, out ); // $ExpectError
}

// Attached to main export is a `normalized` method which returns a collection...
{
	const out = new Float64Array( 10 );

	random.normalized( out.length, out, 1 ); // $ExpectType Collection
	random.normalized( out.length, out, 1, {} ); // $ExpectType Collection
}

// The compiler throws an error if the `normalized` method is provided a first argument which is not a number...
{
	const out = new Float64Array( 10 );

	random.normalized( '10', out, 1 ); // $ExpectError
	random.normalized( true, out, 1 ); // $ExpectError
	random.normalized( false, out, 1 ); // $ExpectError
	random.normalized( null, out, 1 ); // $ExpectError
	random.normalized( undefined, out, 1 ); // $ExpectError
	random.normalized( [], out, 1 ); // $ExpectError
	random.normalized( {}, out, 1 ); // $ExpectError
	random.normalized( ( x: number ): number => x, out, 1 ); // $ExpectError

	random.normalized( '10', out, 1, {} ); // $ExpectError
	random.normalized( true, out, 1, {} ); // $ExpectError
	random.normalized( false, out, 1, {} ); // $ExpectError
	random.normalized( null, out, 1, {} ); // $ExpectError
	random.normalized( undefined, out, 1, {} ); // $ExpectError
	random.normalized( [], out, 1, {} ); // $ExpectError
	random.normalized( {}, out, 1, {} ); // $ExpectError
	random.normalized( ( x: number ): number => x, out, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `normalized` method is provided a second argument which is not a collection...
{
	random.normalized( 10, 10, 1 ); // $ExpectError
	random.normalized( 10, true, 1 ); // $ExpectError
	random.normalized( 10, false, 1 ); // $ExpectError
	random.normalized( 10, null, 1 ); // $ExpectError
	random.normalized( 10, undefined, 1 ); // $ExpectError
	random.normalized( 10, {}, 1 ); // $ExpectError

	random.normalized( 10, 10, 1, {} ); // $ExpectError
	random.normalized( 10, true, 1, {} ); // $ExpectError
	random.normalized( 10, false, 1, {} ); // $ExpectError
	random.normalized( 10, null, 1, {} ); // $ExpectError
	random.normalized( 10, undefined, 1, {} ); // $ExpectError
	random.normalized( 10, {}, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `normalized` method is provided a third argument which is not a number...
{
	const out = new Float64Array( 10 );

	random.normalized( out.length, out, '10' ); // $ExpectError
	random.normalized( out.length, out, true ); // $ExpectError
	random.normalized( out.length, out, false ); // $ExpectError
	random.normalized( out.length, out, null ); // $ExpectError
	random.normalized( out.length, out, undefined ); // $ExpectError
	random.normalized( out.length, out, [] ); // $ExpectError
	random.normalized( out.length, out, {} ); // $ExpectError
	random.normalized( out.length, out, ( x: number ): number => x ); // $ExpectError

	random.normalized( out.length, out, '10', {} ); // $ExpectError
	random.normalized( out.length, out, true, {} ); // $ExpectError
	random.normalized( out.length, out, false, {} ); // $ExpectError
	random.normalized( out.length, out, null, {} ); // $ExpectError
	random.normalized( out.length, out, undefined, {} ); // $ExpectError
	random.normalized( out.length, out, [], {} ); // $ExpectError
	random.normalized( out.length, out, {}, {} ); // $ExpectError
	random.normalized( out.length, out, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `normalized` method is provided an invalid option...
{
	const out = new Float64Array( 10 );

	random.normalized( out.length, out, 1, 0, { 'copy': '10' } ); // $ExpectError
	random.normalized( out.length, out, 1, 0, { 'copy': null } ); // $ExpectError
	random.normalized( out.length, out, 1, 0, { 'copy': [] } ); // $ExpectError
	random.normalized( out.length, out, 1, 0, { 'copy': {} } ); // $ExpectError
	random.normalized( out.length, out, 1, 0, { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `normalized` method is provided an unsupported number of arguments...
{
	const out = new Float64Array( 10 );

	random.normalized(); // $ExpectError
	random.normalized( out.length ); // $ExpectError
	random.normalized( out.length, out ); // $ExpectError
	random.normalized( out.length, out, 1, {}, {} ); // $ExpectError
}

// Attached to the `normalized` method is an `ndarray` method which returns a collection...
{
	const out = new Float64Array( 10 );

	random.normalized.ndarray( out.length, out, 1, 0 ); // $ExpectType Collection
	random.normalized.ndarray( out.length, out, 1, 0, {} ); // $ExpectType Collection
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const out = new Float64Array( 10 );

	random.normalized.ndarray( '10', out, 1, 0 ); // $ExpectError
	random.normalized.ndarray( true, out, 1, 0 ); // $ExpectError
	random.normalized.ndarray( false, out, 1, 0 ); // $ExpectError
	random.normalized.ndarray( null, out, 1, 0 ); // $ExpectError
	random.normalized.ndarray( undefined, out, 1, 0 ); // $ExpectError
	random.normalized.ndarray( [], out, 1, 0 ); // $ExpectError
	random.normalized.ndarray( {}, out, 1, 0 ); // $ExpectError
	random.normalized.ndarray( ( x: number ): number => x, out, 1, 0 ); // $ExpectError

	random.normalized.ndarray( '10', out, 1, 0, {} ); // $ExpectError
	random.normalized.ndarray( true, out, 1, 0, {} ); // $ExpectError
	random.normalized.ndarray( false, out, 1, 0, {} ); // $ExpectError
	random.normalized.ndarray( null, out, 1, 0, {} ); // $ExpectError
	random.normalized.ndarray( undefined, out, 1, 0, {} ); // $ExpectError
	random.normalized.ndarray( [], out, 1, 0, {} ); // $ExpectError
	random.normalized.ndarray( {}, out, 1, 0, {} ); // $ExpectError
	random.normalized.ndarray( ( x: number ): number => x, out, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	random.normalized.ndarray( 10, 10, 1, 0 ); // $ExpectError
	random.normalized.ndarray( 10, true, 1, 0 ); // $ExpectError
	random.normalized.ndarray( 10, false, 1, 0 ); // $ExpectError
	random.normalized.ndarray( 10, null, 1, 0 ); // $ExpectError
	random.normalized.ndarray( 10, undefined, 1, 0 ); // $ExpectError
	random.normalized.ndarray( 10, {}, 1, 0 ); // $ExpectError

	random.normalized.ndarray( 10, 10, 1, 0, {} ); // $ExpectError
	random.normalized.ndarray( 10, true, 1, 0, {} ); // $ExpectError
	random.normalized.ndarray( 10, false, 1, 0, {} ); // $ExpectError
	random.normalized.ndarray( 10, null, 1, 0, {} ); // $ExpectError
	random.normalized.ndarray( 10, undefined, 1, 0, {} ); // $ExpectError
	random.normalized.ndarray( 10, {}, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const out = new Float64Array( 10 );

	random.normalized.ndarray( out.length, out, '10', 0 ); // $ExpectError
	random.normalized.ndarray( out.length, out, true, 0 ); // $ExpectError
	random.normalized.ndarray( out.length, out, false, 0 ); // $ExpectError
	random.normalized.ndarray( out.length, out, null, 0 ); // $ExpectError
	random.normalized.ndarray( out.length, out, undefined, 0 ); // $ExpectError
	random.normalized.ndarray( out.length, out, [], 0 ); // $ExpectError
	random.normalized.ndarray( out.length, out, {}, 0 ); // $ExpectError
	random.normalized.ndarray( out.length, out, ( x: number ): number => x, 0 ); // $ExpectError

	random.normalized.ndarray( out.length, out, '10', 0, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, true, 0, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, false, 0, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, null, 0, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, undefined, 0, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, [], 0, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, {}, 0, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, ( x: number ): number => x, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const out = new Float64Array( 10 );

	random.normalized.ndarray( out.length, out, 1, '10' ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, true ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, false ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, null ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, undefined ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, [] ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, ( x: number ): number => x ); // $ExpectError

	random.normalized.ndarray( out.length, out, 1, '10', {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, true, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, false, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, null, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, undefined, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, [], {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, {}, {} ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an invalid option...
{
	const out = new Float64Array( 10 );

	random.normalized.ndarray( out.length, out, 1, 0, { 'copy': '10' } ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, 0, { 'copy': null } ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, 0, { 'copy': [] } ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, 0, { 'copy': {} } ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, 0, { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const out = new Float64Array( 10 );

	random.normalized.ndarray(); // $ExpectError
	random.normalized.ndarray( out.length ); // $ExpectError
	random.normalized.ndarray( out.length, out ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1 ); // $ExpectError
	random.normalized.ndarray( out.length, out, 1, 0, out ); // $ExpectError
}
