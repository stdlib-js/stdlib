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

import sliceGraphemeClusters = require( './index' );


// TESTS //

// The function returns a string...
{
	sliceGraphemeClusters( 'beep', 0, 2 ); // $ExpectType string
	sliceGraphemeClusters( 'Boop', 1, 3 ); // $ExpectType string
	sliceGraphemeClusters( 'foo bar', 4, 7 ); // $ExpectType string
	sliceGraphemeClusters( '🐶🐮🐷🐰🐸', 1, 3 ); // $ExpectType string
	sliceGraphemeClusters( '🐶🐮🐷🐰🐸', -3, -1 ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument that is not a string...
{
	sliceGraphemeClusters( true, 1, 2 ); // $ExpectError
	sliceGraphemeClusters( false, 1, 2 ); // $ExpectError
	sliceGraphemeClusters( null, 1, 2 ); // $ExpectError
	sliceGraphemeClusters( undefined, 1, 2 ); // $ExpectError
	sliceGraphemeClusters( 5, 1, 2 ); // $ExpectError
	sliceGraphemeClusters( [], 1, 2 ); // $ExpectError
	sliceGraphemeClusters( {}, 1, 2 ); // $ExpectError
	sliceGraphemeClusters( ( x: number ): number => x, 1, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	sliceGraphemeClusters( 'abc', true, 2 ); // $ExpectError
	sliceGraphemeClusters( 'abc', false, 2 ); // $ExpectError
	sliceGraphemeClusters( 'abc', null, 2 ); // $ExpectError
	sliceGraphemeClusters( 'abc', 'abc', 2 ); // $ExpectError
	sliceGraphemeClusters( 'abc', [], 2 ); // $ExpectError
	sliceGraphemeClusters( 'abc', {}, 2 ); // $ExpectError
	sliceGraphemeClusters( 'abc', ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument that is not a number...
{
	sliceGraphemeClusters( 'abc', 1, true ); // $ExpectError
	sliceGraphemeClusters( 'abc', 1, false ); // $ExpectError
	sliceGraphemeClusters( 'abc', 1, null ); // $ExpectError
	sliceGraphemeClusters( 'abc', 1, 'abc' ); // $ExpectError
	sliceGraphemeClusters( 'abc', 1, [] ); // $ExpectError
	sliceGraphemeClusters( 'abc', 1, {} ); // $ExpectError
	sliceGraphemeClusters( 'abc', 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	sliceGraphemeClusters(); // $ExpectError
	sliceGraphemeClusters( 'abc' ); // $ExpectError
	sliceGraphemeClusters( 'abc', 1, 2, {} ); // $ExpectError
}
