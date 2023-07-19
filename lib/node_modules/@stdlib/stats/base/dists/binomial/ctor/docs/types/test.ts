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

import Binomial = require( './index' );


// TESTS //

// The function returns a distribution instance...
{
	new Binomial(); // $ExpectType Binomial
	new Binomial( 5, 0.5 ); // $ExpectType Binomial
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	new Binomial( true, 0.5 ); // $ExpectError
	new Binomial( false, 0.5 ); // $ExpectError
	new Binomial( '5', 0.5 ); // $ExpectError
	new Binomial( [], 0.5 ); // $ExpectError
	new Binomial( {}, 0.5 ); // $ExpectError
	new Binomial( ( x: number ): number => x, 0.5 ); // $ExpectError

	new Binomial( 1, true ); // $ExpectError
	new Binomial( 1, false ); // $ExpectError
	new Binomial( 1, '5' ); // $ExpectError
	new Binomial( 1, [] ); // $ExpectError
	new Binomial( 1, {} ); // $ExpectError
	new Binomial( 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	new Binomial( 5 ); // $ExpectError
	new Binomial( 5, 0.5, 0.5 ); // $ExpectError
}
