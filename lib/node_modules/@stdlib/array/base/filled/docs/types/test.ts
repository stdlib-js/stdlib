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

import filled = require( './index' );


// TESTS //

// The function returns an array...
{
	filled( 0.0, 3 ); // $ExpectType any[]
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	filled( 0.0, 'abc' ); // $ExpectError
	filled( 0.0, true ); // $ExpectError
	filled( 0.0, false ); // $ExpectError
	filled( 0.0, null ); // $ExpectError
	filled( 0.0, [] ); // $ExpectError
	filled( 0.0, {} ); // $ExpectError
	filled( 0.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	filled(); // $ExpectError
	filled( 0.0 ); // $ExpectError
	filled( 0.0, 3, 2 ); // $ExpectError
}
