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

import isBetween = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isBetween( 3, 1, 4 ); // $ExpectType boolean
	isBetween( 3.14, 3.14, 4.0, 'open', 'closed' ); // $ExpectType boolean
	isBetween( 3.14, 3.14, 4.0, 'open' ); // $ExpectType boolean
}

// The function does not compile if provided a fourth argument that is not a recognized string...
{
	isBetween( 3.14, 3.14, 4.0, [] ); // $ExpectError
	isBetween( 3.14, 3.14, 4.0, {} ); // $ExpectError
	isBetween( 3.14, 3.14, 4.0, 123 ); // $ExpectError
	isBetween( 3.14, 3.14, 4.0, 'abc' ); // $ExpectError
	isBetween( 3.14, 3.14, 4.0, null ); // $ExpectError
	isBetween( 3.14, 3.14, 4.0, true ); // $ExpectError
	isBetween( 3.14, 3.14, 4.0, false ); // $ExpectError
}

// The function does not compile if provided a fifth argument that is not a recognized string...
{
	isBetween( 3.14, 3.14, 4.0, 'open', [] ); // $ExpectError
	isBetween( 3.14, 3.14, 4.0, 'open', {} ); // $ExpectError
	isBetween( 3.14, 3.14, 4.0, 'open', 123 ); // $ExpectError
	isBetween( 3.14, 3.14, 4.0, 'open', 'abc' ); // $ExpectError
	isBetween( 3.14, 3.14, 4.0, 'open', null ); // $ExpectError
	isBetween( 3.14, 3.14, 4.0, 'open', true ); // $ExpectError
	isBetween( 3.14, 3.14, 4.0, 'open', false ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	isBetween(); // $ExpectError
	isBetween( 1 ); // $ExpectError
	isBetween( 1, 2 ); // $ExpectError
}
