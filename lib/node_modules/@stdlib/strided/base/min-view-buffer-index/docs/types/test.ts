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

import minViewBufferIndex = require( './index' );


// TESTS //

// The function returns a number...
{
	minViewBufferIndex( 3, -2, 10 ); // $ExpectType number
}

// The compiler throws an error if not provided a first argument which is a number...
{
	minViewBufferIndex( '10', -2, 10 ); // $ExpectError
	minViewBufferIndex( true, -2, 10 ); // $ExpectError
	minViewBufferIndex( false, -2, 10 ); // $ExpectError
	minViewBufferIndex( null, -2, 10 ); // $ExpectError
	minViewBufferIndex( undefined, -2, 10 ); // $ExpectError
	minViewBufferIndex( [], -2, 10 ); // $ExpectError
	minViewBufferIndex( {}, -2, 10 ); // $ExpectError
	minViewBufferIndex( ( x: number ): number => x, -2, 10 ); // $ExpectError
}

// The compiler throws an error if not provided a second argument which is a number...
{
	minViewBufferIndex( 3, '10', 10 ); // $ExpectError
	minViewBufferIndex( 3, true, 10 ); // $ExpectError
	minViewBufferIndex( 3, false, 10 ); // $ExpectError
	minViewBufferIndex( 3, null, 10 ); // $ExpectError
	minViewBufferIndex( 3, undefined, 10 ); // $ExpectError
	minViewBufferIndex( 3, [], 10 ); // $ExpectError
	minViewBufferIndex( 3, {}, 10 ); // $ExpectError
	minViewBufferIndex( 3, ( x: number ): number => x, 10 ); // $ExpectError
}

// The compiler throws an error if not provided a third argument which is a number...
{
	minViewBufferIndex( 3, -2, '10' ); // $ExpectError
	minViewBufferIndex( 3, -2, true ); // $ExpectError
	minViewBufferIndex( 3, -2, false ); // $ExpectError
	minViewBufferIndex( 3, -2, null ); // $ExpectError
	minViewBufferIndex( 3, -2, undefined ); // $ExpectError
	minViewBufferIndex( 3, -2, [] ); // $ExpectError
	minViewBufferIndex( 3, -2, {} ); // $ExpectError
	minViewBufferIndex( 3, -2, ( x: number ): number => x ); // $ExpectError
}
