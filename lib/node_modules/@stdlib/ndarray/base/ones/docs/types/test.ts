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

import ones = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	ones( 'float64', [ 2, 2 ], 'row-major' ); // $ExpectType float64ndarray
	ones( 'float32', [ 2, 2 ], 'row-major' ); // $ExpectType float32ndarray
	ones( 'complex128', [ 2, 2 ], 'row-major' ); // $ExpectType complex128ndarray
	ones( 'complex64', [ 2, 2 ], 'row-major' ); // $ExpectType complex64ndarray
	ones( 'int32', [ 2, 2 ], 'row-major' ); // $ExpectType int32ndarray
	ones( 'int16', [ 2, 2 ], 'row-major' ); // $ExpectType int16ndarray
	ones( 'int8', [ 2, 2 ], 'row-major' ); // $ExpectType int8ndarray
	ones( 'uint32', [ 2, 2 ], 'row-major' ); // $ExpectType uint32ndarray
	ones( 'uint16', [ 2, 2 ], 'row-major' ); // $ExpectType uint16ndarray
	ones( 'uint8', [ 2, 2 ], 'row-major' ); // $ExpectType uint8ndarray
	ones( 'uint8c', [ 2, 2 ], 'row-major' ); // $ExpectType uint8cndarray
	ones( 'generic', [ 2, 2 ], 'row-major' ); // $ExpectType genericndarray<number>

	ones( 'float64', [ 2, 2 ], 'column-major' ); // $ExpectType float64ndarray
	ones( 'float32', [ 2, 2 ], 'column-major' ); // $ExpectType float32ndarray
	ones( 'complex128', [ 2, 2 ], 'column-major' ); // $ExpectType complex128ndarray
	ones( 'complex64', [ 2, 2 ], 'column-major' ); // $ExpectType complex64ndarray
	ones( 'int32', [ 2, 2 ], 'column-major' ); // $ExpectType int32ndarray
	ones( 'int16', [ 2, 2 ], 'column-major' ); // $ExpectType int16ndarray
	ones( 'int8', [ 2, 2 ], 'column-major' ); // $ExpectType int8ndarray
	ones( 'uint32', [ 2, 2 ], 'column-major' ); // $ExpectType uint32ndarray
	ones( 'uint16', [ 2, 2 ], 'column-major' ); // $ExpectType uint16ndarray
	ones( 'uint8', [ 2, 2 ], 'column-major' ); // $ExpectType uint8ndarray
	ones( 'uint8c', [ 2, 2 ], 'column-major' ); // $ExpectType uint8cndarray
	ones( 'generic', [ 2, 2 ], 'column-major' ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is an unrecognized/unsupported data type...
{
	ones( '10', [ 2, 2 ], 'row-major' ); // $ExpectError
	ones( 10, [ 2, 2 ], 'row-major' ); // $ExpectError
	ones( false, [ 2, 2 ], 'row-major' ); // $ExpectError
	ones( true, [ 2, 2 ], 'row-major' ); // $ExpectError
	ones( null, [ 2, 2 ], 'row-major' ); // $ExpectError
	ones( [], [ 2, 2 ], 'row-major' ); // $ExpectError
	ones( {}, [ 2, 2 ], 'row-major' ); // $ExpectError
	ones( ( x: number ): number => x, [ 2, 2 ], 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid shape for the second argument...
{
	ones( 'float32', '5', 'row-major' ); // $ExpectError
	ones( 'float32', false, 'row-major' ); // $ExpectError
	ones( 'float32', true, 'row-major' ); // $ExpectError
	ones( 'float32', null, 'row-major' ); // $ExpectError
	ones( 'float32', undefined, 'row-major' ); // $ExpectError
	ones( 'float32', [ '5' ], 'row-major' ); // $ExpectError
	ones( 'float32', {}, 'row-major' ); // $ExpectError
	ones( 'float32', ( x: number ): number => x, 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid order for the third argument...
{
	ones( 'float32', [ 2, 2 ], '5' ); // $ExpectError
	ones( 'float32', [ 2, 2 ], false ); // $ExpectError
	ones( 'float32', [ 2, 2 ], true ); // $ExpectError
	ones( 'float32', [ 2, 2 ], null ); // $ExpectError
	ones( 'float32', [ 2, 2 ], undefined ); // $ExpectError
	ones( 'float32', [ 2, 2 ], [ '5' ] ); // $ExpectError
	ones( 'float32', [ 2, 2 ], {} ); // $ExpectError
	ones( 'float32', [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	ones( 'float64' ); // $ExpectError
	ones( 'float64', [ 2, 2 ] ); // $ExpectError
	ones( 'float64', [ 2, 2 ], 'row-major', 1 ); // $ExpectError
}
