/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import ms2duration = require( './index' );


// TESTS //

// The function returns a string...
{
	ms2duration( 4444 ); // $ExpectType string
}

// The compiler throws an error if the function is provided a value other than a number...
{
	ms2duration( true ); // $ExpectError
	ms2duration( false ); // $ExpectError
	ms2duration( null ); // $ExpectError
	ms2duration( [] ); // $ExpectError
	ms2duration( {} ); // $ExpectError
	ms2duration( 'abc' ); // $ExpectError
	ms2duration( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	ms2duration(); // $ExpectError
	ms2duration( 4444, 4444 ); // $ExpectError
}
