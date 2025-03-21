/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/* eslint-disable @typescript-eslint/no-unused-expressions */

import AccessorArray = require( './index' );


// TESTS //

// The function returns an accessor array...
{
	const arr = [ 1, 2, 3 ];

	new AccessorArray<any>( arr ); // $ExpectType AccessorArray<any>
	AccessorArray<any>( arr ); // $ExpectType AccessorArray<any>

	new AccessorArray<number>( arr ); // $ExpectType AccessorArray<number>
	AccessorArray<number>( arr ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is not provided an array-like object...
{
	new AccessorArray<any>( 123 ); // $ExpectError
	new AccessorArray<any>( true ); // $ExpectError
	new AccessorArray<any>( false ); // $ExpectError
	new AccessorArray<any>( null ); // $ExpectError
	new AccessorArray<any>( {} ); // $ExpectError

	AccessorArray<any>( 123 ); // $ExpectError
	AccessorArray<any>( true ); // $ExpectError
	AccessorArray<any>( false ); // $ExpectError
	AccessorArray<any>( null ); // $ExpectError
	AccessorArray<any>( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3, 4, 5, 6 ];

	new AccessorArray<any>(); // $ExpectError
	new AccessorArray<any>( x, 5 ); // $ExpectError

	AccessorArray<any>(); // $ExpectError
	AccessorArray<any>( x, 5 ); // $ExpectError
}

// The function returns an accessor array which has a `length` property...
{
	const arr1 = [ 1, 2, 3 ];
	const o1 = new AccessorArray<any>( arr1 ); // $ExpectType AccessorArray<any>
	o1.length; // $ExpectType number

	const arr2 = [ 1, '2', true ];
	const o2 = AccessorArray<any>( arr2 ); // $ExpectType AccessorArray<any>
	o2.length; // $ExpectType number
}

// The function returns an accessor array which has a `get` method for accessing array elements...
{
	const arr1 = [ 1, 2, 3 ];
	const o1 = new AccessorArray<number>( arr1 ); // $ExpectType AccessorArray<number>
	o1.get( 0 ); // $ExpectType number

	const arr2 = [ 1, '2', true ];
	const o2 = AccessorArray<any>( arr2 ); // $ExpectType AccessorArray<any>
	o2.get( 0 ); // $ExpectType any
}

// The compiler throws an error if the `get` method is not provided a number...
{
	const o = new AccessorArray<any>( [ 1, 2, 3 ] );

	o.get( '123' ); // $ExpectError
	o.get( true ); // $ExpectError
	o.get( false ); // $ExpectError
	o.get( null ); // $ExpectError
	o.get( [] ); // $ExpectError
	o.get( {} ); // $ExpectError
}

// The function returns an accessor array which has a `set` method for setting array elements...
{
	const arr1 = [ 1, 2, 3 ];
	const o1 = new AccessorArray<number>( arr1 ); // $ExpectType AccessorArray<number>
	o1.set( 0 ); // $ExpectType void
	o1.set( 0, 1 ); // $ExpectType void

	const arr2 = [ 1, '2', true ];
	const o2 = AccessorArray<any>( arr2 ); // $ExpectType AccessorArray<any>
	o2.set( 0 ); // $ExpectType void
	o2.set( 0, 1 ); // $ExpectType void
}

// The compiler throws an error if the `set` method is provided any invalid first argument...
{
	const o = new AccessorArray<number>( [ 1, 2, 3 ] );

	o.set( '123' ); // $ExpectError
	o.set( true ); // $ExpectError
	o.set( false ); // $ExpectError
	o.set( null ); // $ExpectError
	o.set( {} ); // $ExpectError
}

// The compiler throws an error if the `set` method is not provided a second argument which is a number...
{
	const o = new AccessorArray<number>( [ 1, 2, 3 ] );

	o.set( 0, '123' ); // $ExpectError
	o.set( 0, true ); // $ExpectError
	o.set( 0, false ); // $ExpectError
	o.set( 0, null ); // $ExpectError
	o.set( 0, [] ); // $ExpectError
	o.set( 0, {} ); // $ExpectError
}
