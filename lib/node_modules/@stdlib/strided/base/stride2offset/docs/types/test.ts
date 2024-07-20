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

import stride2offset = require( './index' );


// TESTS //

// The function returns a number...
{
	stride2offset( 10, -10 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	stride2offset( '5', -10 ); // $ExpectError
	stride2offset( true, -10 ); // $ExpectError
	stride2offset( false, -10 ); // $ExpectError
	stride2offset( null, -10 ); // $ExpectError
	stride2offset( undefined, -10 ); // $ExpectError
	stride2offset( [], -10 ); // $ExpectError
	stride2offset( {}, -10 ); // $ExpectError
	stride2offset( ( x: number ): number => x, -10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	stride2offset( 10, '5' ); // $ExpectError
	stride2offset( 10, true ); // $ExpectError
	stride2offset( 10, false ); // $ExpectError
	stride2offset( 10, null ); // $ExpectError
	stride2offset( 10, undefined ); // $ExpectError
	stride2offset( 10, [] ); // $ExpectError
	stride2offset( 10, {} ); // $ExpectError
	stride2offset( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	stride2offset(); // $ExpectError
	stride2offset( 3 ); // $ExpectError
	stride2offset( 3, 1, 10 ); // $ExpectError
}
