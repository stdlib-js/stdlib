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

import rad2deg = require( './index' );


// TESTS //

// The function returns a number...
{
	rad2deg( 3.141592653589793 / 2.0 ); // $ExpectType number
}

// The function does not compile if provided a value other than a number...
{
	rad2deg( true ); // $ExpectError
	rad2deg( false ); // $ExpectError
	rad2deg( null ); // $ExpectError
	rad2deg( undefined ); // $ExpectError
	rad2deg( '5' ); // $ExpectError
	rad2deg( [] ); // $ExpectError
	rad2deg( {} ); // $ExpectError
	rad2deg( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	rad2deg(); // $ExpectError
}
