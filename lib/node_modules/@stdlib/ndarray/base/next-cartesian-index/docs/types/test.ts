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

import nextCartesianIndex = require( './index' );


// TESTS //

// The function returns an array of numbers (or null)...
{
	nextCartesianIndex( [ 3, 2, 1 ], 'row-major', [ 0, 0, 0 ], -1 ); // $ExpectType number[] | null
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing numbers...
{
	nextCartesianIndex( true, 'row-major', [ 0, 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( false, 'row-major', [ 0, 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( null, 'row-major', [ 0, 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( undefined, 'row-major', [ 0, 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( '5', 'row-major', [ 0, 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( [ '1', '2' ], 'row-major', [ 0, 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( {}, 'row-major', [ 0, 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( ( x: number ): number => x, 'row-major', [ 0, 0, 0 ], -1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a recognized order...
{
	nextCartesianIndex( [ 2, 3 ], true, [ 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], false, [ 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], null, [ 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], undefined, [ 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], '5', [ 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], [ '1', '2' ], [ 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], {}, [ 0, 0 ], -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], ( x: number ): number => x, [ 0, 0 ], -1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array of numbers...
{
	nextCartesianIndex( [ 2, 3 ], 'row-major', true, -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', false, -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', null, -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', undefined, -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', '5', -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', [ '1', '2' ], -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', {}, -1 ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', ( x: number ): number => x, -1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	nextCartesianIndex( [ 2, 3 ], 'row-major', [ 0, 0 ], true ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', [ 0, 0 ], false ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', [ 0, 0 ], null ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', [ 0, 0 ], undefined ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', [ 0, 0 ], '5' ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', [ 0, 0 ], [ '1', '2' ] ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', [ 0, 0 ], {} ); // $ExpectError
	nextCartesianIndex( [ 2, 3 ], 'row-major', [ 0, 0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nextCartesianIndex(); // $ExpectError
	nextCartesianIndex( [ 3, 2 ] ); // $ExpectError
	nextCartesianIndex( [ 3, 2 ], 'row-major' ); // $ExpectError
	nextCartesianIndex( [ 3, 2 ], 'row-major', [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex( [ 3, 2 ], 'row-major', [ 0, 0 ], -1, {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection (or null)...
{
	nextCartesianIndex.assign( [ 3, 2, 1 ], 'row-major', [ 0, 0, 0 ], -1, [ 0, 0, 0 ] ); // $ExpectType Collection<number> | null
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object containing numbers...
{
	nextCartesianIndex.assign( true, 'row-major', [ 0, 0, 0 ], -1, [ 0, 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( false, 'row-major', [ 0, 0, 0 ], -1, [ 0, 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( null, 'row-major', [ 0, 0, 0 ], -1, [ 0, 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( undefined, 'row-major', [ 0, 0, 0 ], -1, [ 0, 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( '5', 'row-major', [ 0, 0, 0 ], -1, [ 0, 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ '1', '2' ], 'row-major', [ 0, 0, 0 ], -1, [ 0, 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( {}, 'row-major', [ 0, 0, 0 ], -1, [ 0, 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( ( x: number ): number => x, 'row-major', [ 0, 0, 0 ], -1, [ 0, 0, 0 ] ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a recognized order...
{
	nextCartesianIndex.assign( [ 2, 3 ], true, [ 0, 0 ], -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], false, [ 0, 0 ], -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], null, [ 0, 0 ], -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], undefined, [ 0, 0 ], -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], '5', [ 0, 0 ], -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], [ '1', '2' ], [ 0, 0 ], -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], {}, [ 0, 0 ], -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], ( x: number ): number => x, [ 0, 0 ], -1, [ 0, 0 ] ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array of numbers...
{
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', true, -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', false, -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', null, -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', undefined, -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', '5', -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ '1', '2' ], -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', {}, -1, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', ( x: number ): number => x, -1, [ 0, 0 ] ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], true, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], false, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], null, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], undefined, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], '5', [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], [ '1', '2' ], [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], {}, [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], ( x: number ): number => x, [ 0, 0 ] ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a collection...
{
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], -1, 1 ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], -1, true ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], -1, false ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], -1, null ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], -1, undefined ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], -1, {} ); // $ExpectError
	nextCartesianIndex.assign( [ 2, 3 ], 'row-major', [ 0, 0 ], -1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	nextCartesianIndex.assign(); // $ExpectError
	nextCartesianIndex.assign( [ 3, 2 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 3, 2 ], 'row-major' ); // $ExpectError
	nextCartesianIndex.assign( [ 3, 2 ], 'row-major', [ 0, 0 ] ); // $ExpectError
	nextCartesianIndex.assign( [ 3, 2 ], 'row-major', [ 0, 0 ], -1, [ 0, 0 ], {} ); // $ExpectError
}
