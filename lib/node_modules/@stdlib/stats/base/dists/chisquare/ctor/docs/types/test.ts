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

import ChiSquare = require( './index' );


// TESTS //

// The function returns a distribution instance...
{
	new ChiSquare(); // $ExpectType ChiSquare
	new ChiSquare( 1.5 ); // $ExpectType ChiSquare
}

// The compiler throws an error if the function is provided a value other than a number...
{
	new ChiSquare( true ); // $ExpectError
	new ChiSquare( false ); // $ExpectError
	new ChiSquare( '5' ); // $ExpectError
	new ChiSquare( [] ); // $ExpectError
	new ChiSquare( {} ); // $ExpectError
	new ChiSquare( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of argumemts...
{
	new ChiSquare( 1.0, 2.0 ); // $ExpectError
}
