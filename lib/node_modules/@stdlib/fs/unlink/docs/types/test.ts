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

import unlink = require( './index' );

const done = ( error: Error | null ) => {
	if ( error ) {
		throw error;
	}
};


// TESTS //

// The function does not have a return value...
{
	unlink( './beep/boop.txt', done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument of an unsupported type...
{
	unlink( false, done ); // $ExpectError
	unlink( true, done ); // $ExpectError
	unlink( null, done ); // $ExpectError
	unlink( undefined, done ); // $ExpectError
	unlink( [], done ); // $ExpectError
	unlink( {}, done ); // $ExpectError
	unlink( ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function with the expected signature...
{
	unlink( './beep/boop.txt', 1 ); // $ExpectError
	unlink( './beep/boop.txt', 'abc' ); // $ExpectError
	unlink( './beep/boop.txt', false ); // $ExpectError
	unlink( './beep/boop.txt', true ); // $ExpectError
	unlink( './beep/boop.txt', null ); // $ExpectError
	unlink( './beep/boop.txt', undefined ); // $ExpectError
	unlink( './beep/boop.txt', [] ); // $ExpectError
	unlink( './beep/boop.txt', {} ); // $ExpectError
	unlink( './beep/boop.txt', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	unlink(); // $ExpectError
	unlink( 'C:\\foo\\bar\\baz' ); // $ExpectError
}

// Attached to main export is a `sync` method which returns an error or null...
{
	unlink.sync( './beep/boop.txt' ); // $ExpectType Error | null
	unlink.sync( 123 ); // $ExpectType Error | null
}

// The compiler throws an error if the `sync` method is provided a first argument of an unsupported type...
{
	unlink.sync( false ); // $ExpectError
	unlink.sync( true ); // $ExpectError
	unlink.sync( null ); // $ExpectError
	unlink.sync( undefined ); // $ExpectError
	unlink.sync( [] ); // $ExpectError
	unlink.sync( {} ); // $ExpectError
	unlink.sync( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	unlink.sync(); // $ExpectError
}
