/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import str2slice = require( './index' );


// TESTS //

// The function returns a Slice object (or null)...
{
	str2slice( 'Slice(0,10,2)' ); // $ExpectType Slice<number | null, number | null, number | null> | null
	str2slice( 'Slice(null,null,-2)' ); // $ExpectType Slice<number | null, number | null, number | null> | null
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	str2slice( 1 ); // $ExpectError
	str2slice( true ); // $ExpectError
	str2slice( false ); // $ExpectError
	str2slice( null ); // $ExpectError
	str2slice( undefined ); // $ExpectError
	str2slice( [] ); // $ExpectError
	str2slice( {} ); // $ExpectError
	str2slice( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	str2slice(); // $ExpectError
	str2slice( 'Slice(0,10,2)', {} ); // $ExpectError
}
