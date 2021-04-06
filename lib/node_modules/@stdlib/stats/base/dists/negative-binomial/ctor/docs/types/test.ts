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

import NegativeBinomial = require( './index' );


// TESTS //

// The function returns a distribution instance...
{
	new NegativeBinomial(); // $ExpectType NegativeBinomial
	new NegativeBinomial( 5, 0.5 ); // $ExpectType NegativeBinomial
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	new NegativeBinomial( true, 0.5 ); // $ExpectError
	new NegativeBinomial( false, 0.5 ); // $ExpectError
	new NegativeBinomial( '5', 0.5 ); // $ExpectError
	new NegativeBinomial( [], 0.5 ); // $ExpectError
	new NegativeBinomial( {}, 0.5 ); // $ExpectError
	new NegativeBinomial( ( x: number ): number => x, 0.5 ); // $ExpectError

	new NegativeBinomial( 1, true ); // $ExpectError
	new NegativeBinomial( 1, false ); // $ExpectError
	new NegativeBinomial( 1, '5' ); // $ExpectError
	new NegativeBinomial( 1, [] ); // $ExpectError
	new NegativeBinomial( 1, {} ); // $ExpectError
	new NegativeBinomial( 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	new NegativeBinomial( 5 ); // $ExpectError
	new NegativeBinomial( 5, 0.5, 0.5 ); // $ExpectError
}
