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

import lda = require( './index' );


// TESTS //

// The function returns a model object...
{
	const arr = [ 'beep', 'boop' ];
	lda( arr, 2 ); // #ExpectType Model
}

// The returned model object has a `fit` method to fit a model...
{
	const arr = [ 'beep', 'boop' ];
	const model = lda( arr, 2 ); // #ExpectType Model
	model.fit( 1000, 100, 10 );
}

// The `fit` method of the returned model does not compile if not called with three number arguments...
{
	const arr = [ 'beep', 'boop' ];
	const model = lda( arr, 2 ); // #ExpectType Model
	model.fit( false, 100, 10 ); // $ExpectError
	model.fit( true, 100, 10 ); // $ExpectError
	model.fit( 'abc', 100, 10 ); // $ExpectError
	model.fit( null, 100, 10 ); // $ExpectError
	model.fit( [], 100, 10 ); // $ExpectError
	model.fit( {}, 100, 10 ); // $ExpectError
	model.fit( ( x: number ): number => x, 100, 10 ); // $ExpectError

	model.fit( 1000, false, 10 ); // $ExpectError
	model.fit( 1000, true, 10 ); // $ExpectError
	model.fit( 1000, 'abc', 10 ); // $ExpectError
	model.fit( 1000, null, 10 ); // $ExpectError
	model.fit( 1000, [], 10 ); // $ExpectError
	model.fit( 1000, {}, 10 ); // $ExpectError
	model.fit( 1000, ( x: number ): number => x, 10 ); // $ExpectError

	model.fit( 1000, 100, false ); // $ExpectError
	model.fit( 1000, 100, true ); // $ExpectError
	model.fit( 1000, 100, 'abc' ); // $ExpectError
	model.fit( 1000, 100, null ); // $ExpectError
	model.fit( 1000, 100, [] ); // $ExpectError
	model.fit( 1000, 100, {} ); // $ExpectError
	model.fit( 1000, 100, ( x: number ): number => x ); // $ExpectError
}

// The returned model object has a `getTerms` method to retrieve an array of terms...
{
	const arr = [ 'beep', 'boop' ];
	const model = lda( arr, 2 ); // #ExpectType Model
	model.fit( 1000, 100, 10 );
	model.getTerms( 2, 10 ); // #ExpectType Term[]
	model.getTerms( 2 ); // #ExpectType Term[]
}

// The `getTerms` method of the returned model does not compile if not called with number arguments...
{
	const arr = [ 'beep', 'boop' ];
	const model = lda( arr, 2 ); // #ExpectType Model
	model.getTerms( false, 10 ); // $ExpectError
	model.getTerms( true, 10 ); // $ExpectError
	model.getTerms( 'abc', 10 ); // $ExpectError
	model.getTerms( null, 10 ); // $ExpectError
	model.getTerms( [], 10 ); // $ExpectError
	model.getTerms( {}, 10 ); // $ExpectError
	model.getTerms( ( x: number ): number => x, 10 ); // $ExpectError

	model.getTerms( 5, false ); // $ExpectError
	model.getTerms( 5, true ); // $ExpectError
	model.getTerms( 5, 'abc' ); // $ExpectError
	model.getTerms( 5, null ); // $ExpectError
	model.getTerms( 5, [] ); // $ExpectError
	model.getTerms( 5, {} ); // $ExpectError
	model.getTerms( 5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a first argument which is not an array of strings...
{
	lda( false, 10 ); // $ExpectError
	lda( true, 10 ); // $ExpectError
	lda( 32, 10 ); // $ExpectError
	lda( 'abc', 10 ); // $ExpectError
	lda( {}, 10 ); // $ExpectError
	lda( ( x: number ): number => x, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const arr = [ 'beep', 'boop' ];
	lda( arr, false ); // $ExpectError
	lda( arr, true ); // $ExpectError
	lda( arr, null ); // $ExpectError
	lda( arr, 'abc' ); // $ExpectError
	lda( arr, {} ); // $ExpectError
	lda( arr, [] ); // $ExpectError
	lda( arr, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	const arr = [ 'beep', 'boop' ];
	const K = 2;
	lda( arr, K, false ); // $ExpectError
	lda( arr, K, true ); // $ExpectError
	lda( arr, K, null ); // $ExpectError
	lda( arr, K, 'abc' ); // $ExpectError
	lda( arr, K, 123 ); // $ExpectError
	lda( arr, K, [] ); // $ExpectError
	lda( arr, K, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alpha` option which is not a number...
{
	const arr = [ 'beep', 'boop' ];
	const K = 2;
	lda( arr, K, { 'alpha': 'abc' } ); // $ExpectError
	lda( arr, K, { 'alpha': false } ); // $ExpectError
	lda( arr, K, { 'alpha': true } ); // $ExpectError
	lda( arr, K, { 'alpha': null } ); // $ExpectError
	lda( arr, K, { 'alpha': [] } ); // $ExpectError
	lda( arr, K, { 'alpha': {} } ); // $ExpectError
	lda( arr, K, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `beta` option which is not a number...
{
	const arr = [ 'beep', 'boop' ];
	const K = 2;
	lda( arr, K, { 'beta': 'abc' } ); // $ExpectError
	lda( arr, K, { 'beta': false } ); // $ExpectError
	lda( arr, K, { 'beta': true } ); // $ExpectError
	lda( arr, K, { 'beta': null } ); // $ExpectError
	lda( arr, K, { 'beta': [] } ); // $ExpectError
	lda( arr, K, { 'beta': {} } ); // $ExpectError
	lda( arr, K, { 'beta': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const arr = [ 'beep', 'boop' ];
	lda(); // $ExpectError
	lda( arr ); // $ExpectError
	lda( arr, 2, {}, {} ); // $ExpectError
}
