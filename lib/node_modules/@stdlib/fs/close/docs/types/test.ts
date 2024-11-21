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

import close = require( './index' );

const done = ( error: Error ) => {
	if ( error ) {
		throw error;
	}
};


// TESTS //

// The function does not have a return value...
{
	const fd = 0;
	close( fd, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	close( 'abc', done ); // $ExpectError
	close( false, done ); // $ExpectError
	close( true, done ); // $ExpectError
	close( null, done ); // $ExpectError
	close( undefined, done ); // $ExpectError
	close( [], done ); // $ExpectError
	close( {}, done ); // $ExpectError
	close( ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function with the expected signature...
{
	const fd = 0;
	close( fd, 1 ); // $ExpectError
	close( fd, false ); // $ExpectError
	close( fd, true ); // $ExpectError
	close( fd, null ); // $ExpectError
	close( fd, undefined ); // $ExpectError
	close( fd, [] ); // $ExpectError
	close( fd, {} ); // $ExpectError
	close( fd, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	close(); // $ExpectError
	close( 'C:\\foo\\bar\\baz' ); // $ExpectError
}

// Attached to main export is a `sync` method which returns an error or undefined...
{
	const fd = 0;
	close.sync( fd ); // $ExpectType void | Error
	close.sync( 123 ); // $ExpectType void | Error
}

// The compiler throws an error if the `sync` method is provided a first argument which is not a number...
{
	close.sync( 'abc' ); // $ExpectError
	close.sync( false ); // $ExpectError
	close.sync( true ); // $ExpectError
	close.sync( null ); // $ExpectError
	close.sync( undefined ); // $ExpectError
	close.sync( [] ); // $ExpectError
	close.sync( {} ); // $ExpectError
	close.sync( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	close.sync(); // $ExpectError
}
