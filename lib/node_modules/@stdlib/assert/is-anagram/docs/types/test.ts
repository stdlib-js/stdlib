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

import isAnagram = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isAnagram( 'I am a weakish speller', 'William Shakespeare' ); // $ExpectType boolean
	isAnagram( 'bat', 'tabba' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an invalid first argument...
{
	isAnagram( 5, 'a' ); // $ExpectError
	isAnagram( true, 'a' ); // $ExpectError
	isAnagram( false, 'a' ); // $ExpectError
	isAnagram( null, 'a' ); // $ExpectError
	isAnagram( {}, 'a' ); // $ExpectError
	isAnagram( [], 'a' ); // $ExpectError
	isAnagram( ( x: number ): number => x, 'a' ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isAnagram(); // $ExpectError
	isAnagram( 'bat' ); // $ExpectError
}
