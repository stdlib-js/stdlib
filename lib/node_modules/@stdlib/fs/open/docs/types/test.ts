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

import open = require( './index' );

const done = ( error: Error, fd: number ) => {
	if ( error || !fd ) {
		throw error;
	}
};


// TESTS //

// The function does not have a return value...
{
	open( '/path/to/beepboop', done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	open( 123, done ); // $ExpectError
	open( false, done ); // $ExpectError
	open( true, done ); // $ExpectError
	open( null, done ); // $ExpectError
	open( undefined, done ); // $ExpectError
	open( [], done ); // $ExpectError
	open( {}, done ); // $ExpectError
	open( ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a function with the expected signature...
{
	open( '/path/to/beepboop', 'abc' ); // $ExpectError
	open( '/path/to/beepboop', 123 ); // $ExpectError
	open( '/path/to/beepboop', false ); // $ExpectError
	open( '/path/to/beepboop', true ); // $ExpectError
	open( '/path/to/beepboop', null ); // $ExpectError
	open( '/path/to/beepboop', undefined ); // $ExpectError
	open( '/path/to/beepboop', [] ); // $ExpectError
	open( '/path/to/beepboop', {} ); // $ExpectError
	open( '/path/to/beepboop', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `flags` argument which is not a string or number...
{
	open( '/path/to/beepboop', false, done ); // $ExpectError
	open( '/path/to/beepboop', true, done ); // $ExpectError
	open( '/path/to/beepboop', null, done ); // $ExpectError
	open( '/path/to/beepboop', undefined, done ); // $ExpectError
	open( '/path/to/beepboop', [], done ); // $ExpectError
	open( '/path/to/beepboop', {}, done ); // $ExpectError
	open( '/path/to/beepboop', ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` argument which is not a number...
{
	open( '/path/to/beepboop', 'r+', 'abc', done ); // $ExpectError
	open( '/path/to/beepboop', 'r+', false, done ); // $ExpectError
	open( '/path/to/beepboop', 'r+', true, done ); // $ExpectError
	open( '/path/to/beepboop', 'r+', null, done ); // $ExpectError
	open( '/path/to/beepboop', 'r+', undefined, done ); // $ExpectError
	open( '/path/to/beepboop', 'r+', [], done ); // $ExpectError
	open( '/path/to/beepboop', 'r+', {}, done ); // $ExpectError
	open( '/path/to/beepboop', 'r+', ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	open(); // $ExpectError
	open( 'C:\\foo\\bar\\baz' ); // $ExpectError
}

// Attached to main export is a `sync` method which returns a number or an error...
{
	open.sync( '/path/to/beepboop' ); // $ExpectType number | Error
}

// The compiler throws an error if the `sync` method is provided a first argument which is not a string...
{
	open.sync( 123 ); // $ExpectError
	open.sync( false ); // $ExpectError
	open.sync( true ); // $ExpectError
	open.sync( null ); // $ExpectError
	open.sync( undefined ); // $ExpectError
	open.sync( [] ); // $ExpectError
	open.sync( {} ); // $ExpectError
	open.sync( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a second argument which is not a string or number...
{
	open.sync( '/path/to/beepboop', false ); // $ExpectError
	open.sync( '/path/to/beepboop', true ); // $ExpectError
	open.sync( '/path/to/beepboop', null ); // $ExpectError
	open.sync( '/path/to/beepboop', [] ); // $ExpectError
	open.sync( '/path/to/beepboop', {} ); // $ExpectError
	open.sync( '/path/to/beepboop', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a third argument which is not a number...
{
	open.sync( '/path/to/beepboop', 'r+', false ); // $ExpectError
	open.sync( '/path/to/beepboop', 'r+', true ); // $ExpectError
	open.sync( '/path/to/beepboop', 'r+', null ); // $ExpectError
	open.sync( '/path/to/beepboop', 'r+', [] ); // $ExpectError
	open.sync( '/path/to/beepboop', 'r+', {} ); // $ExpectError
	open.sync( '/path/to/beepboop', 'r+', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	open.sync(); // $ExpectError
}
