/**
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

import parallel = require( './index' );

/**
* Test function.
*
* @private
* @param next - callback
*/
function foo( next: Function ): void {
	next( null, 'beep' );
}

/**
* Test function.
*
* @private
* @param next - callback
*/
function bar( next: Function ): void {
	next( null, 'boop' );
}

/**
* Test function.
*
* @private
* @param error - error argument
* @param out - output array
*/
function done( error: Error | null, out: any ): void {
	if ( error ) {
		throw error;
	}
	if ( out === void 0 ) {
		throw new Error( 'unexpected error' );
	}
}


// TESTS //

// The function returns undefined...
{
	parallel( [ foo, bar ], done ); // $ExpectType void
	parallel( [ foo, bar ], {}, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of functions...
{
	parallel( 2, done ); // $ExpectError
	parallel( false, done ); // $ExpectError
	parallel( true, done ); // $ExpectError
	parallel( 'abc', done ); // $ExpectError
	parallel( {}, done ); // $ExpectError
	parallel( ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid callback argument...
{
	parallel( [ foo, bar ], 2 ); // $ExpectError
	parallel( [ foo, bar ], false ); // $ExpectError
	parallel( [ foo, bar ], true ); // $ExpectError
	parallel( [ foo, bar ], 'abc' ); // $ExpectError
	parallel( [ foo, bar ], {} ); // $ExpectError
	parallel( [ foo, bar ], [] ); // $ExpectError
	parallel( [ foo, bar ], ( x: number ): number => x ); // $ExpectError

	parallel( [ foo, bar ], {}, 2 ); // $ExpectError
	parallel( [ foo, bar ], {}, false ); // $ExpectError
	parallel( [ foo, bar ], {}, true ); // $ExpectError
	parallel( [ foo, bar ], {}, 'abc' ); // $ExpectError
	parallel( [ foo, bar ], {}, {} ); // $ExpectError
	parallel( [ foo, bar ], {}, [] ); // $ExpectError
	parallel( [ foo, bar ], {}, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	parallel( [ foo, bar ], 2, done ); // $ExpectError
	parallel( [ foo, bar ], false, done ); // $ExpectError
	parallel( [ foo, bar ], true, done ); // $ExpectError
	parallel( [ foo, bar ], 'abc', done ); // $ExpectError
	parallel( [ foo, bar ], [], done ); // $ExpectError
	parallel( [ foo, bar ], ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided invalid options...
{
	parallel( [ foo, bar ], { 'limit': '2' }, done ); // $ExpectError
	parallel( [ foo, bar ], { 'limit': false }, done ); // $ExpectError
	parallel( [ foo, bar ], { 'limit': true }, done ); // $ExpectError
	parallel( [ foo, bar ], { 'limit': 'abc' }, done ); // $ExpectError
	parallel( [ foo, bar ], { 'limit': [] }, done ); // $ExpectError
	parallel( [ foo, bar ], { 'limit': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	parallel(); // $ExpectError
	parallel( [ foo, bar ] ); // $ExpectError
	parallel( [ foo, bar ], {}, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	parallel.factory( [ foo, bar ] ); // $ExpectType ParallelFunction<unknown>
	parallel.factory( [ foo, bar ], {} ); // $ExpectType ParallelFunction<unknown>
}

// The compiler throws an error if the `factory` method is provided a first argument which is not an array of functions...
{
	parallel.factory( 2 ); // $ExpectError
	parallel.factory( false ); // $ExpectError
	parallel.factory( true ); // $ExpectError
	parallel.factory( 'abc' ); // $ExpectError
	parallel.factory( {} ); // $ExpectError
	parallel.factory( ( x: number ): number => x ); // $ExpectError

	parallel.factory( 2, {} ); // $ExpectError
	parallel.factory( false, {} ); // $ExpectError
	parallel.factory( true, {} ); // $ExpectError
	parallel.factory( 'abc', {} ); // $ExpectError
	parallel.factory( {}, {} ); // $ExpectError
	parallel.factory( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	parallel.factory( [ foo, bar ], 2 ); // $ExpectError
	parallel.factory( [ foo, bar ], false ); // $ExpectError
	parallel.factory( [ foo, bar ], true ); // $ExpectError
	parallel.factory( [ foo, bar ], 'abc' ); // $ExpectError
	parallel.factory( [ foo, bar ], [] ); // $ExpectError
	parallel.factory( [ foo, bar ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	parallel.factory( [ foo, bar ], { 'limit': '2' } ); // $ExpectError
	parallel.factory( [ foo, bar ], { 'limit': false } ); // $ExpectError
	parallel.factory( [ foo, bar ], { 'limit': true } ); // $ExpectError
	parallel.factory( [ foo, bar ], { 'limit': 'abc' } ); // $ExpectError
	parallel.factory( [ foo, bar ], { 'limit': [] } ); // $ExpectError
	parallel.factory( [ foo, bar ], { 'limit': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	parallel.factory(); // $ExpectError
	parallel.factory( [ foo, bar ], {}, done ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid callback argument...
{
	const f = parallel.factory( [ foo, bar ] );

	f( 2 ); // $ExpectError
	f( false ); // $ExpectError
	f( true ); // $ExpectError
	f( 'abc' ); // $ExpectError
	f( {} ); // $ExpectError
	f( [] ); // $ExpectError
	f( ( x: number ): number => x ); // $ExpectError
}
