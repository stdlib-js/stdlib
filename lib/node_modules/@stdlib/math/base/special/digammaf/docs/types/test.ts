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

import digammaf = require( './index' );


// TESTS //

// The function returns a number...
{
	digammaf( 2.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	digammaf( true ); // $ExpectError
	digammaf( false ); // $ExpectError
	digammaf( null ); // $ExpectError
	digammaf( undefined ); // $ExpectError
	digammaf( '5' ); // $ExpectError
	digammaf( [] ); // $ExpectError
	digammaf( {} ); // $ExpectError
	digammaf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	digammaf(); // $ExpectError
}
