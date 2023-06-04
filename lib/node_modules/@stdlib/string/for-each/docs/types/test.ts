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

import forEach = require( './index' );

/* tslint:disable:no-empty */
function noop() {}

// TESTS //

// The function returns a string...
{
	forEach( 'presidential election', noop ); // $ExpectType string
	forEach( 'Iñtërnâtiônàlizætiøn', noop, {} ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	forEach( [], noop ); // $ExpectError
	forEach( false, noop ); // $ExpectError
	forEach( true, noop ); // $ExpectError
	forEach( {}, noop ); // $ExpectError
}

// The compiler throws an error if the second argument is not a function...
{
	forEach( 'presidential election', 2 ); // $ExpectError
	forEach( 'presidential election', false ); // $ExpectError
	forEach( 'presidential election', 'abc' ); // $ExpectError
	forEach( 'presidential election', {} ); // $ExpectError
	forEach( 'presidential election', [] ); // $ExpectError
	forEach( 'presidential election', null ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	forEach(); // $ExpectError
	forEach( 'presidential election' ); // $ExpectError
	forEach( 'presidential election', noop, {}, 3 ); // $ExpectError
}
