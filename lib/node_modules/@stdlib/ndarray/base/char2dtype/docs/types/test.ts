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

import char2dtype = require( './index' );


// TESTS //

// The function returns a table if not provided an argument...
{
	char2dtype(); // $ExpectType Table
}

// The function returns a string or null if provided an argument...
{
	char2dtype( 'd' ); // $ExpectType string | null
	char2dtype( 'f' ); // $ExpectType string | null
}

// The compiler throws an error if the function is provided a value other than a string...
{
	char2dtype( true ); // $ExpectError
	char2dtype( false ); // $ExpectError
	char2dtype( null ); // $ExpectError
	char2dtype( undefined ); // $ExpectError
	char2dtype( 5 ); // $ExpectError
	char2dtype( [] ); // $ExpectError
	char2dtype( {} ); // $ExpectError
	char2dtype( ( x: number ): number => x ); // $ExpectError
}
