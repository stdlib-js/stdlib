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

import nanmaxf = require( './index' );


// TESTS //

// The function returns a number...
{
	nanmaxf( 3.0, -0.4 ); // $ExpectType number
}

// The compiler throws an error if the function is provided non-number arguments...
{
	nanmaxf( true, 3.0 ); // $ExpectError
	nanmaxf( false, 3.0 ); // $ExpectError
	nanmaxf( [], 3.0 ); // $ExpectError
	nanmaxf( {}, 3.0 ); // $ExpectError
	nanmaxf( 'abc', 3.0 ); // $ExpectError
	nanmaxf( ( x: number ): number => x, 3.0 ); // $ExpectError

	nanmaxf( 1.2, true ); // $ExpectError
	nanmaxf( 1.2, false ); // $ExpectError
	nanmaxf( 1.2, [] ); // $ExpectError
	nanmaxf( 1.2, {} ); // $ExpectError
	nanmaxf( 1.2, 'abc' ); // $ExpectError
	nanmaxf( 1.2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nanmaxf(); // $ExpectError
	nanmaxf( 3.0 ); // $ExpectError
	nanmaxf( 3.0, 2.0, 1.0 ); // $ExpectError
}
