/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import minard = require( './index' );


// TESTS //

// The function returns an object or array of objects...
{
	minard(); // $ExpectType Object | Object[]
}

// The compiler throws an error if the function is provided a first argument which is not an object...
{
	minard( 'abc' ); // $ExpectError
	minard( false ); // $ExpectError
	minard( true ); // $ExpectError
	minard( null ); // $ExpectError
	minard( 123 ); // $ExpectError
	minard( [] ); // $ExpectError
	minard( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `data` option which is not a recognized dataset name...
{
	minard( { 'data': 'abc' } ); // $ExpectError
	minard( { 'data': 123 } ); // $ExpectError
	minard( { 'data': true } ); // $ExpectError
	minard( { 'data': false } ); // $ExpectError
	minard( { 'data': [] } ); // $ExpectError
	minard( { 'data': {} } ); // $ExpectError
	minard( { 'data': ( x: number ): number => x } ); // $ExpectError
}
