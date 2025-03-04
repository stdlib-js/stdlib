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

import zeros = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	zeros( 'float64', [ 2, 2 ], 'row-major' ); // $ExpectType float64ndarray
	zeros( 'float32', [ 2, 2 ], 'row-major' ); // $ExpectType float32ndarray
	zeros( 'complex128', [ 2, 2 ], 'row-major' ); // $ExpectType complex128ndarray
	zeros( 'complex64', [ 2, 2 ], 'row-major' ); // $ExpectType complex64ndarray
	zeros( 'int32', [ 2, 2 ], 'row-major' ); // $ExpectType int32ndarray
	zeros( 'int16', [ 2, 2 ], 'row-major' ); // $ExpectType int16ndarray
	zeros( 'int8', [ 2, 2 ], 'row-major' ); // $ExpectType int8ndarray
	zeros( 'uint32', [ 2, 2 ], 'row-major' ); // $ExpectType uint32ndarray
	zeros( 'uint16', [ 2, 2 ], 'row-major' ); // $ExpectType uint16ndarray
	zeros( 'uint8', [ 2, 2 ], 'row-major' ); // $ExpectType uint8ndarray
	zeros( 'uint8c', [ 2, 2 ], 'row-major' ); // $ExpectType uint8cndarray
	zeros( 'generic', [ 2, 2 ], 'row-major' ); // $ExpectType genericndarray<number>

	zeros( 'float64', [ 2, 2 ], 'column-major' ); // $ExpectType float64ndarray
	zeros( 'float32', [ 2, 2 ], 'column-major' ); // $ExpectType float32ndarray
	zeros( 'complex128', [ 2, 2 ], 'column-major' ); // $ExpectType complex128ndarray
	zeros( 'complex64', [ 2, 2 ], 'column-major' ); // $ExpectType complex64ndarray
	zeros( 'int32', [ 2, 2 ], 'column-major' ); // $ExpectType int32ndarray
	zeros( 'int16', [ 2, 2 ], 'column-major' ); // $ExpectType int16ndarray
	zeros( 'int8', [ 2, 2 ], 'column-major' ); // $ExpectType int8ndarray
	zeros( 'uint32', [ 2, 2 ], 'column-major' ); // $ExpectType uint32ndarray
	zeros( 'uint16', [ 2, 2 ], 'column-major' ); // $ExpectType uint16ndarray
	zeros( 'uint8', [ 2, 2 ], 'column-major' ); // $ExpectType uint8ndarray
	zeros( 'uint8c', [ 2, 2 ], 'column-major' ); // $ExpectType uint8cndarray
	zeros( 'generic', [ 2, 2 ], 'column-major' ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is an unrecognized/unsupported data type...
{
	zeros( '10', [ 2, 2 ], 'row-major' ); // $ExpectError
	zeros( 10, [ 2, 2 ], 'row-major' ); // $ExpectError
	zeros( false, [ 2, 2 ], 'row-major' ); // $ExpectError
	zeros( true, [ 2, 2 ], 'row-major' ); // $ExpectError
	zeros( null, [ 2, 2 ], 'row-major' ); // $ExpectError
	zeros( [], [ 2, 2 ], 'row-major' ); // $ExpectError
	zeros( {}, [ 2, 2 ], 'row-major' ); // $ExpectError
	zeros( ( x: number ): number => x, [ 2, 2 ], 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid shape for the second argument...
{
	zeros( 'float32', '5', 'row-major' ); // $ExpectError
	zeros( 'float32', false, 'row-major' ); // $ExpectError
	zeros( 'float32', true, 'row-major' ); // $ExpectError
	zeros( 'float32', null, 'row-major' ); // $ExpectError
	zeros( 'float32', undefined, 'row-major' ); // $ExpectError
	zeros( 'float32', [ '5' ], 'row-major' ); // $ExpectError
	zeros( 'float32', {}, 'row-major' ); // $ExpectError
	zeros( 'float32', ( x: number ): number => x, 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid order for the third argument...
{
	zeros( 'float32', [ 2, 2 ], '5' ); // $ExpectError
	zeros( 'float32', [ 2, 2 ], false ); // $ExpectError
	zeros( 'float32', [ 2, 2 ], true ); // $ExpectError
	zeros( 'float32', [ 2, 2 ], null ); // $ExpectError
	zeros( 'float32', [ 2, 2 ], undefined ); // $ExpectError
	zeros( 'float32', [ 2, 2 ], [ '5' ] ); // $ExpectError
	zeros( 'float32', [ 2, 2 ], {} ); // $ExpectError
	zeros( 'float32', [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zeros( 'float64' ); // $ExpectError
	zeros( 'float64', [ 2, 2 ] ); // $ExpectError
	zeros( 'float64', [ 2, 2 ], 'row-major', 1 ); // $ExpectError
}
