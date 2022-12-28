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

import ordinalize = require( './index' );


// TESTS //

// The function returns a string...
{
	ordinalize( '3' ); // $ExpectType string
	ordinalize( '5', { 'lang': 'es' } ); // $ExpectType string
	ordinalize( 7, { 'suffixOnly': true } ); // $ExpectType string
	ordinalize( 5, { 'lang': 'it', 'gender': 'feminine' } ); // $ExpectType string
}

//  The compiler throws an error if the function is not provided a string or number as its first argument...
{
	ordinalize( true ); // $ExpectError
	ordinalize( false ); // $ExpectError
	ordinalize( [] ); // $ExpectError
	ordinalize( {} ); // $ExpectError
	ordinalize( ( x: number ): number => x ); // $ExpectError

	ordinalize( true, {} ); // $ExpectError
	ordinalize( false, {} ); // $ExpectError
	ordinalize( [], {} ); // $ExpectError
	ordinalize( {}, {} ); // $ExpectError
	ordinalize( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	ordinalize( '2', null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `lang` option which is not a recognized language code...
{
	ordinalize( 3, { 'lang': 'hello' } ); // $ExpectError
	ordinalize( 3, { 'lang': 123 } ); // $ExpectError
	ordinalize( 3, { 'lang': true } ); // $ExpectError
	ordinalize( 3, { 'lang': false } ); // $ExpectError
	ordinalize( 3, { 'lang': {} } ); // $ExpectError
	ordinalize( 3, { 'lang': [] } ); // $ExpectError
	ordinalize( 3, { 'lang': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `suffixOnly` option which is not a boolean...
{
	ordinalize( 3, { 'suffixOnly': 123 } ); // $ExpectError
	ordinalize( 3, { 'suffixOnly': 'abc' } ); // $ExpectError
	ordinalize( 3, { 'suffixOnly': {} } ); // $ExpectError
	ordinalize( 3, { 'suffixOnly': [] } ); // $ExpectError
	ordinalize( 3, { 'suffixOnly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `gender` option which is not a recognized grammatical gender...
{
	ordinalize( 3, { 'gender': 'world!' } ); // $ExpectError
	ordinalize( 3, { 'gender': 123 } ); // $ExpectError
	ordinalize( 3, { 'gender': true } ); // $ExpectError
	ordinalize( 3, { 'gender': false } ); // $ExpectError
	ordinalize( 3, { 'gender': {} } ); // $ExpectError
	ordinalize( 3, { 'gender': [] } ); // $ExpectError
	ordinalize( 3, { 'gender': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	ordinalize(); // $ExpectError
}
