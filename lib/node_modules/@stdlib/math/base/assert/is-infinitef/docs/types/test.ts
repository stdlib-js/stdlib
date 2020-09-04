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

import isInfinitef = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isInfinitef( 2 ); // $ExpectType boolean
	isInfinitef( 3 ); // $ExpectType boolean
}

// The function does not compile if provided a value other than a number...
{
	isInfinitef( true ); // $ExpectError
	isInfinitef( false ); // $ExpectError
	isInfinitef( null ); // $ExpectError
	isInfinitef( undefined ); // $ExpectError
	isInfinitef( [] ); // $ExpectError
	isInfinitef( {} ); // $ExpectError
	isInfinitef( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isInfinitef(); // $ExpectError
	isInfinitef( undefined, 123 ); // $ExpectError
}
