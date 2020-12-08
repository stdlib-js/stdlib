/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import identityf = require( './index' );


// TESTS //

// The function returns a number...
{
	identityf( 8 ); // $ExpectType number
}

// The function does not compile if provided a value other than a number...
{
	identityf( true ); // $ExpectError
	identityf( false ); // $ExpectError
	identityf( null ); // $ExpectError
	identityf( undefined ); // $ExpectError
	identityf( '5' ); // $ExpectError
	identityf( [] ); // $ExpectError
	identityf( {} ); // $ExpectError
	identityf( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	identityf(); // $ExpectError
}
