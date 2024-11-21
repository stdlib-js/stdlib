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

import reviver = require( './index' );


// TESTS //

// The function can be used to revive a serialized object...
{
	const o = {
		'type': 'RegExp',
		'pattern': 'ab+c',
		'flags': ''
	};
	reviver( 'foo', o ); // $ExpectType any
	reviver( 'foo', 4 ); // $ExpectType any
	reviver( 'foo', 'beep' ); // $ExpectType any
	reviver( 'foo', true ); // $ExpectType any
	reviver( 'foo', [] ); // $ExpectType any
}

// The compiler throws an error if the function is provided a first argument that is not a string...
{
	reviver( true, 1 ); // $ExpectError
	reviver( false, 1 ); // $ExpectError
	reviver( null, 1 ); // $ExpectError
	reviver( undefined, 1 ); // $ExpectError
	reviver( 5, 1 ); // $ExpectError
	reviver( [], 1 ); // $ExpectError
	reviver( {}, 1 ); // $ExpectError
	reviver( ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	reviver(); // $ExpectError
	reviver( 'beep' ); // $ExpectError
}
