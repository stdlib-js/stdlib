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

import empty = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	empty( 'float64', [ 2, 2 ], 'row-major' ); // $ExpectType float64ndarray
	empty( 'float32', [ 2, 2 ], 'row-major' ); // $ExpectType float32ndarray
	empty( 'complex128', [ 2, 2 ], 'row-major' ); // $ExpectType complex128ndarray
	empty( 'complex64', [ 2, 2 ], 'row-major' ); // $ExpectType complex64ndarray
	empty( 'int32', [ 2, 2 ], 'row-major' ); // $ExpectType int32ndarray
	empty( 'int16', [ 2, 2 ], 'row-major' ); // $ExpectType int16ndarray
	empty( 'int8', [ 2, 2 ], 'row-major' ); // $ExpectType int8ndarray
	empty( 'uint32', [ 2, 2 ], 'row-major' ); // $ExpectType uint32ndarray
	empty( 'uint16', [ 2, 2 ], 'row-major' ); // $ExpectType uint16ndarray
	empty( 'uint8', [ 2, 2 ], 'row-major' ); // $ExpectType uint8ndarray
	empty( 'uint8c', [ 2, 2 ], 'row-major' ); // $ExpectType uint8cndarray
	empty( 'bool', [ 2, 2 ], 'row-major' ); // $ExpectType boolndarray
	empty( 'generic', [ 2, 2 ], 'row-major' ); // $ExpectType genericndarray<number>

	empty( 'float64', [ 2, 2 ], 'column-major' ); // $ExpectType float64ndarray
	empty( 'float32', [ 2, 2 ], 'column-major' ); // $ExpectType float32ndarray
	empty( 'complex128', [ 2, 2 ], 'column-major' ); // $ExpectType complex128ndarray
	empty( 'complex64', [ 2, 2 ], 'column-major' ); // $ExpectType complex64ndarray
	empty( 'int32', [ 2, 2 ], 'column-major' ); // $ExpectType int32ndarray
	empty( 'int16', [ 2, 2 ], 'column-major' ); // $ExpectType int16ndarray
	empty( 'int8', [ 2, 2 ], 'column-major' ); // $ExpectType int8ndarray
	empty( 'uint32', [ 2, 2 ], 'column-major' ); // $ExpectType uint32ndarray
	empty( 'uint16', [ 2, 2 ], 'column-major' ); // $ExpectType uint16ndarray
	empty( 'uint8', [ 2, 2 ], 'column-major' ); // $ExpectType uint8ndarray
	empty( 'uint8c', [ 2, 2 ], 'column-major' ); // $ExpectType uint8cndarray
	empty( 'bool', [ 2, 2 ], 'column-major' ); // $ExpectType boolndarray
	empty( 'generic', [ 2, 2 ], 'column-major' ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is an unrecognized/unsupported data type...
{
	empty( '10', [ 2, 2 ], 'row-major' ); // $ExpectError
	empty( 10, [ 2, 2 ], 'row-major' ); // $ExpectError
	empty( false, [ 2, 2 ], 'row-major' ); // $ExpectError
	empty( true, [ 2, 2 ], 'row-major' ); // $ExpectError
	empty( null, [ 2, 2 ], 'row-major' ); // $ExpectError
	empty( [], [ 2, 2 ], 'row-major' ); // $ExpectError
	empty( {}, [ 2, 2 ], 'row-major' ); // $ExpectError
	empty( ( x: number ): number => x, [ 2, 2 ], 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid shape for the second argument...
{
	empty( 'float32', '5', 'row-major' ); // $ExpectError
	empty( 'float32', false, 'row-major' ); // $ExpectError
	empty( 'float32', true, 'row-major' ); // $ExpectError
	empty( 'float32', null, 'row-major' ); // $ExpectError
	empty( 'float32', undefined, 'row-major' ); // $ExpectError
	empty( 'float32', [ '5' ], 'row-major' ); // $ExpectError
	empty( 'float32', {}, 'row-major' ); // $ExpectError
	empty( 'float32', ( x: number ): number => x, 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid order for the third argument...
{
	empty( 'float32', [ 2, 2 ], '5' ); // $ExpectError
	empty( 'float32', [ 2, 2 ], false ); // $ExpectError
	empty( 'float32', [ 2, 2 ], true ); // $ExpectError
	empty( 'float32', [ 2, 2 ], null ); // $ExpectError
	empty( 'float32', [ 2, 2 ], undefined ); // $ExpectError
	empty( 'float32', [ 2, 2 ], [ '5' ] ); // $ExpectError
	empty( 'float32', [ 2, 2 ], {} ); // $ExpectError
	empty( 'float32', [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	empty( 'float64' ); // $ExpectError
	empty( 'float64', [ 2, 2 ] ); // $ExpectError
	empty( 'float64', [ 2, 2 ], 'row-major', 1 ); // $ExpectError
}
