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

import dtypeEnum = require( './index' );


// TESTS //

// The function returns a number or null...
{
	dtypeEnum( [ 1, 2, 3 ] ); // $ExpectType number | null
	dtypeEnum( 'beep' ); // $ExpectType number | null
}

// The function does not compile if provided an argument which is not a collection...
{
	dtypeEnum( 2 ); // $ExpectError
	dtypeEnum( false ); // $ExpectError
	dtypeEnum( true ); // $ExpectError
	dtypeEnum( {} ); // $ExpectError
	dtypeEnum( null ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	dtypeEnum(); // $ExpectError
	dtypeEnum( [ 1, 2, 3 ], 3 ); // $ExpectError
}
