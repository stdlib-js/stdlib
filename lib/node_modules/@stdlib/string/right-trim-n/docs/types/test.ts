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

import rtrimN = require( './index' );


// TESTS //

// The function returns a string...
{
	rtrimN( '   abc   ', 3 ); // $ExpectType string
	rtrimN( '~~~abc~~~', 3, '~' ); // $ExpectType
}

// The function does not compile if provided arguments having invalid types...
{
	rtrimN( true, 6 ); // $ExpectError
	rtrimN( false, 6 ); // $ExpectError
	rtrimN( 3, 6 ); // $ExpectError
	rtrimN( [], 6 ); // $ExpectError
	rtrimN( {}, 6 ); // $ExpectError
	rtrimN( ( x: number ): number => x, 6 ); // $ExpectError

	rtrimN( 'abd', true ); // $ExpectError
	rtrimN( 'abd', false ); // $ExpectError
	rtrimN( 'abd', 'abc' ); // $ExpectError
	rtrimN( 'abd', [], 0 ); // $ExpectError
	rtrimN( 'abd', {}, 0 ); // $ExpectError
	rtrimN( 'abd', ( x: number ): number => x, 0 ); // $ExpectError

	rtrimN( 'abd', 6, true ); // $ExpectError
	rtrimN( 'abd', 6, false ); // $ExpectError
	rtrimN( 'abd', 6, 123 ); // $ExpectError
	rtrimN( 'abd', 6, {} ); // $ExpectError
	rtrimN( 'abd', 6, /[a-z]/ ); // $ExpectError
}

// The function does not compile if provided an a third argument which is not a string or an array of strings...
{
	rtrimN( 'abc', 3, true ); // $ExpectError
	rtrimN( 'abc', 3, false ); // $ExpectError
	rtrimN( 'abc', 3, 123 ); // $ExpectError
	rtrimN( 'abc', 3, {} ); // $ExpectError
	rtrimN( 'abc', 3, [ true ] ); // $ExpectError
	rtrimN( 'abc', 3, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	rtrimN(); // $ExpectError
	rtrimN( 'abc' ); // $ExpectError
}
