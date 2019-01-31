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

import ceil10 = require( './index' );


// TESTS //

// The function returns a number...
{
	ceil10( 8 ); // $ExpectType number
}

// The function does not compile if provided a value other than a number...
{
	ceil10( true ); // $ExpectError
	ceil10( false ); // $ExpectError
	ceil10( null ); // $ExpectError
	ceil10( undefined ); // $ExpectError
	ceil10( '5' ); // $ExpectError
	ceil10( [] ); // $ExpectError
	ceil10( {} ); // $ExpectError
	ceil10( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	ceil10(); // $ExpectError
}
