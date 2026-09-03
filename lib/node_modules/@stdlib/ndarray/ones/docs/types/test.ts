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
	ones( [ 2, 2 ] ); // $ExpectType float64ndarray

	ones( [ 2, 2 ], { 'dtype': 'float64' } ); // $ExpectType float64ndarray
	ones( [ 2, 2 ], { 'dtype': 'float32' } ); // $ExpectType float32ndarray
	ones( [ 2, 2 ], { 'dtype': 'complex128' } ); // $ExpectType complex128ndarray
	ones( [ 2, 2 ], { 'dtype': 'complex64' } ); // $ExpectType complex64ndarray
	ones( [ 2, 2 ], { 'dtype': 'int32' } ); // $ExpectType int32ndarray
	ones( [ 2, 2 ], { 'dtype': 'int16' } ); // $ExpectType int16ndarray
	ones( [ 2, 2 ], { 'dtype': 'int8' } ); // $ExpectType int8ndarray
	ones( [ 2, 2 ], { 'dtype': 'uint32' } ); // $ExpectType uint32ndarray
	ones( [ 2, 2 ], { 'dtype': 'uint16' } ); // $ExpectType uint16ndarray
	ones( [ 2, 2 ], { 'dtype': 'uint8' } ); // $ExpectType uint8ndarray
	ones( [ 2, 2 ], { 'dtype': 'uint8c' } ); // $ExpectType uint8cndarray
	ones( [ 2, 2 ], { 'dtype': 'generic' } ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is not provided a valid shape for the first argument...
{
	ones( '5' ); // $ExpectError
	ones( false ); // $ExpectError
	ones( true ); // $ExpectError
	ones( null ); // $ExpectError
	ones( undefined ); // $ExpectError
	ones( [ '5' ] ); // $ExpectError
	ones( {} ); // $ExpectError
	ones( ( x: number ): number => x ); // $ExpectError

	ones( '5', {} ); // $ExpectError
	ones( false, {} ); // $ExpectError
	ones( true, {} ); // $ExpectError
	ones( null, {} ); // $ExpectError
	ones( undefined, {} ); // $ExpectError
	ones( [ '5' ], {} ); // $ExpectError
	ones( {}, {} ); // $ExpectError
	ones( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	ones( [ 2, 2 ], '5' ); // $ExpectError
	ones( [ 2, 2 ], 5 ); // $ExpectError
	ones( [ 2, 2 ], false ); // $ExpectError
	ones( [ 2, 2 ], true ); // $ExpectError
	ones( [ 2, 2 ], [ '5' ] ); // $ExpectError
	ones( [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a valid data type...
{
	ones( [ 2, 2 ], { 'dtype': '5' } ); // $ExpectError
	ones( [ 2, 2 ], { 'dtype': 5 } ); // $ExpectError
	ones( [ 2, 2 ], { 'dtype': false } ); // $ExpectError
	ones( [ 2, 2 ], { 'dtype': true } ); // $ExpectError
	ones( [ 2, 2 ], { 'dtype': null } ); // $ExpectError
	ones( [ 2, 2 ], { 'dtype': undefined } ); // $ExpectError
	ones( [ 2, 2 ], { 'dtype': [ '5' ] } ); // $ExpectError
	ones( [ 2, 2 ], { 'dtype': {} } ); // $ExpectError
	ones( [ 2, 2 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a valid order...
{
	ones( [ 2, 2 ], { 'order': '5' } ); // $ExpectError
	ones( [ 2, 2 ], { 'order': 5 } ); // $ExpectError
	ones( [ 2, 2 ], { 'order': false } ); // $ExpectError
	ones( [ 2, 2 ], { 'order': true } ); // $ExpectError
	ones( [ 2, 2 ], { 'order': [ '5' ] } ); // $ExpectError
	ones( [ 2, 2 ], { 'order': {} } ); // $ExpectError
	ones( [ 2, 2 ], { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a valid mode...
{
	ones( [ 2, 2 ], { 'mode': '5' } ); // $ExpectError
	ones( [ 2, 2 ], { 'mode': 5 } ); // $ExpectError
	ones( [ 2, 2 ], { 'mode': false } ); // $ExpectError
	ones( [ 2, 2 ], { 'mode': true } ); // $ExpectError
	ones( [ 2, 2 ], { 'mode': [ '5' ] } ); // $ExpectError
	ones( [ 2, 2 ], { 'mode': {} } ); // $ExpectError
	ones( [ 2, 2 ], { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `submode` option which is not valid...
{
	ones( [ 2, 2 ], { 'submode': '5' } ); // $ExpectError
	ones( [ 2, 2 ], { 'submode': 5 } ); // $ExpectError
	ones( [ 2, 2 ], { 'submode': false } ); // $ExpectError
	ones( [ 2, 2 ], { 'submode': true } ); // $ExpectError
	ones( [ 2, 2 ], { 'submode': [ '5' ] } ); // $ExpectError
	ones( [ 2, 2 ], { 'submode': {} } ); // $ExpectError
	ones( [ 2, 2 ], { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	ones( [ 2, 2 ], { 'readonly': '5' } ); // $ExpectError
	ones( [ 2, 2 ], { 'readonly': 5 } ); // $ExpectError
	ones( [ 2, 2 ], { 'readonly': [ '5' ] } ); // $ExpectError
	ones( [ 2, 2 ], { 'readonly': {} } ); // $ExpectError
	ones( [ 2, 2 ], { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	ones(); // $ExpectError
	ones( [ 2, 2 ], {}, 1 ); // $ExpectError
}
