/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import trues = require( './index' );


// TESTS //

// The function returns an array...
{
	trues( 3 ); // $ExpectType boolean[]
}

// The compiler throws an error if the function is provided an argument which is not a number...
{
	trues( 'abc' ); // $ExpectError
	trues( true ); // $ExpectError
	trues( false ); // $ExpectError
	trues( null ); // $ExpectError
	trues( [] ); // $ExpectError
	trues( {} ); // $ExpectError
	trues( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	trues(); // $ExpectError
	trues( 3, 2 ); // $ExpectError
}
