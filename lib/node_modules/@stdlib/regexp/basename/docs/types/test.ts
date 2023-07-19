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

import reBasename = require( './index' );


// TESTS //

// The function returns a regular expression...
{
	reBasename(); // $ExpectType RegExp
	reBasename( 'win32' ); // $ExpectType RegExp
	reBasename( 'posix' ); // $ExpectType RegExp
}

// The compiler throws an error if the function is provided an invalid argument...
{
	reBasename( 123 ); // $ExpectError
	reBasename( 'abc' ); // $ExpectError
	reBasename( [] ); // $ExpectError
	reBasename( {} ); // $ExpectError
	reBasename( true ); // $ExpectError
	reBasename( false ); // $ExpectError
	reBasename( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	reBasename( 'win32', 2 ); // $ExpectError
}

// Attached to main export is a `REGEXP` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reBasename.REGEXP; // $ExpectType RegExp
}

// Attached to main export is a `REGEXP_POSIX` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reBasename.REGEXP_POSIX; // $ExpectType RegExp
}

// Attached to main export is a `REGEXP_WIN32` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reBasename.REGEXP_WIN32; // $ExpectType RegExp
}
