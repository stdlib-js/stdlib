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

import pad = require( './index' );


// TESTS //

// The function returns a string...
{
	pad( 'abd', 10 ); // $ExpectType string
	pad( 'abd', 10, { 'lpad': 'a', 'rpad': 'c' } ); // $ExpectType string
	pad( 'abd', 10, { 'centerRight': true } ); // $ExpectType string
}

//  The compiler throws an error if the function is not provided a string as its first argument...
{
	pad( true, 6 ); // $ExpectError
	pad( false, 6 ); // $ExpectError
	pad( 3, 6 ); // $ExpectError
	pad( [], 6 ); // $ExpectError
	pad( {}, 6 ); // $ExpectError
	pad( ( x: number ): number => x, 6 ); // $ExpectError
}

//  The compiler throws an error if the function is not provided a number as its second argument...
{
	pad( 'abd', true ); // $ExpectError
	pad( 'abd', false ); // $ExpectError
	pad( 'abd', 'abc' ); // $ExpectError
	pad( 'abd', [], 0 ); // $ExpectError
	pad( 'abd', {}, 0 ); // $ExpectError
	pad( 'abd', ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	pad( 'abc', 5, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `lpad` option which is not a string...
{
	pad( 'abd', 10, { 'lpad': 123 } ); // $ExpectError
	pad( 'abd', 10, { 'lpad': true } ); // $ExpectError
	pad( 'abd', 10, { 'lpad': false } ); // $ExpectError
	pad( 'abd', 10, { 'lpad': {} } ); // $ExpectError
	pad( 'abd', 10, { 'lpad': [] } ); // $ExpectError
	pad( 'abd', 10, { 'lpad': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `rpad` option which is not a string...
{
	pad( 'abd', 10, { 'rpad': 123 } ); // $ExpectError
	pad( 'abd', 10, { 'rpad': true } ); // $ExpectError
	pad( 'abd', 10, { 'rpad': false } ); // $ExpectError
	pad( 'abd', 10, { 'rpad': {} } ); // $ExpectError
	pad( 'abd', 10, { 'rpad': [] } ); // $ExpectError
	pad( 'abd', 10, { 'rpad': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `centerRight` option which is not a boolean...
{
	pad( 'abd', 10, { 'centerRight': 123 } ); // $ExpectError
	pad( 'abd', 10, { 'centerRight': 'abc' } ); // $ExpectError
	pad( 'abd', 10, { 'centerRight': {} } ); // $ExpectError
	pad( 'abd', 10, { 'centerRight': [] } ); // $ExpectError
	pad( 'abd', 10, { 'centerRight': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	pad(); // $ExpectError
	pad( 'abc' ); // $ExpectError
}
