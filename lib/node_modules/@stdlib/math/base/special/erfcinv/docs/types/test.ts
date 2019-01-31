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

import erfcinv = require( './index' );


// TESTS //

// The function returns a number...
{
	erfcinv( 1.8 ); // $ExpectType number
}

// The function does not compile if provided a value other than a number...
{
	erfcinv( true ); // $ExpectError
	erfcinv( false ); // $ExpectError
	erfcinv( null ); // $ExpectError
	erfcinv( undefined ); // $ExpectError
	erfcinv( '5' ); // $ExpectError
	erfcinv( [] ); // $ExpectError
	erfcinv( {} ); // $ExpectError
	erfcinv( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	erfcinv(); // $ExpectError
}
