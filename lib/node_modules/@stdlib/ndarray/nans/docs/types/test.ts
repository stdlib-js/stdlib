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

import nans = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	nans( [ 2, 2 ] ); // $ExpectType float64ndarray

	nans( [ 2, 2 ], { 'dtype': 'float64' } ); // $ExpectType float64ndarray
	nans( [ 2, 2 ], { 'dtype': 'float32' } ); // $ExpectType float32ndarray
	nans( [ 2, 2 ], { 'dtype': 'complex128' } ); // $ExpectType complex128ndarray
	nans( [ 2, 2 ], { 'dtype': 'complex64' } ); // $ExpectType complex64ndarray
	nans( [ 2, 2 ], { 'dtype': 'generic' } ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is not provided a valid shape for the first argument...
{
	nans( '5' ); // $ExpectError
	nans( false ); // $ExpectError
	nans( true ); // $ExpectError
	nans( null ); // $ExpectError
	nans( undefined ); // $ExpectError
	nans( [ '5' ] ); // $ExpectError
	nans( {} ); // $ExpectError
	nans( ( x: number ): number => x ); // $ExpectError

	nans( '5', {} ); // $ExpectError
	nans( false, {} ); // $ExpectError
	nans( true, {} ); // $ExpectError
	nans( null, {} ); // $ExpectError
	nans( undefined, {} ); // $ExpectError
	nans( [ '5' ], {} ); // $ExpectError
	nans( {}, {} ); // $ExpectError
	nans( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	nans( [ 2, 2 ], '5' ); // $ExpectError
	nans( [ 2, 2 ], 5 ); // $ExpectError
	nans( [ 2, 2 ], false ); // $ExpectError
	nans( [ 2, 2 ], true ); // $ExpectError
	nans( [ 2, 2 ], [ '5' ] ); // $ExpectError
	nans( [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a valid data type...
{
	nans( [ 2, 2 ], { 'dtype': '5' } ); // $ExpectError
	nans( [ 2, 2 ], { 'dtype': 5 } ); // $ExpectError
	nans( [ 2, 2 ], { 'dtype': false } ); // $ExpectError
	nans( [ 2, 2 ], { 'dtype': true } ); // $ExpectError
	nans( [ 2, 2 ], { 'dtype': null } ); // $ExpectError
	nans( [ 2, 2 ], { 'dtype': undefined } ); // $ExpectError
	nans( [ 2, 2 ], { 'dtype': [ '5' ] } ); // $ExpectError
	nans( [ 2, 2 ], { 'dtype': {} } ); // $ExpectError
	nans( [ 2, 2 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a valid order...
{
	nans( [ 2, 2 ], { 'order': '5' } ); // $ExpectError
	nans( [ 2, 2 ], { 'order': 5 } ); // $ExpectError
	nans( [ 2, 2 ], { 'order': false } ); // $ExpectError
	nans( [ 2, 2 ], { 'order': true } ); // $ExpectError
	nans( [ 2, 2 ], { 'order': [ '5' ] } ); // $ExpectError
	nans( [ 2, 2 ], { 'order': {} } ); // $ExpectError
	nans( [ 2, 2 ], { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a valid mode...
{
	nans( [ 2, 2 ], { 'mode': '5' } ); // $ExpectError
	nans( [ 2, 2 ], { 'mode': 5 } ); // $ExpectError
	nans( [ 2, 2 ], { 'mode': false } ); // $ExpectError
	nans( [ 2, 2 ], { 'mode': true } ); // $ExpectError
	nans( [ 2, 2 ], { 'mode': [ '5' ] } ); // $ExpectError
	nans( [ 2, 2 ], { 'mode': {} } ); // $ExpectError
	nans( [ 2, 2 ], { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `submode` option which is not valid...
{
	nans( [ 2, 2 ], { 'submode': '5' } ); // $ExpectError
	nans( [ 2, 2 ], { 'submode': 5 } ); // $ExpectError
	nans( [ 2, 2 ], { 'submode': false } ); // $ExpectError
	nans( [ 2, 2 ], { 'submode': true } ); // $ExpectError
	nans( [ 2, 2 ], { 'submode': [ '5' ] } ); // $ExpectError
	nans( [ 2, 2 ], { 'submode': {} } ); // $ExpectError
	nans( [ 2, 2 ], { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	nans( [ 2, 2 ], { 'readonly': '5' } ); // $ExpectError
	nans( [ 2, 2 ], { 'readonly': 5 } ); // $ExpectError
	nans( [ 2, 2 ], { 'readonly': [ '5' ] } ); // $ExpectError
	nans( [ 2, 2 ], { 'readonly': {} } ); // $ExpectError
	nans( [ 2, 2 ], { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nans(); // $ExpectError
	nans( [ 2, 2 ], {}, 1 ); // $ExpectError
}
