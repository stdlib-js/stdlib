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

import readDir = require( './index' );

const done = ( error: Error | null, data: Array<string> ) => {
	if ( error || !data.length ) {
		throw error;
	}
};


// TESTS //

// The function does not have a return value...
{
	readDir( 'beepboop', done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	readDir( 123, done ); // $ExpectError
	readDir( false, done ); // $ExpectError
	readDir( true, done ); // $ExpectError
	readDir( null, done ); // $ExpectError
	readDir( undefined, done ); // $ExpectError
	readDir( [], done ); // $ExpectError
	readDir( {}, done ); // $ExpectError
	readDir( ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function with the expected signature...
{
	readDir( '/var/log/', 1 ); // $ExpectError
	readDir( '/var/log/', false ); // $ExpectError
	readDir( '/var/log/', true ); // $ExpectError
	readDir( '/var/log/', null ); // $ExpectError
	readDir( '/var/log/', undefined ); // $ExpectError
	readDir( '/var/log/', [] ); // $ExpectError
	readDir( '/var/log/', {} ); // $ExpectError
	readDir( '/var/log/', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	readDir(); // $ExpectError
	readDir( 'C:\\foo\\bar\\baz' ); // $ExpectError
}

// Attached to main export is a `sync` method which returns a string array...
{
	readDir.sync( 'beepboop' ); // $ExpectType Error | string[]
}

// The compiler throws an error if the `sync` method is provided a first argument which is not a string...
{
	readDir.sync( 123 ); // $ExpectError
	readDir.sync( false ); // $ExpectError
	readDir.sync( true ); // $ExpectError
	readDir.sync( null ); // $ExpectError
	readDir.sync( undefined ); // $ExpectError
	readDir.sync( [] ); // $ExpectError
	readDir.sync( {} ); // $ExpectError
	readDir.sync( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	readDir.sync(); // $ExpectError
}
