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

import zeros = require( './index' );


// TESTS //

// The function returns an array...
{
	zeros( 3 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided an argument which is not a number...
{
	zeros( 'abc' ); // $ExpectError
	zeros( true ); // $ExpectError
	zeros( false ); // $ExpectError
	zeros( null ); // $ExpectError
	zeros( [] ); // $ExpectError
	zeros( {} ); // $ExpectError
	zeros( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zeros(); // $ExpectError
	zeros( 3, 2 ); // $ExpectError
}
