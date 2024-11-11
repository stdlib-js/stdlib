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

import resolveParentPaths = require( './index' );

/**
* Callback function.
*
* @param error - error object
* @param path - resolved path
*/
function done( error: Error | null, paths: Array<string|null> ): void {
	if ( error || paths === null ) {
		throw error;
	}
}


// TESTS //

// The function does not have a return value...
{
	resolveParentPaths( [ 'package.json' ], done ); // $ExpectType void
	resolveParentPaths( [ 'package.json' ], {}, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of strings...
{
	resolveParentPaths( 123, done ); // $ExpectError
	resolveParentPaths( false, done ); // $ExpectError
	resolveParentPaths( true, done ); // $ExpectError
	resolveParentPaths( null, done ); // $ExpectError
	resolveParentPaths( undefined, done ); // $ExpectError
	resolveParentPaths( {}, done ); // $ExpectError
	resolveParentPaths( ( x: number ): number => x, done ); // $ExpectError
	resolveParentPaths( 'beep', done ); // $ExpectError
	resolveParentPaths( [ 1, 2 ], done ); // $ExpectError

	resolveParentPaths( 123, {}, done ); // $ExpectError
	resolveParentPaths( false, {}, done ); // $ExpectError
	resolveParentPaths( true, {}, done ); // $ExpectError
	resolveParentPaths( null, {}, done ); // $ExpectError
	resolveParentPaths( undefined, {}, done ); // $ExpectError
	resolveParentPaths( {}, {}, done ); // $ExpectError
	resolveParentPaths( ( x: number ): number => x, {}, done ); // $ExpectError
	resolveParentPaths( 'beep', {}, done ); // $ExpectError
	resolveParentPaths( [ 1, 2 ], {}, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function with the expected signature...
{
	resolveParentPaths( [ '/var/log/' ], 1 ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], false ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], true ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], null ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], undefined ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], [] ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], {} ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], ( x: number ): number => x ); // $ExpectError

	resolveParentPaths( [ '/var/log/' ], {}, 1 ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], {}, false ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], {}, true ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], {}, null ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], {}, undefined ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], {}, [] ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], {}, {} ); // $ExpectError
	resolveParentPaths( [ '/var/log/' ], {}, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	resolveParentPaths( [ 'package.json' ], '5', done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], 5, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], true, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], false, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], null, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], undefined, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], [], done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an `dir` option which is not a string...
{
	resolveParentPaths( [ 'package.json' ], { 'dir': 123 }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'dir': true }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'dir': false }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'dir': null }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'dir': [] }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'dir': {} }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'dir': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an `mode` option which is not a recognized string...
{
	resolveParentPaths( [ 'package.json' ], { 'mode': 'beep' }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'mode': 123 }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'mode': true }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'mode': false }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'mode': null }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'mode': [] }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'mode': {} }, done ); // $ExpectError
	resolveParentPaths( [ 'package.json' ], { 'mode': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	resolveParentPaths(); // $ExpectError
	resolveParentPaths( [ 'C:\\foo\\bar\\baz' ] ); // $ExpectError
	resolveParentPaths( [ 'C:\\foo\\bar\\baz' ], {} ); // $ExpectError
	resolveParentPaths( [ 'C:\\foo\\bar\\baz' ], {}, done, {} ); // $ExpectError
}

// Attached to main export is a `sync` method which returns an array...
{
	resolveParentPaths.sync( [ 'package.json' ] ); // $ExpectType (string | null)[]
	resolveParentPaths.sync( [ 'package.json' ], {} ); // $ExpectType (string | null)[]
}

// The compiler throws an error if the `sync` method is provided a first argument which is not an array of strings...
{
	resolveParentPaths.sync( 123 ); // $ExpectError
	resolveParentPaths.sync( false ); // $ExpectError
	resolveParentPaths.sync( true ); // $ExpectError
	resolveParentPaths.sync( null ); // $ExpectError
	resolveParentPaths.sync( undefined ); // $ExpectError
	resolveParentPaths.sync( {} ); // $ExpectError
	resolveParentPaths.sync( ( x: number ): number => x ); // $ExpectError
	resolveParentPaths.sync( 'beep' ); // $ExpectError
	resolveParentPaths.sync( [ 1, 2 ] ); // $ExpectError

	resolveParentPaths.sync( 123, {} ); // $ExpectError
	resolveParentPaths.sync( false, {} ); // $ExpectError
	resolveParentPaths.sync( true, {} ); // $ExpectError
	resolveParentPaths.sync( null, {} ); // $ExpectError
	resolveParentPaths.sync( undefined, {} ); // $ExpectError
	resolveParentPaths.sync( {}, {} ); // $ExpectError
	resolveParentPaths.sync( ( x: number ): number => x, {} ); // $ExpectError
	resolveParentPaths.sync( 'beep', {} ); // $ExpectError
	resolveParentPaths.sync( [ 1, 2 ], {} ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an options argument which is not an object...
{
	resolveParentPaths.sync( [ 'package.json' ], '5' ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], 5 ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], true ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], false ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], null ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], [] ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an `dir` option which is not a string...
{
	resolveParentPaths.sync( [ 'package.json' ], { 'dir': 123 } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'dir': true } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'dir': false } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'dir': null } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'dir': [] } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'dir': {} } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'dir': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an `mode` option which is not a recognized string...
{
	resolveParentPaths.sync( [ 'package.json' ], { 'mode': 'beep' } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'mode': 123 } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'mode': true } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'mode': false } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'mode': null } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'mode': [] } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'mode': {} } ); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	resolveParentPaths.sync(); // $ExpectError
	resolveParentPaths.sync( [ 'package.json' ], {}, {} ); // $ExpectError
}
