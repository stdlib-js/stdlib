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

import gamma1pm1 = require( './index' );


// TESTS //

// The function returns a number...
{
	gamma1pm1( 8 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	gamma1pm1( true ); // $ExpectError
	gamma1pm1( false ); // $ExpectError
	gamma1pm1( null ); // $ExpectError
	gamma1pm1( undefined ); // $ExpectError
	gamma1pm1( '5' ); // $ExpectError
	gamma1pm1( [] ); // $ExpectError
	gamma1pm1( {} ); // $ExpectError
	gamma1pm1( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	gamma1pm1(); // $ExpectError
}
