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

import expm1rel = require( './index' );


// TESTS //

// The function returns a number...
{
	expm1rel( 0.5 ); // $ExpectType number
}

// The function does not compile if provided a value other than a number...
{
	expm1rel( true ); // $ExpectError
	expm1rel( false ); // $ExpectError
	expm1rel( null ); // $ExpectError
	expm1rel( undefined ); // $ExpectError
	expm1rel( '5' ); // $ExpectError
	expm1rel( [] ); // $ExpectError
	expm1rel( {} ); // $ExpectError
	expm1rel( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	expm1rel(); // $ExpectError
}
