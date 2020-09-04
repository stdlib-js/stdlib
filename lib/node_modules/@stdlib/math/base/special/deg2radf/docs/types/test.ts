/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import deg2radf = require( './index' );


// TESTS //

// The function returns a number...
{
	deg2radf( 8 ); // $ExpectType number
}

// The function does not compile if provided a value other than a number...
{
	deg2radf( true ); // $ExpectError
	deg2radf( false ); // $ExpectError
	deg2radf( null ); // $ExpectError
	deg2radf( undefined ); // $ExpectError
	deg2radf( '5' ); // $ExpectError
	deg2radf( [] ); // $ExpectError
	deg2radf( {} ); // $ExpectError
	deg2radf( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	deg2radf(); // $ExpectError
}
