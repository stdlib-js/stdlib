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

import exponentf = require( './index' );


// TESTS //

// The function returns a number...
{
	exponentf( 0 ); // $ExpectType number
}

// The function does not compile if provided a value other than a number...
{
	exponentf( true ); // $ExpectError
	exponentf( false ); // $ExpectError
	exponentf( null ); // $ExpectError
	exponentf( undefined ); // $ExpectError
	exponentf( '5' ); // $ExpectError
	exponentf( [] ); // $ExpectError
	exponentf( {} ); // $ExpectError
	exponentf( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	exponentf(); // $ExpectError
}
