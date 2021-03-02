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

import reFilename = require( './index' );


// TESTS //

// The function returns a regular expression...
{
	reFilename(); // $ExpectType RegExp
	reFilename( 'win32' ); // $ExpectType RegExp
	reFilename( 'posix' ); // $ExpectType RegExp
}

// The compiler throws an error if the function is provided an invalid argument...
{
	reFilename( 123 ); // $ExpectError
	reFilename( 'abc' ); // $ExpectError
	reFilename( [] ); // $ExpectError
	reFilename( {} ); // $ExpectError
	reFilename( true ); // $ExpectError
	reFilename( false ); // $ExpectError
	reFilename( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	reFilename( 'win32', 2 ); // $ExpectError
}

// Attached to main export is a `REGEXP` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reFilename.REGEXP; // $ExpectType RegExp
}

// Attached to main export is a `REGEXP_POSIX` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reFilename.REGEXP_POSIX; // $ExpectType RegExp
}

// Attached to main export is a `REGEXP_WIN32` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reFilename.REGEXP_WIN32; // $ExpectType RegExp
}
