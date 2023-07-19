/*
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

import number2json = require( '../../lib/main' );


// TESTS //

// The function returns an object...
{
	const num = 3.14;
	number2json( num ); // $ExpectType JSON
}

// The compiler throws an error if the function is provided a value other than a number...
{
	number2json( 'abc' ); // $ExpectError
	number2json( true ); // $ExpectError
	number2json( false ); // $ExpectError
	number2json( undefined ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	number2json(); // $ExpectError
}
