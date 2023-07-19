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

import writeFile = require( './index' );

const onWrite = ( error: Error | null ): void => {
	if ( error ) {
		throw error;
	}
};


// TESTS //

// The function does not have a return value...
{
	writeFile( './beep/boop.txt', 'beepboop', onWrite ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a string, buffer, or file descriptor...
{
	writeFile( false, 'beepboop', onWrite ); // $ExpectError
	writeFile( true, 'beepboop', onWrite ); // $ExpectError
	writeFile( null, 'beepboop', onWrite ); // $ExpectError
	writeFile( undefined, 'beepboop', onWrite ); // $ExpectError
	writeFile( [], 'beepboop', onWrite ); // $ExpectError
	writeFile( {}, 'beepboop', onWrite ); // $ExpectError
	writeFile( ( x: number ): number => x, 'beepboop', onWrite ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string or buffer...
{
	writeFile( './beep/boop.txt', false, onWrite ); // $ExpectError
	writeFile( './beep/boop.txt', true, onWrite ); // $ExpectError
	writeFile( './beep/boop.txt', null, onWrite ); // $ExpectError
	writeFile( './beep/boop.txt', undefined, onWrite ); // $ExpectError
	writeFile( './beep/boop.txt', [], onWrite ); // $ExpectError
	writeFile( './beep/boop.txt', {}, onWrite ); // $ExpectError
	writeFile( './beep/boop.txt', ( x: number ): number => x, onWrite ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function with the expected signature...
{
	writeFile( '/path/to/beepboop', 'beepboop', 'abc' ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', 1 ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', false ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', true ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', null ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', undefined ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', [] ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', {} ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object or string...
{
	writeFile( '/path/to/beepboop', 'beepboop', false, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', true, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', null, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', undefined, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', 123, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', [], onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', ( x: number ): number => x, onWrite ); // $ExpectError
}

// The compiler throws an error if the function is provided an `encoding` option which is not a string or null...
{
	writeFile( '/path/to/beepboop', 'beepboop', { 'encoding': 123 }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'encoding': true }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'encoding': false }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'encoding': [] }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'encoding': {} }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'encoding': ( x: number ): number => x }, onWrite ); // $ExpectError
}

// The compiler throws an error if the function is provided a `flag` option which is not a string...
{
	writeFile( '/path/to/beepboop', 'beepboop', { 'flag': 123 }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'flag': true }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'flag': false }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'flag': null }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'flag': [] }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'flag': {} }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'flag': ( x: number ): number => x }, onWrite ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a number...
{
	writeFile( '/path/to/beepboop', 'beepboop', { 'mode': 'abc' }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'mode': true }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'mode': false }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'mode': null }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'mode': [] }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'mode': {} }, onWrite ); // $ExpectError
	writeFile( '/path/to/beepboop', 'beepboop', { 'mode': ( x: number ): number => x }, onWrite ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	writeFile(); // $ExpectError
	writeFile( 'C:\\foo\\bar\\baz\\beepboop' ); // $ExpectError
	writeFile( 'C:\\foo\\bar\\baz\\beepboop', 'beepboop' ); // $ExpectError
}

// Attached to main export is a `sync` method which returns an error or null...
{
	writeFile.sync( '/path/to/beepboop', 'beepboop' ); // $ExpectType Error | null
}

// The compiler throws an error if the `sync` method is provided a first argument which is not a string, buffer, or file descriptor...
{
	writeFile.sync( false, 'beepboop' ); // $ExpectError
	writeFile.sync( true, 'beepboop' ); // $ExpectError
	writeFile.sync( null, 'beepboop' ); // $ExpectError
	writeFile.sync( undefined, 'beepboop' ); // $ExpectError
	writeFile.sync( [], 'beepboop' ); // $ExpectError
	writeFile.sync( {}, 'beepboop' ); // $ExpectError
	writeFile.sync( ( x: number ): number => x, 'beepboop' ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a second argument which is not a string or buffer...
{
	writeFile.sync( '/path/to/beepboop', false ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', true ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', null ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', undefined ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', [] ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', {} ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an options argument which is not an object or string...
{
	writeFile.sync( '/path/to/beepboop', 'beepboop', null ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', true ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', false ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', 123 ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', [] ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an `encoding` option which is not a string or null...
{
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'encoding': 123 } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'encoding': true } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'encoding': false } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'encoding': [] } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'encoding': {} } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'encoding': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a `flag` option which is not a string...
{
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': 123 } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': true } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': false } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': null } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': [] } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': {} } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'flag': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a `mode` option which is not a number...
{
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': 'abc' } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': true } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': false } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': null } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': [] } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': {} } ); // $ExpectError
	writeFile.sync( '/path/to/beepboop', 'beepboop', { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	writeFile.sync(); // $ExpectError
	writeFile.sync( '/path/to/beepboop' ); // $ExpectError
}
