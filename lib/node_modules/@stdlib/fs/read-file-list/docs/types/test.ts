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

import readFileList = require( './index' );

/**
* Interface defining a file.
*/
interface File {
	/**
	* File path.
	*/
	file: string;

	/**
	* File contents.
	*/
	data: Buffer | string;
}

const onLoad = ( error: Error | null, files: Array<File> ) => {
	if ( error || !files ) {
		throw error;
	}
};


// TESTS //

// The function does not have a return value...
{
	readFileList( [ 'beepboop' ], onLoad ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a string array...
{
	readFileList( 123, onLoad ); // $ExpectError
	readFileList( 'abc', onLoad ); // $ExpectError
	readFileList( false, onLoad ); // $ExpectError
	readFileList( true, onLoad ); // $ExpectError
	readFileList( null, onLoad ); // $ExpectError
	readFileList( undefined, onLoad ); // $ExpectError
	readFileList( [ 123 ], onLoad ); // $ExpectError
	readFileList( {}, onLoad ); // $ExpectError
	readFileList( ( x: number ): number => x, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function with the expected signature...
{
	readFileList( [ 'beepboop' ], 'abc' ); // $ExpectError
	readFileList( [ 'beepboop' ], 1 ); // $ExpectError
	readFileList( [ 'beepboop' ], false ); // $ExpectError
	readFileList( [ 'beepboop' ], true ); // $ExpectError
	readFileList( [ 'beepboop' ], null ); // $ExpectError
	readFileList( [ 'beepboop' ], undefined ); // $ExpectError
	readFileList( [ 'beepboop' ], [] ); // $ExpectError
	readFileList( [ 'beepboop' ], {} ); // $ExpectError
	readFileList( [ 'beepboop' ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object or string...
{
	readFileList( [ 'beepboop' ], false, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], true, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], null, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], undefined, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], 123, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], [], onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], ( x: number ): number => x, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided an `encoding` option which is not a string or null...
{
	readFileList( [ 'beepboop' ], { 'encoding': 123 }, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], { 'encoding': true }, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], { 'encoding': false }, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], { 'encoding': [] }, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], { 'encoding': {} }, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], { 'encoding': ( x: number ): number => x }, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided a `flag` option which is not a string...
{
	readFileList( [ 'beepboop' ], { 'flag': 123 }, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], { 'flag': true }, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], { 'flag': false }, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], { 'flag': null }, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], { 'flag': [] }, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], { 'flag': {} }, onLoad ); // $ExpectError
	readFileList( [ 'beepboop' ], { 'flag': ( x: number ): number => x }, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	readFileList(); // $ExpectError
	readFileList( [ 'C:\\foo\\bar\\baz\\package.json' ] ); // $ExpectError
}

// Attached to main export is a `sync` method which returns a string or an error...
{
	readFileList.sync( [ 'beepboop' ] ); // $ExpectType Error | File[]
}

// The compiler throws an error if the `sync` method is provided a first argument which is not a string array...
{
	readFileList.sync( 123 ); // $ExpectError
	readFileList.sync( 'abc' ); // $ExpectError
	readFileList.sync( false ); // $ExpectError
	readFileList.sync( true ); // $ExpectError
	readFileList.sync( null ); // $ExpectError
	readFileList.sync( undefined ); // $ExpectError
	readFileList.sync( [ 123 ] ); // $ExpectError
	readFileList.sync( {} ); // $ExpectError
	readFileList.sync( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an options argument which is not an object or string...
{
	readFileList.sync( [ 'beepboop' ], null ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], true ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], false ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], 123 ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], [] ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an `encoding` option which is not a string or null...
{
	readFileList.sync( [ 'beepboop' ], { 'encoding': 123 } ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], { 'encoding': true } ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], { 'encoding': false } ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], { 'encoding': [] } ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], { 'encoding': {} } ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], { 'encoding': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a `flag` option which is not a string...
{
	readFileList.sync( [ 'beepboop' ], { 'flag': 123 } ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], { 'flag': true } ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], { 'flag': false } ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], { 'flag': null } ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], { 'flag': [] } ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], { 'flag': {} } ); // $ExpectError
	readFileList.sync( [ 'beepboop' ], { 'flag': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	readFileList.sync(); // $ExpectError
}
