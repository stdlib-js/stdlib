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

import RandomStream = require( './index' );


// TESTS //

// The constructor returns a stream...
{
	// tslint:disable: no-unused-expression
	new RandomStream( 2, 5 ); // $ExpectType RandomStream
	new RandomStream( 2, 5, {} ); // $ExpectType RandomStream
	new RandomStream( 2, 5, { 'iter': 10 } ); // $ExpectType RandomStream

	// tslint:enable: no-unused-expression
}

// The constructor is callable...
{
	const randomStream = RandomStream;

	randomStream( 2, 5 ); // $ExpectType RandomStream
	randomStream( 2, 5, {} ); // $ExpectType RandomStream
	randomStream( 2, 5, { 'iter': 10 } ); // $ExpectType RandomStream
}

// The constructor has an `objectMode` method which returns a stream...
{
	RandomStream.objectMode( 2, 5 ); // $ExpectType RandomStream
	RandomStream.objectMode( 2, 5, {} ); // $ExpectType RandomStream
	RandomStream.objectMode( 2, 5, { 'iter': 10 } ); // $ExpectType RandomStream
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	let f = RandomStream.factory( 2, 5 );
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream

	f = RandomStream.factory( 2, 5, {} );
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream

	f = RandomStream.factory( 2, 5, { 'iter': 10 } );
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream

	f = RandomStream.factory();
	f( 2, 5 ); // $ExpectType RandomStream
	f( 1.0, 2 ); // $ExpectType RandomStream
	f( 3.0, 1.0 ); // $ExpectType RandomStream

	f = RandomStream.factory( {} );
	f( 2, 5 ); // $ExpectType RandomStream
	f( 1.0, 2 ); // $ExpectType RandomStream
	f( 3.0, 1.0 ); // $ExpectType RandomStream

	f = RandomStream.factory( { 'iter': 10 } );
	f( 2, 5 ); // $ExpectType RandomStream
	f( 1.0, 2 ); // $ExpectType RandomStream
	f( 3.0, 1.0 ); // $ExpectType RandomStream
}

// The compiler throws an error if the constructor is provided invalid input arguments...
{
	const s1 = new RandomStream( '2', 5 ); // $ExpectError
	const s2 = new RandomStream( 2, '5' ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided invalid input arguments...
{
	RandomStream.objectMode( '2', 5 ); // $ExpectError
	RandomStream.objectMode( 2, '5' ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided invalid input arguments...
{
	RandomStream.factory( '2', 5 ); // $ExpectError
	RandomStream.factory( '2', 5, {} ); // $ExpectError

	RandomStream.factory( 2, '5' ); // $ExpectError
	RandomStream.factory( 2, '5', {} ); // $ExpectError

	RandomStream.factory( 2, 5, null ); // $ExpectError
	RandomStream.factory( 2, 5, { 'iter': 'beep' } ); // $ExpectError

	RandomStream.factory( null ); // $ExpectError
	RandomStream.factory( { 'iter': 'beep' } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid input arguments...
{
	let f = RandomStream.factory();
	f( '2', 5 ); // $ExpectError
	f( 2, '5' ); // $ExpectError

	f = RandomStream.factory( {} );
	f( '2', 5 ); // $ExpectError
	f( 2, '5' ); // $ExpectError

	f = RandomStream.factory( { 'iter': 10 } );
	f( '2', 5 ); // $ExpectError
	f( 2, '5' ); // $ExpectError
}

// The compiler throws an error if the constructor is provided insufficient arguments...
{
	const s1 = new RandomStream(); // $ExpectError
	const s2 = new RandomStream( 2 ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided insufficient arguments...
{
	RandomStream.objectMode(); // $ExpectError
	RandomStream.objectMode( 2 ); // $ExpectError
}
