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

import signature = require( './index' );


// TESTS //

// The function returns an array of strings or null...
{
	signature( 'base.sin' ); // $ExpectType string[] | null
}

// The compiler throws an error if the function is not provided a string...
{
	signature( 5 ); // $ExpectError
	signature( true ); // $ExpectError
	signature( false ); // $ExpectError
	signature( null ); // $ExpectError
	signature( undefined ); // $ExpectError
	signature( [] ); // $ExpectError
	signature( {} ); // $ExpectError
	signature( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	signature( 'base.sin', 'beep' ); // $ExpectError
}
