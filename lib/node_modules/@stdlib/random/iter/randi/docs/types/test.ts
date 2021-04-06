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

import iterator = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterator(); // $ExpectType RandIter
	iterator( { 'iter': 10 } ); // $ExpectType RandIter
	iterator( { 'name': 'minstd-shuffle' } ); // $ExpectType RandIter
	iterator( { 'copy': false } ); // $ExpectType RandIter
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	iterator( 'abc' ); // $ExpectError
	iterator( true ); // $ExpectError
	iterator( false ); // $ExpectError
	iterator( 123 ); // $ExpectError
	iterator( [] ); // $ExpectError
	iterator( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `name` option which is not a recognized PRNG name...
{
	iterator( { 'name': true } ); // $ExpectError
	iterator( { 'name': false } ); // $ExpectError
	iterator( { 'name': 123 } ); // $ExpectError
	iterator( { 'name': 'abc' } ); // $ExpectError
	iterator( { 'name': null } ); // $ExpectError
	iterator( { 'name': [] } ); // $ExpectError
	iterator( { 'name': {} } ); // $ExpectError
	iterator( { 'name': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `copy` option which is not a boolean...
{
	iterator( { 'copy': 123 } ); // $ExpectError
	iterator( { 'copy': 'abc' } ); // $ExpectError
	iterator( { 'copy': null } ); // $ExpectError
	iterator( { 'copy': [] } ); // $ExpectError
	iterator( { 'copy': {} } ); // $ExpectError
	iterator( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `iter` option which is not a number...
{
	iterator( { 'iter': true } ); // $ExpectError
	iterator( { 'iter': false } ); // $ExpectError
	iterator( { 'iter': 'abc' } ); // $ExpectError
	iterator( { 'iter': null } ); // $ExpectError
	iterator( { 'iter': [] } ); // $ExpectError
	iterator( { 'iter': {} } ); // $ExpectError
	iterator( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	iterator( {}, {} ); // $ExpectError
}
