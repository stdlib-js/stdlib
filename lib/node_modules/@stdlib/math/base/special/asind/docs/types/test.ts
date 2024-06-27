/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import asind = require( './index' );


// TESTS //

// The function returns a number...
{
	asind( 0.5 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	asind( true ); // $ExpectError
	asind( false ); // $ExpectError
	asind( null ); // $ExpectError
	asind( undefined ); // $ExpectError
	asind( '5' ); // $ExpectError
	asind( [] ); // $ExpectError
	asind( {} ); // $ExpectError
	asind( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	asind(); // $ExpectError
}
