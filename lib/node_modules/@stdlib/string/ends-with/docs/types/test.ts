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

import endsWith = require( './index' );


// TESTS //

// The function returns a boolean...
{
	endsWith( 'abd', 'd' ); // $ExpectType boolean
	endsWith( 'To be, or not to be, that is the question.', 'b', 19 ); // $ExpectType boolean
	endsWith( 'abd', 'ab', 2 ); // $ExpectType boolean
}

// The function does not compile if provided arguments having invalid types...
{
	endsWith( true, 'd' ); // $ExpectError
	endsWith( false, 'd' ); // $ExpectError
	endsWith( 3, 'd', 3 ); // $ExpectError
	endsWith( [], 'd', 3 ); // $ExpectError
	endsWith( {}, 'd', 3 ); // $ExpectError
	endsWith( ( x: number ): number => x, 'd', 0 ); // $ExpectError

	endsWith( 'abd', true ); // $ExpectError
	endsWith( 'abd', false ); // $ExpectError
	endsWith( 'abd', 5 ); // $ExpectError
	endsWith( 'abd', [], 3 ); // $ExpectError
	endsWith( 'abd', {}, 3 ); // $ExpectError
	endsWith( 'abd', ( x: number ): number => x, 0 ); // $ExpectError

	endsWith( 'abd', 'a', true ); // $ExpectError
	endsWith( 'abd', 'a', false ); // $ExpectError
	endsWith( 'abd', 'a', '5' ); // $ExpectError
	endsWith( 'abd', 'b', [] ); // $ExpectError
	endsWith( 'abd', 'b', {} ); // $ExpectError
	endsWith( 'abd', 'b', /[a-z]/ ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	endsWith(); // $ExpectError
	endsWith( 'abc' ); // $ExpectError
}
