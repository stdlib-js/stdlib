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
	empty( [ 2, 2 ] ); // $ExpectType float64ndarray

	empty( [ 2, 2 ], { 'dtype': 'float64' } ); // $ExpectType float64ndarray
	empty( [ 2, 2 ], { 'dtype': 'float32' } ); // $ExpectType float32ndarray
	empty( [ 2, 2 ], { 'dtype': 'complex128' } ); // $ExpectType complex128ndarray
	empty( [ 2, 2 ], { 'dtype': 'complex64' } ); // $ExpectType complex64ndarray
	empty( [ 2, 2 ], { 'dtype': 'int32' } ); // $ExpectType int32ndarray
	empty( [ 2, 2 ], { 'dtype': 'int16' } ); // $ExpectType int16ndarray
	empty( [ 2, 2 ], { 'dtype': 'int8' } ); // $ExpectType int8ndarray
	empty( [ 2, 2 ], { 'dtype': 'uint32' } ); // $ExpectType uint32ndarray
	empty( [ 2, 2 ], { 'dtype': 'uint16' } ); // $ExpectType uint16ndarray
	empty( [ 2, 2 ], { 'dtype': 'uint8' } ); // $ExpectType uint8ndarray
	empty( [ 2, 2 ], { 'dtype': 'uint8c' } ); // $ExpectType uint8cndarray
	empty( [ 2, 2 ], { 'dtype': 'generic' } ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is not provided a valid shape for the first argument...
{
	empty( '5' ); // $ExpectError
	empty( false ); // $ExpectError
	empty( true ); // $ExpectError
	empty( null ); // $ExpectError
	empty( undefined ); // $ExpectError
	empty( [ '5' ] ); // $ExpectError
	empty( {} ); // $ExpectError
	empty( ( x: number ): number => x ); // $ExpectError

	empty( '5', {} ); // $ExpectError
	empty( false, {} ); // $ExpectError
	empty( true, {} ); // $ExpectError
	empty( null, {} ); // $ExpectError
	empty( undefined, {} ); // $ExpectError
	empty( [ '5' ], {} ); // $ExpectError
	empty( {}, {} ); // $ExpectError
	empty( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	empty( [ 2, 2 ], '5' ); // $ExpectError
	empty( [ 2, 2 ], 5 ); // $ExpectError
	empty( [ 2, 2 ], false ); // $ExpectError
	empty( [ 2, 2 ], true ); // $ExpectError
	empty( [ 2, 2 ], [ '5' ] ); // $ExpectError
	empty( [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a valid data type...
{
	empty( [ 2, 2 ], { 'dtype': '5' } ); // $ExpectError
	empty( [ 2, 2 ], { 'dtype': 5 } ); // $ExpectError
	empty( [ 2, 2 ], { 'dtype': false } ); // $ExpectError
	empty( [ 2, 2 ], { 'dtype': true } ); // $ExpectError
	empty( [ 2, 2 ], { 'dtype': null } ); // $ExpectError
	empty( [ 2, 2 ], { 'dtype': undefined } ); // $ExpectError
	empty( [ 2, 2 ], { 'dtype': [ '5' ] } ); // $ExpectError
	empty( [ 2, 2 ], { 'dtype': {} } ); // $ExpectError
	empty( [ 2, 2 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a valid order...
{
	empty( [ 2, 2 ], { 'order': '5' } ); // $ExpectError
	empty( [ 2, 2 ], { 'order': 5 } ); // $ExpectError
	empty( [ 2, 2 ], { 'order': false } ); // $ExpectError
	empty( [ 2, 2 ], { 'order': true } ); // $ExpectError
	empty( [ 2, 2 ], { 'order': [ '5' ] } ); // $ExpectError
	empty( [ 2, 2 ], { 'order': {} } ); // $ExpectError
	empty( [ 2, 2 ], { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a valid mode...
{
	empty( [ 2, 2 ], { 'mode': '5' } ); // $ExpectError
	empty( [ 2, 2 ], { 'mode': 5 } ); // $ExpectError
	empty( [ 2, 2 ], { 'mode': false } ); // $ExpectError
	empty( [ 2, 2 ], { 'mode': true } ); // $ExpectError
	empty( [ 2, 2 ], { 'mode': [ '5' ] } ); // $ExpectError
	empty( [ 2, 2 ], { 'mode': {} } ); // $ExpectError
	empty( [ 2, 2 ], { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `submode` option which is not valid...
{
	empty( [ 2, 2 ], { 'submode': '5' } ); // $ExpectError
	empty( [ 2, 2 ], { 'submode': 5 } ); // $ExpectError
	empty( [ 2, 2 ], { 'submode': false } ); // $ExpectError
	empty( [ 2, 2 ], { 'submode': true } ); // $ExpectError
	empty( [ 2, 2 ], { 'submode': [ '5' ] } ); // $ExpectError
	empty( [ 2, 2 ], { 'submode': {} } ); // $ExpectError
	empty( [ 2, 2 ], { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	empty( [ 2, 2 ], { 'readonly': '5' } ); // $ExpectError
	empty( [ 2, 2 ], { 'readonly': 5 } ); // $ExpectError
	empty( [ 2, 2 ], { 'readonly': [ '5' ] } ); // $ExpectError
	empty( [ 2, 2 ], { 'readonly': {} } ); // $ExpectError
	empty( [ 2, 2 ], { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	empty(); // $ExpectError
	empty( [ 2, 2 ], {}, 1 ); // $ExpectError
}
