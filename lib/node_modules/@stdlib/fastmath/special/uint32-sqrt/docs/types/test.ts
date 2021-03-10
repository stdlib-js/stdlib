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

import sqrt = require( './index' );


// TESTS //

// The function returns a number...
{
	sqrt( 9 >>> 0 ); // $ExpectType number
}

// The function does not compile if provided a value other than a number...
{
	sqrt( true ); // $ExpectError
	sqrt( false ); // $ExpectError
	sqrt( null ); // $ExpectError
	sqrt( undefined ); // $ExpectError
	sqrt( '5' ); // $ExpectError
	sqrt( [] ); // $ExpectError
	sqrt( {} ); // $ExpectError
	sqrt( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	sqrt(); // $ExpectError
}
