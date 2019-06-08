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

import mode = require( './index' );


// TESTS //

// The function returns a number...
{
	mode( 10, 0.3 ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not a number...
{
	mode( true, 0.5 ); // $ExpectError
	mode( false, 0.5 ); // $ExpectError
	mode( '5', 0.5 ); // $ExpectError
	mode( [], 0.5 ); // $ExpectError
	mode( {}, 0.5 ); // $ExpectError
	mode( ( x: number ): number => x, 0.5 ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a number...
{
	mode( 8, true ); // $ExpectError
	mode( 8, false ); // $ExpectError
	mode( 8, '5' ); // $ExpectError
	mode( 8, [] ); // $ExpectError
	mode( 8, {} ); // $ExpectError
	mode( 8, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	mode(); // $ExpectError
	mode( 8 ); // $ExpectError
}
