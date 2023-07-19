/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import codePointAt = require( './index' );


// TESTS //

// The function returns a number...
{
	codePointAt( 'last man standing', 4, false ); // $ExpectType number
	codePointAt( 'presidential election', 8, true ); // $ExpectType number
	codePointAt( 'अनुच्छेद', 2, false ); // $ExpectType number
	codePointAt( '🌷', 1, true ); // $ExpectType number
}

// The compiler throws an error if the function is provided incorrect arguments...
{
	codePointAt( false, 3, false ); // $ExpectError
	codePointAt( {}, 3, false ); // $ExpectError
	codePointAt( ( x: number ): number => x, 3, false ); // $ExpectError

	codePointAt( 'string', true, false ); // $ExpectError
	codePointAt( 'string', false, false ); // $ExpectError
	codePointAt( 'string', {}, false ); // $ExpectError
	codePointAt( 'string', ( x: number ): number => x, false ); // $ExpectError

	codePointAt( 'string', 2, {} ); // $ExpectError
	codePointAt( 'string', 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	codePointAt(); // $ExpectError
	codePointAt( 'abc' ); // $ExpectError
	codePointAt( 'abc', 0 ); // $ExpectError
}
