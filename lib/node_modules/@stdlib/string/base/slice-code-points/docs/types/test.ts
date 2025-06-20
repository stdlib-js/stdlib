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

import sliceCodePoints = require( './index' );


// TESTS //

// The function returns a string...
{
	sliceCodePoints( 'abc', 1, 2 ); // $ExpectType string
}

// The compiler throws an error if the function is provided a value other than a string...
{
	sliceCodePoints( true, 1, 2 ); // $ExpectError
	sliceCodePoints( false, 1, 2 ); // $ExpectError
	sliceCodePoints( null, 1, 2 ); // $ExpectError
	sliceCodePoints( undefined, 1, 2 ); // $ExpectError
	sliceCodePoints( 5, 1, 2 ); // $ExpectError
	sliceCodePoints( [], 1, 2 ); // $ExpectError
	sliceCodePoints( {}, 1, 2 ); // $ExpectError
	sliceCodePoints( ( x: number ): number => x, 1, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	sliceCodePoints( 'abc', true, 2 ); // $ExpectError
	sliceCodePoints( 'abc', false, 2 ); // $ExpectError
	sliceCodePoints( 'abc', null, 2 ); // $ExpectError
	sliceCodePoints( 'abc', 'abc', 2 ); // $ExpectError
	sliceCodePoints( 'abc', [], 2 ); // $ExpectError
	sliceCodePoints( 'abc', {}, 2 ); // $ExpectError
	sliceCodePoints( 'abc', ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument that is not a number...
{
	sliceCodePoints( 'abc', 1, true ); // $ExpectError
	sliceCodePoints( 'abc', 1, false ); // $ExpectError
	sliceCodePoints( 'abc', 1, null ); // $ExpectError
	sliceCodePoints( 'abc', 1, 'abc' ); // $ExpectError
	sliceCodePoints( 'abc', 1, [] ); // $ExpectError
	sliceCodePoints( 'abc', 1, {} ); // $ExpectError
	sliceCodePoints( 'abc', 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	sliceCodePoints(); // $ExpectError
	sliceCodePoints( 'abc' ); // $ExpectError
	sliceCodePoints( 'abc', 1, 2, {} ); // $ExpectError
}
