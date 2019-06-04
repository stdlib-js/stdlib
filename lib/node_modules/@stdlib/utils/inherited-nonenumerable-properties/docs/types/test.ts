/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import inheritedNonEnumerableProperties = require( './index' );


// TESTS //

// The function returns an array of strings or symbols...
{
	inheritedNonEnumerableProperties( { 'beep': 'boop', 'foo': 3.14 } ); // $ExpectType (string | symbol)[]
	inheritedNonEnumerableProperties( { 'beep': 'boop', 'foo': 3.14 }, 1 ); // $ExpectType (string | symbol)[]
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	inheritedNonEnumerableProperties( [], 'abc' ); // $ExpectError
	inheritedNonEnumerableProperties( [], false ); // $ExpectError
	inheritedNonEnumerableProperties( [], true ); // $ExpectError
	inheritedNonEnumerableProperties( [], [] ); // $ExpectError
	inheritedNonEnumerableProperties( [], {} ); // $ExpectError
	inheritedNonEnumerableProperties( [], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	inheritedNonEnumerableProperties(); // $ExpectError
	inheritedNonEnumerableProperties( [], 2, 2 ); // $ExpectError
}
