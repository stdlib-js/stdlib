/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import incrementOffsets = require( './index' );


// TESTS //

// The function returns an array...
{
	incrementOffsets( [ 1 ], [ 0 ] ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing numbers...
{
	incrementOffsets( '5', [ 0 ] ); // $ExpectError
	incrementOffsets( 5, [ 0 ] ); // $ExpectError
	incrementOffsets( true, [ 0 ] ); // $ExpectError
	incrementOffsets( false, [ 0 ] ); // $ExpectError
	incrementOffsets( null, [ 0 ] ); // $ExpectError
	incrementOffsets( {}, [ 0 ] ); // $ExpectError
	incrementOffsets( [ '5' ], [ 0 ] ); // $ExpectError
	incrementOffsets( ( x: number ): number => x, [ 0 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	incrementOffsets( [ 1 ], '5' ); // $ExpectError
	incrementOffsets( [ 1 ], 5 ); // $ExpectError
	incrementOffsets( [ 1 ], true ); // $ExpectError
	incrementOffsets( [ 1 ], false ); // $ExpectError
	incrementOffsets( [ 1 ], null ); // $ExpectError
	incrementOffsets( [ 1 ], {} ); // $ExpectError
	incrementOffsets( [ 1 ], [ '5' ] ); // $ExpectError
	incrementOffsets( [ 1 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const arr = [ 1 ];

	incrementOffsets(); // $ExpectError
	incrementOffsets( arr ); // $ExpectError
	incrementOffsets( arr, [ 0 ], {} ); // $ExpectError
}
