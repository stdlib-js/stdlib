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

import startsWith = require( './index' );


// TESTS //

// The function returns a boolean...
{
	startsWith( 'abd', 'd' ); // $ExpectType boolean
	startsWith( 'abd', 'b', 1 ); // $ExpectType boolean
	startsWith( 'abd', 'ab', 1 ); // $ExpectType boolean
}

// The function does not compile if provided arguments having invalid types...
{
	startsWith( true, 'd' ); // $ExpectError
	startsWith( false, 'd' ); // $ExpectError
	startsWith( 3, 'd', 0 ); // $ExpectError
	startsWith( [], 'd', 0 ); // $ExpectError
	startsWith( {}, 'd', 0 ); // $ExpectError
	startsWith( ( x: number ): number => x, 'd', 0 ); // $ExpectError

	startsWith( 'abd', true ); // $ExpectError
	startsWith( 'abd', false ); // $ExpectError
	startsWith( 'abd', 5 ); // $ExpectError
	startsWith( 'abd', [], 0 ); // $ExpectError
	startsWith( 'abd', {}, 0 ); // $ExpectError
	startsWith( 'abd', ( x: number ): number => x, 0 ); // $ExpectError

	startsWith( 'abd', 'a', true ); // $ExpectError
	startsWith( 'abd', 'a', false ); // $ExpectError
	startsWith( 'abd', 'a', '5' ); // $ExpectError
	startsWith( 'abd', 'b', [] ); // $ExpectError
	startsWith( 'abd', 'b', {} ); // $ExpectError
	startsWith( 'abd', 'b', /[a-z]/ ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	startsWith(); // $ExpectError
	startsWith( 'abc' ); // $ExpectError
}
