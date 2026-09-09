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

import trues = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	trues( [ 2, 2 ] ); // $ExpectType boolndarray

	trues( [ 2, 2 ], { 'dtype': 'bool' } ); // $ExpectType boolndarray
	trues( [ 2, 2 ], { 'dtype': 'generic' } ); // $ExpectType genericndarray<boolean>
}

// The compiler throws an error if the function is not provided a valid shape for the first argument...
{
	trues( '5' ); // $ExpectError
	trues( false ); // $ExpectError
	trues( true ); // $ExpectError
	trues( null ); // $ExpectError
	trues( undefined ); // $ExpectError
	trues( [ '5' ] ); // $ExpectError
	trues( {} ); // $ExpectError
	trues( ( x: number ): number => x ); // $ExpectError

	trues( '5', {} ); // $ExpectError
	trues( false, {} ); // $ExpectError
	trues( true, {} ); // $ExpectError
	trues( null, {} ); // $ExpectError
	trues( undefined, {} ); // $ExpectError
	trues( [ '5' ], {} ); // $ExpectError
	trues( {}, {} ); // $ExpectError
	trues( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	trues( [ 2, 2 ], '5' ); // $ExpectError
	trues( [ 2, 2 ], 5 ); // $ExpectError
	trues( [ 2, 2 ], false ); // $ExpectError
	trues( [ 2, 2 ], true ); // $ExpectError
	trues( [ 2, 2 ], [ '5' ] ); // $ExpectError
	trues( [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a valid data type...
{
	trues( [ 2, 2 ], { 'dtype': '5' } ); // $ExpectError
	trues( [ 2, 2 ], { 'dtype': 5 } ); // $ExpectError
	trues( [ 2, 2 ], { 'dtype': false } ); // $ExpectError
	trues( [ 2, 2 ], { 'dtype': true } ); // $ExpectError
	trues( [ 2, 2 ], { 'dtype': null } ); // $ExpectError
	trues( [ 2, 2 ], { 'dtype': undefined } ); // $ExpectError
	trues( [ 2, 2 ], { 'dtype': [ '5' ] } ); // $ExpectError
	trues( [ 2, 2 ], { 'dtype': {} } ); // $ExpectError
	trues( [ 2, 2 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a valid order...
{
	trues( [ 2, 2 ], { 'order': '5' } ); // $ExpectError
	trues( [ 2, 2 ], { 'order': 5 } ); // $ExpectError
	trues( [ 2, 2 ], { 'order': false } ); // $ExpectError
	trues( [ 2, 2 ], { 'order': true } ); // $ExpectError
	trues( [ 2, 2 ], { 'order': [ '5' ] } ); // $ExpectError
	trues( [ 2, 2 ], { 'order': {} } ); // $ExpectError
	trues( [ 2, 2 ], { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a valid mode...
{
	trues( [ 2, 2 ], { 'mode': '5' } ); // $ExpectError
	trues( [ 2, 2 ], { 'mode': 5 } ); // $ExpectError
	trues( [ 2, 2 ], { 'mode': false } ); // $ExpectError
	trues( [ 2, 2 ], { 'mode': true } ); // $ExpectError
	trues( [ 2, 2 ], { 'mode': [ '5' ] } ); // $ExpectError
	trues( [ 2, 2 ], { 'mode': {} } ); // $ExpectError
	trues( [ 2, 2 ], { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `submode` option which is not valid...
{
	trues( [ 2, 2 ], { 'submode': '5' } ); // $ExpectError
	trues( [ 2, 2 ], { 'submode': 5 } ); // $ExpectError
	trues( [ 2, 2 ], { 'submode': false } ); // $ExpectError
	trues( [ 2, 2 ], { 'submode': true } ); // $ExpectError
	trues( [ 2, 2 ], { 'submode': [ '5' ] } ); // $ExpectError
	trues( [ 2, 2 ], { 'submode': {} } ); // $ExpectError
	trues( [ 2, 2 ], { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	trues( [ 2, 2 ], { 'readonly': '5' } ); // $ExpectError
	trues( [ 2, 2 ], { 'readonly': 5 } ); // $ExpectError
	trues( [ 2, 2 ], { 'readonly': [ '5' ] } ); // $ExpectError
	trues( [ 2, 2 ], { 'readonly': {} } ); // $ExpectError
	trues( [ 2, 2 ], { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	trues(); // $ExpectError
	trues( [ 2, 2 ], {}, 1 ); // $ExpectError
}
