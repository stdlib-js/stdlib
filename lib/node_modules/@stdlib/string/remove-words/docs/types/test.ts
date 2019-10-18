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

import removeWords = require( './index' );


// TESTS //

// The function returns a string...
{
	removeWords( 'beep boop Foo bar', [ 'foo', 'bar' ] ); // $ExpectType string
	removeWords( 'beep boop Foo bar', [ 'foo', 'bar' ], true ); // $ExpectType string
}

// The function does not compile if provided a value other than a string as its first argument...
{
	const words = [ 'foo', 'bar' ];
	removeWords( true, words ); // $ExpectError
	removeWords( false, words ); // $ExpectError
	removeWords( null, words ); // $ExpectError
	removeWords( undefined, words ); // $ExpectError
	removeWords( 5, words ); // $ExpectError
	removeWords( [], words, false ); // $ExpectError
	removeWords( {}, words, true ); // $ExpectError
	removeWords( ( x: number ): number => x, words, false ); // $ExpectError
}

// The function does not compile if provided a value other than an array of strings as its second argument...
{
	removeWords( 'beep boop Foo bar', 'abc' ); // $ExpectError
	removeWords( 'beep boop Foo bar', 123 ); // $ExpectError
	removeWords( 'beep boop Foo bar', true ); // $ExpectError
	removeWords( 'beep boop Foo bar', false, true ); // $ExpectError
	removeWords( 'beep boop Foo bar', {}, false ); // $ExpectError
	removeWords( 'beep boop Foo bar', ( x: number ): number => x, true ); // $ExpectError
}

// The function does not compile if provided a value other than a boolean as its third argument...
{
	const words = [ 'foo', 'bar' ];
	removeWords( 'beep boop Foo bar', words, 'abc' ); // $ExpectError
	removeWords( 'beep boop Foo bar', words, 123 ); // $ExpectError
	removeWords( 'beep boop Foo bar', words, [] ); // $ExpectError
	removeWords( 'beep boop Foo bar', words, {} ); // $ExpectError
	removeWords( 'beep boop Foo bar', words, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided an insufficient number of arguments...
{
	removeWords(); // $ExpectError
	removeWords( 'beep boop Foo bar' ); // $ExpectError
}
