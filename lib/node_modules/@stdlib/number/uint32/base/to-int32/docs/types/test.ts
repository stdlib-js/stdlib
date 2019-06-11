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

import uint32ToInt32 = require( './index' );


// TESTS //

// The function returns a number...
{
	uint32ToInt32( 23 >>> 0 ); // $ExpectType number
	uint32ToInt32( 131 >>> 0 ); // $ExpectType number
}

// The function does not compile if provided a value other than a number...
{
	uint32ToInt32( true ); // $ExpectError
	uint32ToInt32( false ); // $ExpectError
	uint32ToInt32( '5' ); // $ExpectError
	uint32ToInt32( [] ); // $ExpectError
	uint32ToInt32( {} ); // $ExpectError
	uint32ToInt32( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	uint32ToInt32(); // $ExpectError
}
