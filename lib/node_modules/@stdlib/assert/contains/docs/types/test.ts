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

import contains = require( './index' );


// TESTS //

// The function returns a boolean...
{
	contains( 'abd', 'a' ); // $ExpectType boolean
	contains( 'To be, or not to be, that is the question.', 'question', 10 ); // $ExpectType boolean
	contains( 'abd', 'ab', 2 ); // $ExpectType boolean
	contains( [ 1, 2, 3, 4, 5, 6 ], 2 ); // $ExpectType boolean
	contains( [ 1, 2, 3, 4, 5, 6 ], 2, 3 ); // $ExpectType boolean
}

// The function does not compile if provided arguments having invalid types...
{
	contains( true, 'd' ); // $ExpectError
	contains( false, 'd' ); // $ExpectError
	contains( 3, 'd', 3 ); // $ExpectError
	contains( {}, 'd', 3 ); // $ExpectError

	contains( 'abd', 'a', true ); // $ExpectError
	contains( 'abd', 'a', false ); // $ExpectError
	contains( 'abd', 'a', [] ); // $ExpectError
	contains( 'abd', 'a', {} ); // $ExpectError
	contains( 'abd', 'a', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	contains(); // $ExpectError
	contains( 'abc' ); // $ExpectError
}
