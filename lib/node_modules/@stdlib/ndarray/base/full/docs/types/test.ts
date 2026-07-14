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

import full = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	full( 10.0, 'float64', [ 2, 2 ], 'row-major' ); // $ExpectType float64ndarray
	full( 10.0, 'float32', [ 2, 2 ], 'row-major' ); // $ExpectType float32ndarray
	full( 10.0, 'complex128', [ 2, 2 ], 'row-major' ); // $ExpectType complex128ndarray
	full( 10.0, 'complex64', [ 2, 2 ], 'row-major' ); // $ExpectType complex64ndarray
	full( 10.0, 'int32', [ 2, 2 ], 'row-major' ); // $ExpectType int32ndarray
	full( 10.0, 'int16', [ 2, 2 ], 'row-major' ); // $ExpectType int16ndarray
	full( 10.0, 'int8', [ 2, 2 ], 'row-major' ); // $ExpectType int8ndarray
	full( 10.0, 'uint32', [ 2, 2 ], 'row-major' ); // $ExpectType uint32ndarray
	full( 10.0, 'uint16', [ 2, 2 ], 'row-major' ); // $ExpectType uint16ndarray
	full( 10.0, 'uint8', [ 2, 2 ], 'row-major' ); // $ExpectType uint8ndarray
	full( 10.0, 'uint8c', [ 2, 2 ], 'row-major' ); // $ExpectType uint8cndarray
	full( true, 'bool', [ 2, 2 ], 'row-major' ); // $ExpectType boolndarray
	full( 10.0, 'generic', [ 2, 2 ], 'row-major' ); // $ExpectType genericndarray<number>

	full( 10.0, 'float64', [ 2, 2 ], 'column-major' ); // $ExpectType float64ndarray
	full( 10.0, 'float32', [ 2, 2 ], 'column-major' ); // $ExpectType float32ndarray
	full( 10.0, 'complex128', [ 2, 2 ], 'column-major' ); // $ExpectType complex128ndarray
	full( 10.0, 'complex64', [ 2, 2 ], 'column-major' ); // $ExpectType complex64ndarray
	full( 10.0, 'int32', [ 2, 2 ], 'column-major' ); // $ExpectType int32ndarray
	full( 10.0, 'int16', [ 2, 2 ], 'column-major' ); // $ExpectType int16ndarray
	full( 10.0, 'int8', [ 2, 2 ], 'column-major' ); // $ExpectType int8ndarray
	full( 10.0, 'uint32', [ 2, 2 ], 'column-major' ); // $ExpectType uint32ndarray
	full( 10.0, 'uint16', [ 2, 2 ], 'column-major' ); // $ExpectType uint16ndarray
	full( 10.0, 'uint8', [ 2, 2 ], 'column-major' ); // $ExpectType uint8ndarray
	full( 10.0, 'uint8c', [ 2, 2 ], 'column-major' ); // $ExpectType uint8cndarray
	full( true, 'bool', [ 2, 2 ], 'column-major' ); // $ExpectType boolndarray
	full( 10.0, 'generic', [ 2, 2 ], 'column-major' ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	full( 10.0, '10', [ 2, 2 ], 'row-major' ); // $ExpectError
	full( 10.0, 10, [ 2, 2 ], 'row-major' ); // $ExpectError
	full( 10.0, false, [ 2, 2 ], 'row-major' ); // $ExpectError
	full( 10.0, true, [ 2, 2 ], 'row-major' ); // $ExpectError
	full( 10.0, null, [ 2, 2 ], 'row-major' ); // $ExpectError
	full( 10.0, [], [ 2, 2 ], 'row-major' ); // $ExpectError
	full( 10.0, {}, [ 2, 2 ], 'row-major' ); // $ExpectError
	full( 10.0, ( x: number ): number => x, [ 2, 2 ], 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid shape for the third argument...
{
	full( 10.0, 'float32', '5', 'row-major' ); // $ExpectError
	full( 10.0, 'float32', false, 'row-major' ); // $ExpectError
	full( 10.0, 'float32', true, 'row-major' ); // $ExpectError
	full( 10.0, 'float32', null, 'row-major' ); // $ExpectError
	full( 10.0, 'float32', undefined, 'row-major' ); // $ExpectError
	full( 10.0, 'float32', [ '5' ], 'row-major' ); // $ExpectError
	full( 10.0, 'float32', {}, 'row-major' ); // $ExpectError
	full( 10.0, 'float32', ( x: number ): number => x, 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid order for the fourth argument...
{
	full( 10.0, 'float32', [ 2, 2 ], '5' ); // $ExpectError
	full( 10.0, 'float32', [ 2, 2 ], false ); // $ExpectError
	full( 10.0, 'float32', [ 2, 2 ], true ); // $ExpectError
	full( 10.0, 'float32', [ 2, 2 ], null ); // $ExpectError
	full( 10.0, 'float32', [ 2, 2 ], undefined ); // $ExpectError
	full( 10.0, 'float32', [ 2, 2 ], [ '5' ] ); // $ExpectError
	full( 10.0, 'float32', [ 2, 2 ], {} ); // $ExpectError
	full( 10.0, 'float32', [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	full( 10.0 ); // $ExpectError
	full( 10.0, 'float64' ); // $ExpectError
	full( 10.0, 'float64', [ 2, 2 ] ); // $ExpectError
}
