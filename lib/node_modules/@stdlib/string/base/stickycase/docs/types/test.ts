/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import stickycase from './index';

// TESTS //

// The function returns a string...
{
	stickycase( 'hello world' ); // $ExpectType string
	stickycase( 'hello world', 0.3 ); // $ExpectType string
}

// The compiler throws an error if the function is provided a value other than a string...
{
	stickycase( true ); // $ExpectError
	stickycase( false ); // $ExpectError
	stickycase( undefined ); // $ExpectError
	stickycase( 5 ); // $ExpectError
	stickycase( [] ); // $ExpectError
	stickycase( {} ); // $ExpectError
	stickycase( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the second parameter is not a number...
{
	stickycase('hello world', true); // $ExpectError
	stickycase('hello world', false); // $ExpectError
	stickycase('hello world', undefined); // $ExpectError
	stickycase('hello world', 'test'); // $ExpectError
	stickycase('hello world', []); // $ExpectError
	stickycase('hello world', {}); // $ExpectError
	stickycase('hello world', (x: number): number => x); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	stickycase(); // $ExpectError
}
