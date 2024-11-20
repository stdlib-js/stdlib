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

import maxViewBufferIndex = require( './index' );


// TESTS //

// The function returns a number...
{
	maxViewBufferIndex( 3, -2, 10 ); // $ExpectType number
}

// The compiler throws an error if not provided a first argument which is a number...
{
	maxViewBufferIndex( '10', -2, 10 ); // $ExpectError
	maxViewBufferIndex( true, -2, 10 ); // $ExpectError
	maxViewBufferIndex( false, -2, 10 ); // $ExpectError
	maxViewBufferIndex( null, -2, 10 ); // $ExpectError
	maxViewBufferIndex( undefined, -2, 10 ); // $ExpectError
	maxViewBufferIndex( [], -2, 10 ); // $ExpectError
	maxViewBufferIndex( {}, -2, 10 ); // $ExpectError
	maxViewBufferIndex( ( x: number ): number => x, -2, 10 ); // $ExpectError
}

// The compiler throws an error if not provided a second argument which is a number...
{
	maxViewBufferIndex( 3, '10', 10 ); // $ExpectError
	maxViewBufferIndex( 3, true, 10 ); // $ExpectError
	maxViewBufferIndex( 3, false, 10 ); // $ExpectError
	maxViewBufferIndex( 3, null, 10 ); // $ExpectError
	maxViewBufferIndex( 3, undefined, 10 ); // $ExpectError
	maxViewBufferIndex( 3, [], 10 ); // $ExpectError
	maxViewBufferIndex( 3, {}, 10 ); // $ExpectError
	maxViewBufferIndex( 3, ( x: number ): number => x, 10 ); // $ExpectError
}

// The compiler throws an error if not provided a third argument which is a number...
{
	maxViewBufferIndex( 3, -2, '10' ); // $ExpectError
	maxViewBufferIndex( 3, -2, true ); // $ExpectError
	maxViewBufferIndex( 3, -2, false ); // $ExpectError
	maxViewBufferIndex( 3, -2, null ); // $ExpectError
	maxViewBufferIndex( 3, -2, undefined ); // $ExpectError
	maxViewBufferIndex( 3, -2, [] ); // $ExpectError
	maxViewBufferIndex( 3, -2, {} ); // $ExpectError
	maxViewBufferIndex( 3, -2, ( x: number ): number => x ); // $ExpectError
}
