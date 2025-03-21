/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import appendFile = require( './index' );

const onAppend = ( err: Error | null ): void => {
	if ( err ) {
		throw err;
	}
};


// TESTS //

// The function does not have a return value...
{
	appendFile( './beep/boop.txt', 'beepboop', onAppend ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a string, buffer, or file descriptor...
{
	appendFile( false, 'beepboop', onAppend ); // $ExpectError
	appendFile( true, 'beepboop', onAppend ); // $ExpectError
	appendFile( null, 'beepboop', onAppend ); // $ExpectError
	appendFile( undefined, 'beepboop', onAppend ); // $ExpectError
	appendFile( [], 'beepboop', onAppend ); // $ExpectError
	appendFile( {}, 'beepboop', onAppend ); // $ExpectError
	appendFile( ( x: number ): number => x, 'beepboop', onAppend ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string or buffer...
{
	appendFile( './beep/boop.txt', false, onAppend ); // $ExpectError
	appendFile( './beep/boop.txt', true, onAppend ); // $ExpectError
	appendFile( './beep/boop.txt', null, onAppend ); // $ExpectError
	appendFile( './beep/boop.txt', undefined, onAppend ); // $ExpectError
	appendFile( './beep/boop.txt', [], onAppend ); // $ExpectError
	appendFile( './beep/boop.txt', {}, onAppend ); // $ExpectError
	appendFile( './beep/boop.txt', ( x: number ): number => x, onAppend ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function with the expected signature...
{
	appendFile( '/path/to/beepboop', 'beepboop', 'abc' ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', 1 ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', false ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', true ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', null ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', undefined ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', [] ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', {} ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object or string...
{
	appendFile( '/path/to/beepboop', 'beepboop', false, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', true, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', null, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', undefined, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', 123, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', [], onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', ( x: number ): number => x, onAppend ); // $ExpectError
}

// The compiler throws an error if the function is provided an `encoding` option which is not a string or null...
{
	appendFile( '/path/to/beepboop', 'beepboop', { 'encoding': 123 }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'encoding': true }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'encoding': false }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'encoding': [] }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'encoding': {} }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'encoding': ( x: number ): number => x }, onAppend ); // $ExpectError
}

// The compiler throws an error if the function is provided a `flag` option which is not a string...
{
	appendFile( '/path/to/beepboop', 'beepboop', { 'flag': 123 }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'flag': true }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'flag': false }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'flag': null }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'flag': [] }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'flag': {} }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'flag': ( x: number ): number => x },onAppend ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a number...
{
	appendFile( '/path/to/beepboop', 'beepboop', { 'mode': 'abc' }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'mode': true }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'mode': false }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'mode': null }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'mode': [] }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'mode': {} }, onAppend ); // $ExpectError
	appendFile( '/path/to/beepboop', 'beepboop', { 'mode': ( x: number ): number => x }, onAppend ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	appendFile(); // $ExpectError
	appendFile( 'C:\\foo\\bar\\baz\\beepboop' ); // $ExpectError
	appendFile( 'C:\\foo\\bar\\baz\\beepboop', 'beepboop' ); // $ExpectError
}

// Attached to main export is a `sync` method which returns an error or null...
{
	appendFile.sync( '/path/to/beepboop', 'beepboop' ); // $ExpectType Error | null
}

// The compiler throws an error if the `sync` method is provided a first argument which is not a string, buffer, or file descriptor...
{
	appendFile.sync( false, 'beepboop' ); // $ExpectError
	appendFile.sync( true, 'beepboop' ); // $ExpectError
	appendFile.sync( null, 'beepboop' ); // $ExpectError
	appendFile.sync( undefined, 'beepboop' ); // $ExpectError
	appendFile.sync( [], 'beepboop' ); // $ExpectError
	appendFile.sync( {}, 'beepboop' ); // $ExpectError
	appendFile.sync( ( x: number ): number => x, 'beepboop' ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a second argument which is not a string or buffer...
{
	appendFile.sync( '/path/to/beepboop', false ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', true ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', null ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', undefined ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', [] ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', {} ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an options argument which is not an object or string...
{
	appendFile.sync( '/path/to/beepboop', 'beepboop', null ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', true ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', false ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', 123 ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', [] ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an `encoding` option which is not a string or null...
{
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'encoding': 123 } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'encoding': true } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'encoding': false } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'encoding': [] } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'encoding': {} } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'encoding': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a `flag` option which is not a string...
{
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': 123 } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': true } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': false } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': null } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': [] } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': {} } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a `mode` option which is not a number...
{
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': 'abc' } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': true } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': false } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': null } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': [] } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': {} } ); // $ExpectError
	appendFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	appendFile.sync(); // $ExpectError
	appendFile.sync( '/path/to/beepboop' ); // $ExpectError
}
