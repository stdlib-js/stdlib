/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import last = require( './index' );


// TESTS //

// The function returns a string...
{
	last( 'abc', 1 ); // $ExpectType string
}

// The compiler throws an error if the function is provided a value other than a string...
{
	last( true, 1 ); // $ExpectError
	last( false, 1 ); // $ExpectError
	last( null, 1 ); // $ExpectError
	last( undefined, 1 ); // $ExpectError
	last( 5, 1 ); // $ExpectError
	last( [], 1 ); // $ExpectError
	last( {}, 1 ); // $ExpectError
	last( ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	last( 'abc', true ); // $ExpectError
	last( 'abc', false ); // $ExpectError
	last( 'abc', null ); // $ExpectError
	last( 'abc', 'abc' ); // $ExpectError
	last( 'abc', [] ); // $ExpectError
	last( 'abc', {} ); // $ExpectError
	last( 'abc', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	last(); // $ExpectError
	last( 'abc' ); // $ExpectError
	last( 'abc', 1, 2 ); // $ExpectError
}
