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

import isOddf = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isOddf( 2 ); // $ExpectType boolean
	isOddf( 3 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a value other than a number...
{
	isOddf( true ); // $ExpectError
	isOddf( false ); // $ExpectError
	isOddf( null ); // $ExpectError
	isOddf( undefined ); // $ExpectError
	isOddf( [] ); // $ExpectError
	isOddf( {} ); // $ExpectError
	isOddf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isOddf(); // $ExpectError
	isOddf( undefined, 123 ); // $ExpectError
}
