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

import some = require( './index' );


// TESTS //

// The function returns a boolean...
{
	some( [ false, false, true ], 1 ); // $ExpectType boolean
	some( [ false, true, true ], 2 ); // $ExpectType boolean
	some( [ true, false ], 2 ); // $ExpectType boolean
	some( [ true, true ], 3 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	some( true, 1 ); // $ExpectError
	some( false, 1 ); // $ExpectError
	some( 5, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	some( [ false, false, true ], true ); // $ExpectError
	some( [ false, false, true ], false ); // $ExpectError
	some( [ false, false, true ], 'abc' ); // $ExpectError
	some( [ false, false, true ], [] ); // $ExpectError
	some( [ false, false, true ], {} ); // $ExpectError
	some( [ false, false, true ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is not provided two arguments...
{
	some(); // $ExpectError
	some( [ true, true ] ); // $ExpectError
	some( [ true, true ], 1, 1 ); // $ExpectError
}
