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

import umask = require( './index' );


// TESTS //

// The function returns a string or null...
{
	umask(); // $ExpectType string | number
	umask( 0 ); // $ExpectType string | number
	umask( 'u=rwx,g=rw,o=rw' ); // $ExpectType string | number
	umask( { 'symbolic': true } ); // $ExpectType string | number
	umask( 0, { 'symbolic': true } ); // $ExpectType string | number
}

// The compiler throws an error if the function is provided a first` argument which is not a string, number, or `options` object...
{
	umask( false ); // $ExpectError
	umask( true ); // $ExpectError
	umask( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	umask( 0, 'abc' ); // $ExpectError
	umask( 0, 3.12 ); // $ExpectError
	umask( 0, false ); // $ExpectError
	umask( 0, true ); // $ExpectError
	umask( 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `symbolic` option which is not a boolean...
{
	umask( 0, { 'symbolic': '5' } ); // $ExpectError
	umask( 0, { 'symbolic': 123 } ); // $ExpectError
	umask( 0, { 'symbolic': null } ); // $ExpectError
	umask( 0, { 'symbolic': [] } ); // $ExpectError
	umask( 0, { 'symbolic': {} } ); // $ExpectError
	umask( 0, { 'symbolic': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided more than two arguments...
{
	umask( 0, {}, {} ); // $ExpectError
}
