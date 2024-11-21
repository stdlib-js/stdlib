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

import getOwnPropertyDescriptor = require( './index' );


// TESTS //

// The function returns a property descriptor...
{
	getOwnPropertyDescriptor( { 'beep': 2.0, 'foo': 3.14 }, 'beep' ); // $ExpectType TypedPropertyDescriptor<any> | null
	getOwnPropertyDescriptor( { 'beep': false, 'foo': true }, 'foo' ); // $ExpectType TypedPropertyDescriptor<any> | null
}

// The compiler throws an error if the function is provided a second argument which is not a string or symbol...
{
	getOwnPropertyDescriptor( { 'beep': 2.0, 'foo': 3.14 }, true ); // $ExpectError
	getOwnPropertyDescriptor( { 'beep': 2.0, 'foo': 3.14 }, 3.12 ); // $ExpectError
	getOwnPropertyDescriptor( { 'beep': 2.0, 'foo': 3.14 }, [] ); // $ExpectError
	getOwnPropertyDescriptor( { 'beep': 2.0, 'foo': 3.14 }, {} ); // $ExpectError
	getOwnPropertyDescriptor( { 'beep': 2.0, 'foo': 3.14 }, ( x: number ): number => x * 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	getOwnPropertyDescriptor(); // $ExpectError
	getOwnPropertyDescriptor( {}, 2 ); // $ExpectError
}
