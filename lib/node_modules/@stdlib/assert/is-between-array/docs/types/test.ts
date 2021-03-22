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

import isBetweenArray = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const arr = [ 3.0, 3.14, 4.0 ];
	isBetweenArray( arr, 1, 4 ); // $ExpectType boolean
	isBetweenArray( arr, 3.14, 4.0, 'open', 'closed' ); // $ExpectType boolean
	isBetweenArray( arr, 3.14, 4.0, 'open' ); // $ExpectType boolean
}

// The function does not compile if provided a fourth argument that is not a recognized string...
{
	const arr = [ 3.0, 3.14, 4.0 ];
	isBetweenArray( arr, 3.14, 4.0, [] ); // $ExpectError
	isBetweenArray( arr, 3.14, 4.0, {} ); // $ExpectError
	isBetweenArray( arr, 3.14, 4.0, 123 ); // $ExpectError
	isBetweenArray( arr, 3.14, 4.0, 'abc' ); // $ExpectError
	isBetweenArray( arr, 3.14, 4.0, null ); // $ExpectError
	isBetweenArray( arr, 3.14, 4.0, true ); // $ExpectError
	isBetweenArray( arr, 3.14, 4.0, false ); // $ExpectError
}

// The function does not compile if provided a fifth argument that is not a recognized string...
{
	const arr = [ 3.0, 3.14, 4.0 ];
	isBetweenArray( arr, 3.14, 4.0, 'open', [] ); // $ExpectError
	isBetweenArray( arr, 3.14, 4.0, 'open', {} ); // $ExpectError
	isBetweenArray( arr, 3.14, 4.0, 'open', 123 ); // $ExpectError
	isBetweenArray( arr, 3.14, 4.0, 'open', 'abc' ); // $ExpectError
	isBetweenArray( arr, 3.14, 4.0, 'open', null ); // $ExpectError
	isBetweenArray( arr, 3.14, 4.0, 'open', true ); // $ExpectError
	isBetweenArray( arr, 3.14, 4.0, 'open', false ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	const arr = [ 3.0, 3.14, 4.0 ];
	isBetweenArray(); // $ExpectError
	isBetweenArray( arr ); // $ExpectError
	isBetweenArray( arr, 2 ); // $ExpectError
}
