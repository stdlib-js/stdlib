/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import acronym = require( './index' );


// TESTS //

// The function returns a string...
{
	acronym( 'Hard-boiled eggs' ); // $ExpectType string
	const opts = {
		'stopwords': []
	};
	acronym( 'To be determined', opts ); // $ExpectType string
}

//  The compiler throws an error if the function is not provided a string as its first argument...
{
	acronym( true, 6 ); // $ExpectError
	acronym( false, 6 ); // $ExpectError
	acronym( 3, 6 ); // $ExpectError
	acronym( [], 6 ); // $ExpectError
	acronym( {}, 6 ); // $ExpectError
	acronym( ( x: number ): number => x, 6 ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	acronym( 'beep boop', null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `stopwords` option which is not an array of strings...
{
	acronym( 'beep boop', { 'stopwords': 'abc' } ); // $ExpectError
	acronym( 'beep boop', { 'stopwords': 123 } ); // $ExpectError
	acronym( 'beep boop', { 'stopwords': true } ); // $ExpectError
	acronym( 'beep boop', { 'stopwords': false } ); // $ExpectError
	acronym( 'beep boop', { 'stopwords': {} } ); // $ExpectError
	acronym( 'beep boop', { 'stopwords': [ 1, 2, 3 ] } ); // $ExpectError
	acronym( 'beep boop', { 'stopwords': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	acronym(); // $ExpectError
}
