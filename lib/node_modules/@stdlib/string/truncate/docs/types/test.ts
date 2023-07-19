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

import truncate = require( './index' );


// TESTS //

// The function returns a string...
{
	truncate( 'abcdefghi', 3 ); // $ExpectType string
	truncate( 'abcdefghi', 10, '|' ); // $ExpectType string
}

//  The compiler throws an error if the function is not provided a string as its first argument...
{
	truncate( true, 6 ); // $ExpectError
	truncate( false, 6 ); // $ExpectError
	truncate( 3, 6 ); // $ExpectError
	truncate( [], 6 ); // $ExpectError
	truncate( {}, 6 ); // $ExpectError
	truncate( ( x: number ): number => x, 6 ); // $ExpectError
}

//  The compiler throws an error if the function is not provided a number as its second argument...
{
	truncate( 'abd', true ); // $ExpectError
	truncate( 'abd', false ); // $ExpectError
	truncate( 'abd', 'abc' ); // $ExpectError
	truncate( 'abd', [], 0 ); // $ExpectError
	truncate( 'abd', {}, 0 ); // $ExpectError
	truncate( 'abd', ( x: number ): number => x, 0 ); // $ExpectError
}

//  The compiler throws an error if the function is not provided a string as its third argument...
{
	truncate( 'beep boop', 4, true ); // $ExpectError
	truncate( 'beep boop', 4, false ); // $ExpectError
	truncate( 'beep boop', 4, 123 ); // $ExpectError
	truncate( 'beep boop', 4, [], 0 ); // $ExpectError
	truncate( 'beep boop', 4, {}, 0 ); // $ExpectError
	truncate( 'beep boop', 4, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	truncate(); // $ExpectError
	truncate( 'abc', 4, '|', true ); // $ExpectError
}
