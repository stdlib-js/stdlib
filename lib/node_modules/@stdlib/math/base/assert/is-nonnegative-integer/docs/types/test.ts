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

import isNonNegativeInteger = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isNonNegativeInteger( 2 ); // $ExpectType boolean
	isNonNegativeInteger( 3.12 ); // $ExpectType boolean
	isNonNegativeInteger( -2 ); // $ExpectType boolean
}

// The function does not compile if provided a value other than a number...
{
	isNonNegativeInteger( true ); // $ExpectError
	isNonNegativeInteger( false ); // $ExpectError
	isNonNegativeInteger( null ); // $ExpectError
	isNonNegativeInteger( undefined ); // $ExpectError
	isNonNegativeInteger( [] ); // $ExpectError
	isNonNegativeInteger( {} ); // $ExpectError
	isNonNegativeInteger( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isNonNegativeInteger(); // $ExpectError
	isNonNegativeInteger( undefined, 123 ); // $ExpectError
}
