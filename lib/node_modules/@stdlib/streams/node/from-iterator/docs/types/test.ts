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

// tslint:disable: no-unused-expression

import randu = require( '@stdlib/random/iter/randu' );
import IteratorStream = require( './index' );

// TESTS //

// The constructor returns a stream...
{
	new IteratorStream( randu() ); // $ExpectType Readable
	new IteratorStream( randu(), { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor is callable...
{
	const iteratorStream = IteratorStream;
	iteratorStream( randu() ); // $ExpectType Readable
	iteratorStream( randu(), { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor has an `objectMode` method which returns a stream...
{
	IteratorStream.objectMode( randu() ); // $ExpectType Readable
	IteratorStream.objectMode( randu(), { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	const f = IteratorStream.factory();
	f( randu() ); // $ExpectType Readable
	f( randu() ); // $ExpectType Readable
}

// The compiler throws an error if the constructor is provided a first argument which is not an iterator...
{
	new IteratorStream( 'abc' ); // $ExpectError
	new IteratorStream( 123 ); // $ExpectError
	new IteratorStream( true ); // $ExpectError
	new IteratorStream( false ); // $ExpectError
	new IteratorStream( [] ); // $ExpectError
	new IteratorStream( {} ); // $ExpectError
	new IteratorStream( null ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a second argument which is not an options object...
{
	new IteratorStream( randu(), 'abc' ); // $ExpectError
	new IteratorStream( randu(), 123 ); // $ExpectError
	new IteratorStream( randu(), true ); // $ExpectError
	new IteratorStream( randu(), false ); // $ExpectError
	new IteratorStream( randu(), [] ); // $ExpectError
	new IteratorStream( randu(), null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a first argument which is not an iterator...
{
	IteratorStream.objectMode( 'abc' ); // $ExpectError
	IteratorStream.objectMode( 123 ); // $ExpectError
	IteratorStream.objectMode( true ); // $ExpectError
	IteratorStream.objectMode( false ); // $ExpectError
	IteratorStream.objectMode( [] ); // $ExpectError
	IteratorStream.objectMode( null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a second argument which is not an options object...
{
	IteratorStream.objectMode( randu(), 'abc' ); // $ExpectError
	IteratorStream.objectMode( randu(), 123 ); // $ExpectError
	IteratorStream.objectMode( randu(), true ); // $ExpectError
	IteratorStream.objectMode( randu(), false ); // $ExpectError
	IteratorStream.objectMode( randu(), [] ); // $ExpectError
	IteratorStream.objectMode( randu(), null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument which is not an options object...
{
	IteratorStream.factory( 'abc' ); // $ExpectError
	IteratorStream.factory( 123 ); // $ExpectError
	IteratorStream.factory( true ); // $ExpectError
	IteratorStream.factory( false ); // $ExpectError
	IteratorStream.factory( [] ); // $ExpectError
	IteratorStream.factory( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an argument which is not an iterator...
{
	const f = IteratorStream.factory();
	f( 'abc' ); // $ExpectError
	f( 123 ); // $ExpectError
	f( true ); // $ExpectError
	f( false ); // $ExpectError
	f( [] ); // $ExpectError
	f( {} ); // $ExpectError
	f( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid number of arguments...
{
	let f2 = IteratorStream.factory();
	f2(); // $ExpectError
	f2( randu(), randu() ); // $ExpectError

	f2 = IteratorStream.factory( { 'objectMode': true } );
	f2(); // $ExpectError
	f2( randu(), randu() ); // $ExpectError
}
