/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import assign = require( './index' );

// TESTS //

// The function returns an object...
{
	const obj1 = { 'name': 'John' };
	assign( obj1 ); // $ExpectType object
}

// The function returns an object after copying properties...
{
	const obj1 = { 'name': 'John' };
	const obj2 = { 'country': 'US' };
	assign( obj1, obj2 ); // $ExpectType object
}

// The compiler throws an error if the function is provided a first argument which is not an object...
{
	assign( 'abc' ); // $ExpectError
	assign( false ); // $ExpectError
	assign( true ); // $ExpectError
	assign( null ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	assign(); // $ExpectError
}
