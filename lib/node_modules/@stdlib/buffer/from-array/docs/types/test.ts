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

import fromArray = require( './index' );


// TESTS //

// The function returns a buffer...
{
	fromArray( [ 1, 2, 3, 4 ] ); // $ExpectType Buffer
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	fromArray( 123 ); // $ExpectError
	fromArray( false ); // $ExpectError
	fromArray( true ); // $ExpectError
	fromArray( null ); // $ExpectError
	fromArray( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	fromArray(); // $ExpectError
	fromArray( [ 1, 2, 3, 4 ], 4 ); // $ExpectError
}
