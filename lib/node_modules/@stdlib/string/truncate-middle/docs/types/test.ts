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

import truncateMiddle = require( './index' );


// TESTS //

// The function returns a string...
{
	truncateMiddle( 'abcdefghi', 3 ); // $ExpectType string
	truncateMiddle( 'abcdefghi', 10, '|' ); // $ExpectType string
}

//  The compiler throws an error if the function is not provided a string as its first argument...
{
	truncateMiddle( true, 6 ); // $ExpectError
	truncateMiddle( false, 6 ); // $ExpectError
	truncateMiddle( 3, 6 ); // $ExpectError
	truncateMiddle( [], 6 ); // $ExpectError
	truncateMiddle( {}, 6 ); // $ExpectError
	truncateMiddle( ( x: number ): number => x, 6 ); // $ExpectError
}

//  The compiler throws an error if the function is not provided a number as its second argument...
{
	truncateMiddle( 'abd', true ); // $ExpectError
	truncateMiddle( 'abd', false ); // $ExpectError
	truncateMiddle( 'abd', 'abc' ); // $ExpectError
	truncateMiddle( 'abd', [], 0 ); // $ExpectError
	truncateMiddle( 'abd', {}, 0 ); // $ExpectError
	truncateMiddle( 'abd', ( x: number ): number => x, 0 ); // $ExpectError
}

//  The compiler throws an error if the function is not provided a string as its third argument...
{
	truncateMiddle( 'beep boop', 4, true ); // $ExpectError
	truncateMiddle( 'beep boop', 4, false ); // $ExpectError
	truncateMiddle( 'beep boop', 4, 123 ); // $ExpectError
	truncateMiddle( 'beep boop', 4, [], 0 ); // $ExpectError
	truncateMiddle( 'beep boop', 4, {}, 0 ); // $ExpectError
	truncateMiddle( 'beep boop', 4, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	truncateMiddle(); // $ExpectError
	truncateMiddle( 'abc', 4, '|', true ); // $ExpectError
}
