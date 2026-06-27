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

import falses = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	falses( [ 2, 2 ] ); // $ExpectType boolndarray

	falses( [ 2, 2 ], { 'dtype': 'bool' } ); // $ExpectType boolndarray
	falses( [ 2, 2 ], { 'dtype': 'generic' } ); // $ExpectType genericndarray<boolean>
}

// The compiler throws an error if the function is not provided a valid shape for the first argument...
{
	falses( '5' ); // $ExpectError
	falses( false ); // $ExpectError
	falses( true ); // $ExpectError
	falses( null ); // $ExpectError
	falses( undefined ); // $ExpectError
	falses( [ '5' ] ); // $ExpectError
	falses( {} ); // $ExpectError
	falses( ( x: number ): number => x ); // $ExpectError

	falses( '5', {} ); // $ExpectError
	falses( false, {} ); // $ExpectError
	falses( true, {} ); // $ExpectError
	falses( null, {} ); // $ExpectError
	falses( undefined, {} ); // $ExpectError
	falses( [ '5' ], {} ); // $ExpectError
	falses( {}, {} ); // $ExpectError
	falses( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	falses( [ 2, 2 ], '5' ); // $ExpectError
	falses( [ 2, 2 ], 5 ); // $ExpectError
	falses( [ 2, 2 ], false ); // $ExpectError
	falses( [ 2, 2 ], true ); // $ExpectError
	falses( [ 2, 2 ], [ '5' ] ); // $ExpectError
	falses( [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a valid data type...
{
	falses( [ 2, 2 ], { 'dtype': '5' } ); // $ExpectError
	falses( [ 2, 2 ], { 'dtype': 5 } ); // $ExpectError
	falses( [ 2, 2 ], { 'dtype': false } ); // $ExpectError
	falses( [ 2, 2 ], { 'dtype': true } ); // $ExpectError
	falses( [ 2, 2 ], { 'dtype': null } ); // $ExpectError
	falses( [ 2, 2 ], { 'dtype': undefined } ); // $ExpectError
	falses( [ 2, 2 ], { 'dtype': [ '5' ] } ); // $ExpectError
	falses( [ 2, 2 ], { 'dtype': {} } ); // $ExpectError
	falses( [ 2, 2 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a valid order...
{
	falses( [ 2, 2 ], { 'order': '5' } ); // $ExpectError
	falses( [ 2, 2 ], { 'order': 5 } ); // $ExpectError
	falses( [ 2, 2 ], { 'order': false } ); // $ExpectError
	falses( [ 2, 2 ], { 'order': true } ); // $ExpectError
	falses( [ 2, 2 ], { 'order': [ '5' ] } ); // $ExpectError
	falses( [ 2, 2 ], { 'order': {} } ); // $ExpectError
	falses( [ 2, 2 ], { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a valid mode...
{
	falses( [ 2, 2 ], { 'mode': '5' } ); // $ExpectError
	falses( [ 2, 2 ], { 'mode': 5 } ); // $ExpectError
	falses( [ 2, 2 ], { 'mode': false } ); // $ExpectError
	falses( [ 2, 2 ], { 'mode': true } ); // $ExpectError
	falses( [ 2, 2 ], { 'mode': [ '5' ] } ); // $ExpectError
	falses( [ 2, 2 ], { 'mode': {} } ); // $ExpectError
	falses( [ 2, 2 ], { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `submode` option which is not valid...
{
	falses( [ 2, 2 ], { 'submode': '5' } ); // $ExpectError
	falses( [ 2, 2 ], { 'submode': 5 } ); // $ExpectError
	falses( [ 2, 2 ], { 'submode': false } ); // $ExpectError
	falses( [ 2, 2 ], { 'submode': true } ); // $ExpectError
	falses( [ 2, 2 ], { 'submode': [ '5' ] } ); // $ExpectError
	falses( [ 2, 2 ], { 'submode': {} } ); // $ExpectError
	falses( [ 2, 2 ], { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	falses( [ 2, 2 ], { 'readonly': '5' } ); // $ExpectError
	falses( [ 2, 2 ], { 'readonly': 5 } ); // $ExpectError
	falses( [ 2, 2 ], { 'readonly': [ '5' ] } ); // $ExpectError
	falses( [ 2, 2 ], { 'readonly': {} } ); // $ExpectError
	falses( [ 2, 2 ], { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	falses(); // $ExpectError
	falses( [ 2, 2 ], {}, 1 ); // $ExpectError
}
