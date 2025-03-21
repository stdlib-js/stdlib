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

import rad2degf = require( './index' );


// TESTS //

// The function returns a number...
{
	rad2degf( 8 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	rad2degf( true ); // $ExpectError
	rad2degf( false ); // $ExpectError
	rad2degf( null ); // $ExpectError
	rad2degf( undefined ); // $ExpectError
	rad2degf( '5' ); // $ExpectError
	rad2degf( [] ); // $ExpectError
	rad2degf( {} ); // $ExpectError
	rad2degf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	rad2degf(); // $ExpectError
}
