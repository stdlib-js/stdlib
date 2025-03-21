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

import parallel = require( './index' );

const done = ( error: Error ) => {
	if ( error ) {
		throw error;
	}
};

// TESTS //

// The function returns an array of indices, element values, or arrays of index-value pairs...
{
	const files = [ './a.js', './b.js ' ];
	parallel( files, done );
}

// The compiler throws an error if the function is provided a first argument which is not an array of strings...
{
	parallel( 'abc', done ); // $ExpectError
	parallel( {}, done ); // $ExpectError
	parallel( null, done ); // $ExpectError
	parallel( true, done ); // $ExpectError
	parallel( false, done ); // $ExpectError
	parallel( 5, done ); // $ExpectError
	parallel( ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a function...
{
	const files = [ './a.js', './b.js ' ];
	parallel( files, false ); // $ExpectError
	parallel( files, true ); // $ExpectError
	parallel( files, 32 ); // $ExpectError
	parallel( files, 'abc' ); // $ExpectError
	parallel( files, [] ); // $ExpectError
	parallel( files, {} ); // $ExpectError

	parallel( files, {}, false ); // $ExpectError
	parallel( files, {}, true ); // $ExpectError
	parallel( files, {}, 32 ); // $ExpectError
	parallel( files, {}, 'abc' ); // $ExpectError
	parallel( files, {}, [] ); // $ExpectError
	parallel( files, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const files = [ './a.js', './b.js ' ];
	parallel( files, null, done ); // $ExpectError
	parallel( files, 123, done ); // $ExpectError
	parallel( files, false, done ); // $ExpectError
	parallel( files, true, done ); // $ExpectError
	parallel( files, [], done ); // $ExpectError
	parallel( files, ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `cmd` option which is not a string...
{
	const files = [ './a.js', './b.js ' ];
	parallel( files, { 'cmd': false }, done ); // $ExpectError
	parallel( files, { 'cmd': true }, done ); // $ExpectError
	parallel( files, { 'cmd': null }, done ); // $ExpectError
	parallel( files, { 'cmd': 123 }, done ); // $ExpectError
	parallel( files, { 'cmd': [] }, done ); // $ExpectError
	parallel( files, { 'cmd': {} }, done ); // $ExpectError
	parallel( files, { 'cmd': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `workers` option which is not a number...
{
	const files = [ './a.js', './b.js ' ];
	parallel( files, { 'workers': 'abc' }, done ); // $ExpectError
	parallel( files, { 'workers': false }, done ); // $ExpectError
	parallel( files, { 'workers': true }, done ); // $ExpectError
	parallel( files, { 'workers': null }, done ); // $ExpectError
	parallel( files, { 'workers': [] }, done ); // $ExpectError
	parallel( files, { 'workers': {} }, done ); // $ExpectError
	parallel( files, { 'workers': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `concurrency` option which is not a number...
{
	const files = [ './a.js', './b.js ' ];
	parallel( files, { 'concurrency': 'abc' }, done ); // $ExpectError
	parallel( files, { 'concurrency': false }, done ); // $ExpectError
	parallel( files, { 'concurrency': true }, done ); // $ExpectError
	parallel( files, { 'concurrency': null }, done ); // $ExpectError
	parallel( files, { 'concurrency': [] }, done ); // $ExpectError
	parallel( files, { 'concurrency': {} }, done ); // $ExpectError
	parallel( files, { 'concurrency': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `ordered` option which is not a boolean...
{
	const files = [ './a.js', './b.js ' ];
	parallel( files, { 'ordered': 'abc' }, done ); // $ExpectError
	parallel( files, { 'ordered': 123 }, done ); // $ExpectError
	parallel( files, { 'ordered': null }, done ); // $ExpectError
	parallel( files, { 'ordered': [] }, done ); // $ExpectError
	parallel( files, { 'ordered': {} }, done ); // $ExpectError
	parallel( files, { 'ordered': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `uid` option which is not a number...
{
	const files = [ './a.js', './b.js ' ];
	parallel( files, { 'uid': 'abc' }, done ); // $ExpectError
	parallel( files, { 'uid': false }, done ); // $ExpectError
	parallel( files, { 'uid': true }, done ); // $ExpectError
	parallel( files, { 'uid': null }, done ); // $ExpectError
	parallel( files, { 'uid': [] }, done ); // $ExpectError
	parallel( files, { 'uid': {} }, done ); // $ExpectError
	parallel( files, { 'uid': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `gid` option which is not a number...
{
	const files = [ './a.js', './b.js ' ];
	parallel( files, { 'gid': 'abc' }, done ); // $ExpectError
	parallel( files, { 'gid': false }, done ); // $ExpectError
	parallel( files, { 'gid': true }, done ); // $ExpectError
	parallel( files, { 'gid': null }, done ); // $ExpectError
	parallel( files, { 'gid': [] }, done ); // $ExpectError
	parallel( files, { 'gid': {} }, done ); // $ExpectError
	parallel( files, { 'gid': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `maxBuffer` option which is not a number...
{
	const files = [ './a.js', './b.js ' ];
	parallel( files, { 'maxBuffer': 'abc' }, done ); // $ExpectError
	parallel( files, { 'maxBuffer': false }, done ); // $ExpectError
	parallel( files, { 'maxBuffer': true }, done ); // $ExpectError
	parallel( files, { 'maxBuffer': null }, done ); // $ExpectError
	parallel( files, { 'maxBuffer': [] }, done ); // $ExpectError
	parallel( files, { 'maxBuffer': {} }, done ); // $ExpectError
	parallel( files, { 'maxBuffer': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const files = [ './a.js', './b.js ' ];
	parallel(); // $ExpectError
	parallel( files ); // $ExpectError
	parallel( files, {}, done, 16 ); // $ExpectError
}
