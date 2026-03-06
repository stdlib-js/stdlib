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

import num2words = require( './index' );


// TESTS //

// The function returns a string...
{
	num2words( 3 ); // $ExpectType string
	num2words( 5, { 'lang': 'en' } ); // $ExpectType string
}

//  The compiler throws an error if the function is not provided a number as its first argument...
{
	num2words( 'abc' ); // $ExpectError
	num2words( true ); // $ExpectError
	num2words( false ); // $ExpectError
	num2words( [] ); // $ExpectError
	num2words( {} ); // $ExpectError
	num2words( ( x: number ): number => x ); // $ExpectError

	num2words( 'abc', {} ); // $ExpectError
	num2words( true, {} ); // $ExpectError
	num2words( false, {} ); // $ExpectError
	num2words( [], {} ); // $ExpectError
	num2words( {}, {} ); // $ExpectError
	num2words( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	num2words( 2, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `lang` option which is not a recognized language code...
{
	num2words( 3, { 'lang': 'hello' } ); // $ExpectError
	num2words( 3, { 'lang': 123 } ); // $ExpectError
	num2words( 3, { 'lang': true } ); // $ExpectError
	num2words( 3, { 'lang': false } ); // $ExpectError
	num2words( 3, { 'lang': {} } ); // $ExpectError
	num2words( 3, { 'lang': [] } ); // $ExpectError
	num2words( 3, { 'lang': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	num2words(); // $ExpectError
}
