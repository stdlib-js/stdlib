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

import fullBy = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	fullBy( 'float64', [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectType float64ndarray
	fullBy( 'float32', [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectType float32ndarray
	fullBy( 'complex128', [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectType complex128ndarray
	fullBy( 'complex64', [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectType complex64ndarray
	fullBy( 'int32', [ 2, 2 ], 'row-major', () => 10 ); // $ExpectType int32ndarray
	fullBy( 'int16', [ 2, 2 ], 'row-major', () => 10 ); // $ExpectType int16ndarray
	fullBy( 'int8', [ 2, 2 ], 'row-major', () => 10 ); // $ExpectType int8ndarray
	fullBy( 'uint32', [ 2, 2 ], 'row-major', () => 10 ); // $ExpectType uint32ndarray
	fullBy( 'uint16', [ 2, 2 ], 'row-major', () => 10 ); // $ExpectType uint16ndarray
	fullBy( 'uint8', [ 2, 2 ], 'row-major', () => 10 ); // $ExpectType uint8ndarray
	fullBy( 'uint8c', [ 2, 2 ], 'row-major', () => 10 ); // $ExpectType uint8cndarray
	fullBy( 'bool', [ 2, 2 ], 'row-major', () => true ); // $ExpectType boolndarray
	fullBy( 'generic', [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectType genericndarray<number>

	fullBy( 'float64', [ 2, 2 ], 'column-major', () => 10.0 ); // $ExpectType float64ndarray
	fullBy( 'float32', [ 2, 2 ], 'column-major', () => 10.0 ); // $ExpectType float32ndarray
	fullBy( 'complex128', [ 2, 2 ], 'column-major', () => 10.0 ); // $ExpectType complex128ndarray
	fullBy( 'complex64', [ 2, 2 ], 'column-major', () => 10.0 ); // $ExpectType complex64ndarray
	fullBy( 'int32', [ 2, 2 ], 'column-major', () => 10 ); // $ExpectType int32ndarray
	fullBy( 'int16', [ 2, 2 ], 'column-major', () => 10 ); // $ExpectType int16ndarray
	fullBy( 'int8', [ 2, 2 ], 'column-major', () => 10 ); // $ExpectType int8ndarray
	fullBy( 'uint32', [ 2, 2 ], 'column-major', () => 10 ); // $ExpectType uint32ndarray
	fullBy( 'uint16', [ 2, 2 ], 'column-major', () => 10 ); // $ExpectType uint16ndarray
	fullBy( 'uint8', [ 2, 2 ], 'column-major', () => 10 ); // $ExpectType uint8ndarray
	fullBy( 'uint8c', [ 2, 2 ], 'column-major', () => 10 ); // $ExpectType uint8cndarray
	fullBy( 'bool', [ 2, 2 ], 'column-major', () => true ); // $ExpectType boolndarray
	fullBy( 'generic', [ 2, 2 ], 'column-major', () => 10.0 ); // $ExpectType genericndarray<number>

	fullBy( 'float64', [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectType float64ndarray
	fullBy( 'float32', [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectType float32ndarray
	fullBy( 'complex128', [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectType complex128ndarray
	fullBy( 'complex64', [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectType complex64ndarray
	fullBy( 'int32', [ 2, 2 ], 'row-major', () => 10, {} ); // $ExpectType int32ndarray
	fullBy( 'int16', [ 2, 2 ], 'row-major', () => 10, {} ); // $ExpectType int16ndarray
	fullBy( 'int8', [ 2, 2 ], 'row-major', () => 10, {} ); // $ExpectType int8ndarray
	fullBy( 'uint32', [ 2, 2 ], 'row-major', () => 10, {} ); // $ExpectType uint32ndarray
	fullBy( 'uint16', [ 2, 2 ], 'row-major', () => 10, {} ); // $ExpectType uint16ndarray
	fullBy( 'uint8', [ 2, 2 ], 'row-major', () => 10, {} ); // $ExpectType uint8ndarray
	fullBy( 'uint8c', [ 2, 2 ], 'row-major', () => 10, {} ); // $ExpectType uint8cndarray
	fullBy( 'bool', [ 2, 2 ], 'row-major', () => true, {} ); // $ExpectType boolndarray
	fullBy( 'generic', [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is an unrecognized/unsupported data type...
{
	fullBy( '10', [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectError
	fullBy( 10, [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectError
	fullBy( false, [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectError
	fullBy( true, [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectError
	fullBy( null, [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectError
	fullBy( [], [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectError
	fullBy( {}, [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectError
	fullBy( ( x: number ): number => x, [ 2, 2 ], 'row-major', () => 10.0 ); // $ExpectError

	fullBy( '10', [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( 10, [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( false, [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( true, [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( null, [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( [], [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( {}, [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( ( x: number ): number => x, [ 2, 2 ], 'row-major', () => 10.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid shape for the second argument...
{
	fullBy( 'float32', '5', 'row-major', () => 10.0 ); // $ExpectError
	fullBy( 'float32', false, 'row-major', () => 10.0 ); // $ExpectError
	fullBy( 'float32', true, 'row-major', () => 10.0 ); // $ExpectError
	fullBy( 'float32', null, 'row-major', () => 10.0 ); // $ExpectError
	fullBy( 'float32', undefined, 'row-major', () => 10.0 ); // $ExpectError
	fullBy( 'float32', [ '5' ], 'row-major', () => 10.0 ); // $ExpectError
	fullBy( 'float32', {}, 'row-major', () => 10.0 ); // $ExpectError
	fullBy( 'float32', ( x: number ): number => x, 'row-major', () => 10.0 ); // $ExpectError

	fullBy( 'float32', '5', 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', false, 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', true, 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', null, 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', undefined, 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', [ '5' ], 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', {}, 'row-major', () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', ( x: number ): number => x, 'row-major', () => 10.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid order for the third argument...
{
	fullBy( 'float32', [ 2, 2 ], '5', () => 10.0 ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], false, () => 10.0 ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], true, () => 10.0 ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], null, () => 10.0 ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], undefined, () => 10.0 ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], [ '5' ], () => 10.0 ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], {}, () => 10.0 ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], ( x: number ): number => x, () => 10.0 ); // $ExpectError

	fullBy( 'float32', [ 2, 2 ], '5', () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], false, () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], true, () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], null, () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], undefined, () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], [ '5' ], () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], {}, () => 10.0, {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], ( x: number ): number => x, () => 10.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is not provided a callback function for the fourth argument...
{
	fullBy( 'float32', [ 2, 2 ], 'row-major', '10' ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], 'row-major', 10 ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], 'row-major', false ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], 'row-major', true ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], 'row-major', null ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], 'row-major', [] ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], 'row-major', {} ); // $ExpectError

	fullBy( 'float32', [ 2, 2 ], 'row-major', '10', {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], 'row-major', 10, {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], 'row-major', false, {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], 'row-major', true, {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], 'row-major', null, {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], 'row-major', [], {} ); // $ExpectError
	fullBy( 'float32', [ 2, 2 ], 'row-major', {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	fullBy( 'float64' ); // $ExpectError
	fullBy( 'float64', [ 2, 2 ] ); // $ExpectError
	fullBy( 'float64', [ 2, 2 ], 'row-major' ); // $ExpectError
}
