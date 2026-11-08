/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import unflattenShape = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	unflattenShape( [ 6, 2, 1 ], 1, [ 3, 2 ] ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing numbers...
{
	unflattenShape( true, 1, [ 3, 2 ] ); // $ExpectError
	unflattenShape( false, 1, [ 3, 2 ] ); // $ExpectError
	unflattenShape( null, 1, [ 3, 2 ] ); // $ExpectError
	unflattenShape( undefined, 1, [ 3, 2 ] ); // $ExpectError
	unflattenShape( '5', 1, [ 3, 2 ] ); // $ExpectError
	unflattenShape( [ '1', '2' ], 1, [ 3, 2 ] ); // $ExpectError
	unflattenShape( {}, 1, [ 3, 2 ] ); // $ExpectError
	unflattenShape( ( x: number ): number => x, 1, [ 3, 2 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	unflattenShape( [ 6, 2, 1 ], true, [ 3, 2 ] ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], false, [ 3, 2 ] ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], null, [ 3, 2 ] ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], undefined, [ 3, 2 ] ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], '5', [ 3, 2 ] ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], [ '1', '2' ], [ 3, 2 ] ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], {}, [ 3, 2 ] ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], ( x: number ): number => x, [ 3, 2 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	unflattenShape( [ 6, 2, 1 ], 1, true ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], 1, false ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], 1, null ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], 1, undefined ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], 1, '5' ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], 1, [ '1', '2' ] ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], 1, {} ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	unflattenShape(); // $ExpectError
	unflattenShape( [ 6, 2, 1 ] ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], 1 ); // $ExpectError
	unflattenShape( [ 6, 2, 1 ], 1, [ 3, 2 ], {} ); // $ExpectError
}

// The `assign` method returns an array of numbers...
{
	unflattenShape.assign( [ 6, 2, 1 ], 1, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectType number[]
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object containing numbers...
{
	unflattenShape.assign( true, 1, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( false, 1, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( null, 1, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( undefined, 1, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( '5', 1, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ '1', '2' ], 1, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( {}, 1, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( ( x: number ): number => x, 1, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	unflattenShape.assign( [ 6, 2, 1 ], true, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], false, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], null, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], undefined, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], '5', [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], [ '1', '2' ], [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], {}, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], ( x: number ): number => x, [ 3, 2 ], [ 0, 0, 0, 0 ] ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array-like object containing numbers...
{
	unflattenShape.assign( [ 6, 2, 1 ], 1, true, [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, false, [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, null, [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, undefined, [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, '5', [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, [ '1', '2' ], [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, {}, [ 0, 0, 0, 0 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, ( x: number ): number => x, [ 0, 0, 0, 0 ] ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an array-like object containing numbers...
{
	unflattenShape.assign( [ 6, 2, 1 ], 1, [ 3, 2 ], true ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, [ 3, 2 ], false ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, [ 3, 2 ], null ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, [ 3, 2 ], undefined ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, [ 3, 2 ], '5' ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, [ 3, 2 ], [ '1', '2' ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, [ 3, 2 ], {} ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, [ 3, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	unflattenShape.assign(); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1 ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, [ 3, 2 ] ); // $ExpectError
	unflattenShape.assign( [ 6, 2, 1 ], 1, [ 3, 2 ], [ 0, 0, 0, 0 ], {} ); // $ExpectError
}
