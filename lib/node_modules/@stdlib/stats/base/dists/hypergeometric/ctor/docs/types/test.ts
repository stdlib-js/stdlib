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

import Hypergeometric = require( './index' );


// TESTS //

// The function returns a distribution instance...
{
	new Hypergeometric( 20, 15, 5 ); // $ExpectType Hypergeometric
}

// The compiler throws an error if the function is provided values other than three numbers...
{
	new Hypergeometric( true, 15, 5 ); // $ExpectError
	new Hypergeometric( false, 15, 5 ); // $ExpectError
	new Hypergeometric( '5', 15, 5 ); // $ExpectError
	new Hypergeometric( [], 15, 5 ); // $ExpectError
	new Hypergeometric( {}, 15, 5 ); // $ExpectError
	new Hypergeometric( ( x: number ): number => x, 15, 5 ); // $ExpectError

	new Hypergeometric( 20, true, 5 ); // $ExpectError
	new Hypergeometric( 20, false, 5 ); // $ExpectError
	new Hypergeometric( 20, '5', 5 ); // $ExpectError
	new Hypergeometric( 20, [], 5 ); // $ExpectError
	new Hypergeometric( 20, {}, 5 ); // $ExpectError
	new Hypergeometric( 20, ( x: number ): number => x, 5 ); // $ExpectError

	new Hypergeometric( 20, 15, true ); // $ExpectError
	new Hypergeometric( 20, 15, false ); // $ExpectError
	new Hypergeometric( 20, 15, '5' ); // $ExpectError
	new Hypergeometric( 20, 15, [] ); // $ExpectError
	new Hypergeometric( 20, 15, {} ); // $ExpectError
	new Hypergeometric( 20, 15, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	new Hypergeometric( 20 ); // $ExpectError
	new Hypergeometric( 20, 15 ); // $ExpectError
	new Hypergeometric( 20, 15, 5, 0.5 ); // $ExpectError
}
