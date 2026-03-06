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

import reviveComplex128 = require( './index' );


// TESTS //

// The function revives a serialized object...
{
	const o = {
		'type': 'Complex128',
		're': 5,
		'im': 3
	};
	reviveComplex128( 'foo', o ); // $ExpectType any
}

// The compiler throws an error if the function is provided a first argument that is not a string...
{
	reviveComplex128( true, 1 ); // $ExpectError
	reviveComplex128( false, 1 ); // $ExpectError
	reviveComplex128( null, 1 ); // $ExpectError
	reviveComplex128( undefined, 1 ); // $ExpectError
	reviveComplex128( 5, 1 ); // $ExpectError
	reviveComplex128( [], 1 ); // $ExpectError
	reviveComplex128( {}, 1 ); // $ExpectError
	reviveComplex128( ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	reviveComplex128(); // $ExpectError
	reviveComplex128( 'beep' ); // $ExpectError
}
