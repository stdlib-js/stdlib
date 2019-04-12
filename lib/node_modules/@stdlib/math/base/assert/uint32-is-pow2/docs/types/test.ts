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

import isPow2Uint32 = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isPow2Uint32( 0.3 ); // $ExpectType boolean
	isPow2Uint32( 2 ); // $ExpectType boolean
	isPow2Uint32( 5 ); // $ExpectType boolean
}

// The function does not compile if provided a value other than a number...
{
	isPow2Uint32( true ); // $ExpectError
	isPow2Uint32( false ); // $ExpectError
	isPow2Uint32( null ); // $ExpectError
	isPow2Uint32( undefined ); // $ExpectError
	isPow2Uint32( [] ); // $ExpectError
	isPow2Uint32( {} ); // $ExpectError
	isPow2Uint32( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isPow2Uint32(); // $ExpectError
	isPow2Uint32( undefined, 123 ); // $ExpectError
}
