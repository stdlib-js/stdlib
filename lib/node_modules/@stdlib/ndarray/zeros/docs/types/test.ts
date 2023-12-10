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
	zeros( [ 2, 2 ] ); // $ExpectType float64ndarray

	zeros( [ 2, 2 ], { 'dtype': 'float64' } ); // $ExpectType float64ndarray
	zeros( [ 2, 2 ], { 'dtype': 'float32' } ); // $ExpectType float32ndarray
	zeros( [ 2, 2 ], { 'dtype': 'complex128' } ); // $ExpectType complex128ndarray
	zeros( [ 2, 2 ], { 'dtype': 'complex64' } ); // $ExpectType complex64ndarray
	zeros( [ 2, 2 ], { 'dtype': 'int32' } ); // $ExpectType int32ndarray
	zeros( [ 2, 2 ], { 'dtype': 'int16' } ); // $ExpectType int16ndarray
	zeros( [ 2, 2 ], { 'dtype': 'int8' } ); // $ExpectType int8ndarray
	zeros( [ 2, 2 ], { 'dtype': 'uint32' } ); // $ExpectType uint32ndarray
	zeros( [ 2, 2 ], { 'dtype': 'uint16' } ); // $ExpectType uint16ndarray
	zeros( [ 2, 2 ], { 'dtype': 'uint8' } ); // $ExpectType uint8ndarray
	zeros( [ 2, 2 ], { 'dtype': 'uint8c' } ); // $ExpectType uint8cndarray
	zeros( [ 2, 2 ], { 'dtype': 'generic' } ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the function is not provided a valid shape for the first argument...
{
	zeros( '5' ); // $ExpectError
	zeros( false ); // $ExpectError
	zeros( true ); // $ExpectError
	zeros( null ); // $ExpectError
	zeros( undefined ); // $ExpectError
	zeros( [ '5' ] ); // $ExpectError
	zeros( {} ); // $ExpectError
	zeros( ( x: number ): number => x ); // $ExpectError

	zeros( '5', {} ); // $ExpectError
	zeros( false, {} ); // $ExpectError
	zeros( true, {} ); // $ExpectError
	zeros( null, {} ); // $ExpectError
	zeros( undefined, {} ); // $ExpectError
	zeros( [ '5' ], {} ); // $ExpectError
	zeros( {}, {} ); // $ExpectError
	zeros( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	zeros( [ 2, 2 ], '5' ); // $ExpectError
	zeros( [ 2, 2 ], 5 ); // $ExpectError
	zeros( [ 2, 2 ], false ); // $ExpectError
	zeros( [ 2, 2 ], true ); // $ExpectError
	zeros( [ 2, 2 ], [ '5' ] ); // $ExpectError
	zeros( [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a valid data type...
{
	zeros( [ 2, 2 ], { 'dtype': '5' } ); // $ExpectError
	zeros( [ 2, 2 ], { 'dtype': 5 } ); // $ExpectError
	zeros( [ 2, 2 ], { 'dtype': false } ); // $ExpectError
	zeros( [ 2, 2 ], { 'dtype': true } ); // $ExpectError
	zeros( [ 2, 2 ], { 'dtype': null } ); // $ExpectError
	zeros( [ 2, 2 ], { 'dtype': undefined } ); // $ExpectError
	zeros( [ 2, 2 ], { 'dtype': [ '5' ] } ); // $ExpectError
	zeros( [ 2, 2 ], { 'dtype': {} } ); // $ExpectError
	zeros( [ 2, 2 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a valid order...
{
	zeros( [ 2, 2 ], { 'order': '5' } ); // $ExpectError
	zeros( [ 2, 2 ], { 'order': 5 } ); // $ExpectError
	zeros( [ 2, 2 ], { 'order': false } ); // $ExpectError
	zeros( [ 2, 2 ], { 'order': true } ); // $ExpectError
	zeros( [ 2, 2 ], { 'order': [ '5' ] } ); // $ExpectError
	zeros( [ 2, 2 ], { 'order': {} } ); // $ExpectError
	zeros( [ 2, 2 ], { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a valid mode...
{
	zeros( [ 2, 2 ], { 'mode': '5' } ); // $ExpectError
	zeros( [ 2, 2 ], { 'mode': 5 } ); // $ExpectError
	zeros( [ 2, 2 ], { 'mode': false } ); // $ExpectError
	zeros( [ 2, 2 ], { 'mode': true } ); // $ExpectError
	zeros( [ 2, 2 ], { 'mode': [ '5' ] } ); // $ExpectError
	zeros( [ 2, 2 ], { 'mode': {} } ); // $ExpectError
	zeros( [ 2, 2 ], { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `submode` option which is not valid...
{
	zeros( [ 2, 2 ], { 'submode': '5' } ); // $ExpectError
	zeros( [ 2, 2 ], { 'submode': 5 } ); // $ExpectError
	zeros( [ 2, 2 ], { 'submode': false } ); // $ExpectError
	zeros( [ 2, 2 ], { 'submode': true } ); // $ExpectError
	zeros( [ 2, 2 ], { 'submode': [ '5' ] } ); // $ExpectError
	zeros( [ 2, 2 ], { 'submode': {} } ); // $ExpectError
	zeros( [ 2, 2 ], { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	zeros( [ 2, 2 ], { 'readonly': '5' } ); // $ExpectError
	zeros( [ 2, 2 ], { 'readonly': 5 } ); // $ExpectError
	zeros( [ 2, 2 ], { 'readonly': [ '5' ] } ); // $ExpectError
	zeros( [ 2, 2 ], { 'readonly': {} } ); // $ExpectError
	zeros( [ 2, 2 ], { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zeros(); // $ExpectError
	zeros( [ 2, 2 ], {}, 1 ); // $ExpectError
}
