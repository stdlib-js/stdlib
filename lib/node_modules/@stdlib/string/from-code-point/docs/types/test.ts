/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import fromCodePoint = require( './index' );


// TESTS //

// The function returns a string...
{
	fromCodePoint( 9731 ); // $ExpectType string
	fromCodePoint( 97, 98, 99 ); // $ExpectType string
	fromCodePoint( new Uint16Array( [ 97, 98, 99 ] ) ); // $ExpectType string
}

// The function does not compile if provided neither numeric values nor an array-like object of numbers...
{
	fromCodePoint( true ); // $ExpectError
	fromCodePoint( false ); // $ExpectError
	fromCodePoint( null ); // $ExpectError
	fromCodePoint( undefined ); // $ExpectError
	fromCodePoint( {} ); // $ExpectError
	fromCodePoint( ( x: number ): number => x ); // $ExpectError

	fromCodePoint( 97, true ); // $ExpectError
	fromCodePoint( 97, false ); // $ExpectError
	fromCodePoint( 97, null ); // $ExpectError
	fromCodePoint( 97, undefined ); // $ExpectError
	fromCodePoint( 97, {} ); // $ExpectError
	fromCodePoint( 97, ( x: number ): number => x ); // $ExpectError

	fromCodePoint( 97, 98, true ); // $ExpectError
	fromCodePoint( 97, 98, false ); // $ExpectError
	fromCodePoint( 97, 98, null ); // $ExpectError
	fromCodePoint( 97, 98, undefined ); // $ExpectError
	fromCodePoint( 97, 98, {} ); // $ExpectError
	fromCodePoint( 97, 98, ( x: number ): number => x ); // $ExpectError
}
