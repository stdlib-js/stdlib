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

import readWASM = require( './index' );

const onLoad = ( error: Error | null, file: Uint8Array ) => {
	if ( error || !file ) {
		throw error;
	}
};


// TESTS //

// The function does not have a return value...
{
	readWASM( 'foo.wasm', onLoad ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a string, buffer, or file descriptor...
{
	readWASM( false, onLoad ); // $ExpectError
	readWASM( true, onLoad ); // $ExpectError
	readWASM( null, onLoad ); // $ExpectError
	readWASM( undefined, onLoad ); // $ExpectError
	readWASM( [], onLoad ); // $ExpectError
	readWASM( {}, onLoad ); // $ExpectError
	readWASM( ( x: number ): number => x, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function with the expected signature...
{
	readWASM( '/path/to/foo.wasm', 'abc' ); // $ExpectError
	readWASM( '/path/to/foo.wasm', 1 ); // $ExpectError
	readWASM( '/path/to/foo.wasm', false ); // $ExpectError
	readWASM( '/path/to/foo.wasm', true ); // $ExpectError
	readWASM( '/path/to/foo.wasm', null ); // $ExpectError
	readWASM( '/path/to/foo.wasm', undefined ); // $ExpectError
	readWASM( '/path/to/foo.wasm', [] ); // $ExpectError
	readWASM( '/path/to/foo.wasm', {} ); // $ExpectError
	readWASM( '/path/to/foo.wasm', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	readWASM( 'foo.wasm', false, onLoad ); // $ExpectError
	readWASM( 'foo.wasm', true, onLoad ); // $ExpectError
	readWASM( 'foo.wasm', null, onLoad ); // $ExpectError
	readWASM( 'foo.wasm', undefined, onLoad ); // $ExpectError
	readWASM( 'foo.wasm', 123, onLoad ); // $ExpectError
	readWASM( 'foo.wasm', [], onLoad ); // $ExpectError
	readWASM( 'foo.wasm', ( x: number ): number => x, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided a `flag` option which is not a string...
{
	readWASM( 'foo.wasm', { 'flag': 123 }, onLoad ); // $ExpectError
	readWASM( 'foo.wasm', { 'flag': true }, onLoad ); // $ExpectError
	readWASM( 'foo.wasm', { 'flag': false }, onLoad ); // $ExpectError
	readWASM( 'foo.wasm', { 'flag': null }, onLoad ); // $ExpectError
	readWASM( 'foo.wasm', { 'flag': [] }, onLoad ); // $ExpectError
	readWASM( 'foo.wasm', { 'flag': {} }, onLoad ); // $ExpectError
	readWASM( 'foo.wasm', { 'flag': ( x: number ): number => x }, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	readWASM(); // $ExpectError
	readWASM( 'C:\\foo\\bar\\baz\\foo.wasm' ); // $ExpectError
}

// Attached to main export is a `sync` method which returns file contents as a Uint8Array or an error...
{
	readWASM.sync( 'foo.wasm' ); // $ExpectType Error | Uint8Array
}

// The compiler throws an error if the `sync` method is provided a first argument which is not a string, buffer, or file descriptor...
{
	readWASM.sync( false ); // $ExpectError
	readWASM.sync( true ); // $ExpectError
	readWASM.sync( null ); // $ExpectError
	readWASM.sync( undefined ); // $ExpectError
	readWASM.sync( [] ); // $ExpectError
	readWASM.sync( {} ); // $ExpectError
	readWASM.sync( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an options argument which is not an object...
{
	readWASM.sync( 'foo.wasm', null ); // $ExpectError
	readWASM.sync( 'foo.wasm', true ); // $ExpectError
	readWASM.sync( 'foo.wasm', false ); // $ExpectError
	readWASM.sync( 'foo.wasm', 123 ); // $ExpectError
	readWASM.sync( 'foo.wasm', [] ); // $ExpectError
	readWASM.sync( 'foo.wasm', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a `flag` option which is not a string...
{
	readWASM.sync( 'foo.wasm', { 'flag': 123 } ); // $ExpectError
	readWASM.sync( 'foo.wasm', { 'flag': true } ); // $ExpectError
	readWASM.sync( 'foo.wasm', { 'flag': false } ); // $ExpectError
	readWASM.sync( 'foo.wasm', { 'flag': null } ); // $ExpectError
	readWASM.sync( 'foo.wasm', { 'flag': [] } ); // $ExpectError
	readWASM.sync( 'foo.wasm', { 'flag': {} } ); // $ExpectError
	readWASM.sync( 'foo.wasm', { 'flag': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	readWASM.sync(); // $ExpectError
}
