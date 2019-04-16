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

import isRelativePath = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isRelativePath( 'foo\\bar\\baz' ); // $ExpectType boolean
	isRelativePath( './foo/bar/baz' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isRelativePath(); // $ExpectError
	isRelativePath( 'foo\\bar\\baz', 123 ); // $ExpectError
}

// Attached to main export is a `posix` method which returns a boolean...
{
	isRelativePath.posix( './foo/bar/baz' ); // $ExpectType boolean
	isRelativePath.posix( '/foo/../bar/baz' ); // $ExpectType boolean
}

// The compiler throws an error if the `posix` method is provided an unsupported number of arguments...
{
	isRelativePath.posix(); // $ExpectError
	isRelativePath.posix( '/foo/../bar/baz', 123 ); // $ExpectError
}

// Attached to main export is a `win32` method which returns a boolean...
{
	isRelativePath.win32( 'foo\\bar\\baz' ); // $ExpectType boolean
	isRelativePath.win32( 'C:\\foo\\..\\bar\\baz' ); // $ExpectType boolean
}

// The compiler throws an error if the `win32` method is provided an unsupported number of arguments...
{
	isRelativePath.win32(); // $ExpectError
	isRelativePath.win32( 'C:\\foo\\..\\bar\\baz', 123 ); // $ExpectError
}
