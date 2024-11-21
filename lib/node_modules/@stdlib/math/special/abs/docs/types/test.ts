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

/// <reference types="@stdlib/types"/>

import { ndarray } from '@stdlib/types/ndarray';
import abs = require( './index' );

/**
* Returns a mock ndarray object.
*
* @returns ndarray
*/
function array(): ndarray {
	const buf = [ 1, 2, 3, 4 ];
	const x: ndarray = {
		'byteLength': null,
		'BYTES_PER_ELEMENT': null,
		'data': buf,
		'dtype': 'generic',
		'flags': {
			'ROW_MAJOR_CONTIGUOUS': true,
			'COLUMN_MAJOR_CONTIGUOUS': false
		},
		'length': 4,
		'ndims': 1,
		'offset': 0,
		'order': 'row-major',
		'shape': [ 4 ],
		'strides': [ 1 ],
		'get': ( i: number ): number => {
			return buf[ i ];
		},
		'set': ( i: number, v: number ): ndarray => {
			buf[ i ] = v;
			return x;
		}
	};
	return x;
}


// TESTS //

// The function returns a number if provided a number...
{
	abs( 8 ); // $ExpectType number
}

// The function returns an array-like object if provided an array-like object...
{
	const x = new Float64Array( 10 );

	abs( x ); // $ExpectType ArrayLike<number>
}

// The function returns an ndarray if provided an ndarray...
{
	const x = array();

	abs( x ); // $ExpectType ndarray
	abs( x, {} ); // $ExpectType ndarray
	abs( x, { 'order': 'row-major' } ); // $ExpectType ndarray
	abs( x, { 'dtype': 'float64' } ); // $ExpectType ndarray
}

// The compiler throws an error if the function is provided a first argument which is neither an ndarray, array-like object, nor number...
{
	abs( '5' ); // $ExpectError
	abs( true ); // $ExpectError
	abs( false ); // $ExpectError
	abs( null ); // $ExpectError
	abs( undefined ); // $ExpectError
	abs( {} ); // $ExpectError
	abs( [ '5' ] ); // $ExpectError
	abs( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid options object...
{
	const x = array();

	abs( x, '5' ); // $ExpectError
	abs( x, true ); // $ExpectError
	abs( x, false ); // $ExpectError
	abs( x, [ '5' ] ); // $ExpectError
	abs( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `order` option...
{
	const x = array();
	abs( x, { 'order': '5' } ); // $ExpectError
	abs( x, { 'order': true } ); // $ExpectError
	abs( x, { 'order': false } ); // $ExpectError
	abs( x, { 'order': null } ); // $ExpectError
	abs( x, { 'order': {} } ); // $ExpectError
	abs( x, { 'order': [ '5' ] } ); // $ExpectError
	abs( x, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = array();
	abs( x, { 'dtype': '5' } ); // $ExpectError
	abs( x, { 'dtype': true } ); // $ExpectError
	abs( x, { 'dtype': false } ); // $ExpectError
	abs( x, { 'dtype': null } ); // $ExpectError
	abs( x, { 'dtype': {} } ); // $ExpectError
	abs( x, { 'dtype': [ '5' ] } ); // $ExpectError
	abs( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	abs(); // $ExpectError
}

// Attached to the main function is an `assign` method which returns an array-like object if provided an array-like object...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs.assign( x, y ); // $ExpectType ArrayLike<number>
}

// Attached to the main function is an `assign` method which returns an ndarray if provided an ndarray...
{
	const x = array();
	const y = array();

	abs.assign( x, y ); // $ExpectType ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is neither an ndarray nor array-like object...
{
	const y = array();

	abs.assign( '5', y ); // $ExpectError
	abs.assign( true, y ); // $ExpectError
	abs.assign( false, y ); // $ExpectError
	abs.assign( null, y ); // $ExpectError
	abs.assign( undefined, y ); // $ExpectError
	abs.assign( {}, y ); // $ExpectError
	abs.assign( ( x: number ): number => x, y ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is neither an ndarray nor array-like object...
{
	const x = array();

	abs.assign( x, '5' ); // $ExpectError
	abs.assign( x, true ); // $ExpectError
	abs.assign( x, false ); // $ExpectError
	abs.assign( x, null ); // $ExpectError
	abs.assign( x, undefined ); // $ExpectError
	abs.assign( x, {} ); // $ExpectError
	abs.assign( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = array();
	const y = array();

	abs.assign(); // $ExpectError
	abs.assign( x ); // $ExpectError
	abs.assign( x, y, y ); // $ExpectError
}
