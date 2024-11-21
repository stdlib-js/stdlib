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

import isAbsolutePath = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isAbsolutePath( 'C:\\foo\\bar\\baz' ); // $ExpectType boolean
	isAbsolutePath( '/foo/bar/baz' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isAbsolutePath(); // $ExpectError
	isAbsolutePath( 'C:\\foo\\bar\\baz', 123 ); // $ExpectError
}

// Attached to main export is a `posix` method which returns a boolean...
{
	isAbsolutePath.posix( '/foo/bar/baz' ); // $ExpectType boolean
	isAbsolutePath.posix( '/foo/../bar/baz' ); // $ExpectType boolean
}

// The compiler throws an error if the `posix` method is provided an unsupported number of arguments...
{
	isAbsolutePath.posix(); // $ExpectError
	isAbsolutePath.posix( '/foo/../bar/baz', 123 ); // $ExpectError
}

// Attached to main export is a `win32` method which returns a boolean...
{
	isAbsolutePath.win32( 'foo\\bar\\baz' ); // $ExpectType boolean
	isAbsolutePath.win32( 'C:\\foo\\..\\bar\\baz' ); // $ExpectType boolean
}

// The compiler throws an error if the `win32` method is provided an unsupported number of arguments...
{
	isAbsolutePath.win32(); // $ExpectError
	isAbsolutePath.win32( 'C:\\foo\\..\\bar\\baz', 123 ); // $ExpectError
}
