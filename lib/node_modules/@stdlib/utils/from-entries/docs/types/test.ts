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

import objectFromEntries = require( './index' );


// TESTS //

// The function returns an object...
{
	objectFromEntries( [ ['beep', 'boop'], ['foo', 'bar'] ] ); // $ExpectType any
}

// The compiler throws an error if the function is provided a first argument which is not an array of arrays...
{
	objectFromEntries( 'abc' ); // $ExpectError
	objectFromEntries( 123 ); // $ExpectError
	objectFromEntries( true ); // $ExpectError
	objectFromEntries( false ); // $ExpectError
	objectFromEntries( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	objectFromEntries(); // $ExpectError
	objectFromEntries( [ ['beep', 'boop'], ['foo', 'bar'] ], {} ); // $ExpectError
}
