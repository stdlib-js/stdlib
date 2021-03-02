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

import reDirname = require( './index' );


// TESTS //

// The function returns a regular expression...
{
	reDirname(); // $ExpectType RegExp
	reDirname( 'win32' ); // $ExpectType RegExp
	reDirname( 'posix' ); // $ExpectType RegExp
}

// The compiler throws an error if the function is provided an invalid argument...
{
	reDirname( 123 ); // $ExpectError
	reDirname( 'abc' ); // $ExpectError
	reDirname( [] ); // $ExpectError
	reDirname( {} ); // $ExpectError
	reDirname( true ); // $ExpectError
	reDirname( false ); // $ExpectError
	reDirname( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	reDirname( 'win32', 2 ); // $ExpectError
}

// Attached to main export is a `REGEXP` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reDirname.REGEXP; // $ExpectType RegExp
}

// Attached to main export is a `REGEXP_POSIX` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reDirname.REGEXP_POSIX; // $ExpectType RegExp
}

// Attached to main export is a `REGEXP_WIN32` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reDirname.REGEXP_WIN32; // $ExpectType RegExp
}
