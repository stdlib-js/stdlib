/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import insertAt = require( './index' );


// TESTS //

// The function returns an array...
{
	insertAt( [ 1, 2, 3 ], -1, 4 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	insertAt( '5', -1, 4 ); // $ExpectError
	insertAt( 5, -1, 4 ); // $ExpectError
	insertAt( true, -1, 4 ); // $ExpectError
	insertAt( false, -1, 4 ); // $ExpectError
	insertAt( null, -1, 4 ); // $ExpectError
	insertAt( void 0, -1, 4 ); // $ExpectError
	insertAt( {}, -1, 4 ); // $ExpectError
	insertAt( ( x: number ): number => x, -1, 4 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	insertAt( x, '5', 4 ); // $ExpectError
	insertAt( x, true, 4 ); // $ExpectError
	insertAt( x, false, 4 ); // $ExpectError
	insertAt( x, null, 4 ); // $ExpectError
	insertAt( x, void 0, 4 ); // $ExpectError
	insertAt( x, {}, 4 ); // $ExpectError
	insertAt( x, [], 4 ); // $ExpectError
	insertAt( x, ( x: number ): number => x, 4 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];

	insertAt(); // $ExpectError
	insertAt( x ); // $ExpectError
	insertAt( x, -1 ); // $ExpectError
	insertAt( x, -1, 4, {} ); // $ExpectError
}
