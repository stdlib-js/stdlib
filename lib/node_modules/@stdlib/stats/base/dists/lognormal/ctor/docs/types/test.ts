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

/* tslint:disable:no-unused-expression */

import Lognormal = require( './index' );


// TESTS //

// The function returns a distribution instance...
{
	new Lognormal(); // $ExpectType Lognormal
	new Lognormal( 1.0, 2.0 ); // $ExpectType Lognormal
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	new Lognormal( true, 2.0 ); // $ExpectError
	new Lognormal( false, 2.0 ); // $ExpectError
	new Lognormal( '5', 2.0 ); // $ExpectError
	new Lognormal( [], 2.0 ); // $ExpectError
	new Lognormal( {}, 2.0 ); // $ExpectError
	new Lognormal( ( x: number ): number => x, 2.0 ); // $ExpectError

	new Lognormal( 1.0, true ); // $ExpectError
	new Lognormal( 1.0, false ); // $ExpectError
	new Lognormal( 1.0, '5' ); // $ExpectError
	new Lognormal( 1.0, [] ); // $ExpectError
	new Lognormal( 1.0, {} ); // $ExpectError
	new Lognormal( 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	new Lognormal( 1.0 ); // $ExpectError
	new Lognormal( 1.0, 1.0, 2.0 ); // $ExpectError
}
