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

import rename = require( './index' );

const done = ( error: Error | null ) => {
	if ( error ) {
		throw error;
	}
};


// TESTS //

// The function does not have a return value...
{
	rename( './beep/boop.txt', './beep/foo.txt', done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	rename( 123, './beep/foo.txt', done ); // $ExpectError
	rename( false, './beep/foo.txt', done ); // $ExpectError
	rename( true, './beep/foo.txt', done ); // $ExpectError
	rename( null, './beep/foo.txt', done ); // $ExpectError
	rename( undefined, './beep/foo.txt', done ); // $ExpectError
	rename( [], './beep/foo.txt', done ); // $ExpectError
	rename( {}, './beep/foo.txt', done ); // $ExpectError
	rename( ( x: number ): number => x, './beep/foo.txt', done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	rename( './beep/boop.txt', 123, done ); // $ExpectError
	rename( './beep/boop.txt', false, done ); // $ExpectError
	rename( './beep/boop.txt', true, done ); // $ExpectError
	rename( './beep/boop.txt', null, done ); // $ExpectError
	rename( './beep/boop.txt', undefined, done ); // $ExpectError
	rename( './beep/boop.txt', [], done ); // $ExpectError
	rename( './beep/boop.txt', {}, done ); // $ExpectError
	rename( './beep/boop.txt', ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function with the expected signature...
{
	rename( './beep/boop.txt', './beep/foo.txt', 1 ); // $ExpectError
	rename( './beep/boop.txt', './beep/foo.txt', false ); // $ExpectError
	rename( './beep/boop.txt', './beep/foo.txt', true ); // $ExpectError
	rename( './beep/boop.txt', './beep/foo.txt', null ); // $ExpectError
	rename( './beep/boop.txt', './beep/foo.txt', undefined ); // $ExpectError
	rename( './beep/boop.txt', './beep/foo.txt', [] ); // $ExpectError
	rename( './beep/boop.txt', './beep/foo.txt', {} ); // $ExpectError
	rename( './beep/boop.txt', './beep/foo.txt', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	rename(); // $ExpectError
	rename( 'C:\\foo\\bar\\baz' ); // $ExpectError
	rename( './beep/boop.txt', './beep/foo.txt' ); // $ExpectError
}

// Attached to main export is a `sync` method which returns an error or null...
{
	rename.sync( './beep/boop.txt', './beep/foo.txt' ); // $ExpectType Error | null
}

// The compiler throws an error if the `sync` method is provided a first argument which is not a string...
{
	rename.sync( 1, './beep/foo.txt' ); // $ExpectError
	rename.sync( false, './beep/foo.txt' ); // $ExpectError
	rename.sync( true, './beep/foo.txt' ); // $ExpectError
	rename.sync( null, './beep/foo.txt' ); // $ExpectError
	rename.sync( undefined, './beep/foo.txt' ); // $ExpectError
	rename.sync( [], './beep/foo.txt' ); // $ExpectError
	rename.sync( {}, './beep/foo.txt' ); // $ExpectError
	rename.sync( ( x: number ): number => x, './beep/foo.txt' ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a second argument which is not a string...
{
	rename.sync( './beep/boop.txt', 1, ); // $ExpectError
	rename.sync( './beep/boop.txt', false, ); // $ExpectError
	rename.sync( './beep/boop.txt', true, ); // $ExpectError
	rename.sync( './beep/boop.txt', null, ); // $ExpectError
	rename.sync( './beep/boop.txt', undefined, ); // $ExpectError
	rename.sync( './beep/boop.txt', [], ); // $ExpectError
	rename.sync( './beep/boop.txt', {}, ); // $ExpectError
	rename.sync( './beep/boop.txt', ( x: number ): number => x, ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	rename.sync(); // $ExpectError
	rename.sync( './beep/boop.txt' ); // $ExpectError
}
