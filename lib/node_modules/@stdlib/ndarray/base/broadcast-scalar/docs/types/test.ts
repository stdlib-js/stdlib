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

import broadcastScalar = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	broadcastScalar( 1.0, 'float64', [ 2, 2 ], 'row-major' ); // $ExpectType float64ndarray
	broadcastScalar( 1.0, 'float32', [ 2, 2 ], 'row-major' ); // $ExpectType float32ndarray
	broadcastScalar( 1.0, 'complex128', [ 2, 2 ], 'row-major' ); // $ExpectType complex128ndarray
	broadcastScalar( 1.0, 'complex64', [ 2, 2 ], 'row-major' ); // $ExpectType complex64ndarray
	broadcastScalar( 1.0, 'int32', [ 2, 2 ], 'row-major' ); // $ExpectType int32ndarray
	broadcastScalar( 1.0, 'int16', [ 2, 2 ], 'row-major' ); // $ExpectType int16ndarray
	broadcastScalar( 1.0, 'int8', [ 2, 2 ], 'row-major' ); // $ExpectType int8ndarray
	broadcastScalar( 1.0, 'uint32', [ 2, 2 ], 'row-major' ); // $ExpectType uint32ndarray
	broadcastScalar( 1.0, 'uint16', [ 2, 2 ], 'row-major' ); // $ExpectType uint16ndarray
	broadcastScalar( 1.0, 'uint8', [ 2, 2 ], 'row-major' ); // $ExpectType uint8ndarray
	broadcastScalar( 1.0, 'uint8c', [ 2, 2 ], 'row-major' ); // $ExpectType uint8cndarray
	broadcastScalar( 1.0, 'generic', [ 2, 2 ], 'row-major' ); // $ExpectType ndarray
}

// The compiler throws an error if the function is provided a second argument which is not a recognized/supported data type...
{
	broadcastScalar( 1.0, '10', [ 2, 2 ], 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, 5, [ 2, 2 ], 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, false, [ 2, 2 ], 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, true, [ 2, 2 ], 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, null, [ 2, 2 ], 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, [], [ 2, 2 ], 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, {}, [ 2, 2 ], 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, ( x: number ): number => x, [ 2, 2 ], 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid shape...
{
	broadcastScalar( 1.0, 'float64', '10', 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, 'float64', 5, 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, 'float64', false, 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, 'float64', true, 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, 'float64', null, 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, 'float64', [ '1' ], 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, 'float64', {}, 'row-major' ); // $ExpectError
	broadcastScalar( 1.0, 'float64', ( x: number ): number => x, 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid order...
{
	broadcastScalar( 1.0, 'generic', [ 2, 2 ], '10' ); // $ExpectError
	broadcastScalar( 1.0, 'generic', [ 2, 2 ], 5 ); // $ExpectError
	broadcastScalar( 1.0, 'generic', [ 2, 2 ], false ); // $ExpectError
	broadcastScalar( 1.0, 'generic', [ 2, 2 ], true ); // $ExpectError
	broadcastScalar( 1.0, 'generic', [ 2, 2 ], null ); // $ExpectError
	broadcastScalar( 1.0, 'generic', [ 2, 2 ], [] ); // $ExpectError
	broadcastScalar( 1.0, 'generic', [ 2, 2 ], {} ); // $ExpectError
	broadcastScalar( 1.0, 'generic', [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	broadcastScalar(); // $ExpectError
	broadcastScalar( 1.0 ); // $ExpectError
	broadcastScalar( 1.0, 'float64' ); // $ExpectError
	broadcastScalar( 1.0, 'float64', [ 2, 2 ] ); // $ExpectError
	broadcastScalar( 1.0, 'float64', [ 2, 2 ], 'row-major', 1 ); // $ExpectError
}
