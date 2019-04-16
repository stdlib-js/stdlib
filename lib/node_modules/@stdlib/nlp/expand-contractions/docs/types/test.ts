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

import expandContractions = require( './index' );


// TESTS //

// The function returns a string...
{
	expandContractions( 'I won\'t be able to get y\'all out of this one.' ); // $ExpectType string
}

// The function does not compile if provided a value other than a string...
{
	expandContractions( true ); // $ExpectError
	expandContractions( false ); // $ExpectError
	expandContractions( null ); // $ExpectError
	expandContractions( undefined ); // $ExpectError
	expandContractions( 5 ); // $ExpectError
	expandContractions( [] ); // $ExpectError
	expandContractions( {} ); // $ExpectError
	expandContractions( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	expandContractions(); // $ExpectError
}
