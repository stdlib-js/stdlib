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

/// <reference types="@stdlib/types"/>

import { ndarray } from '@stdlib/types/ndarray';
import map = require( './index' );

/**
* Mock function to create an ndarray-like object.
*
* @returns ndarray-like object
*/
function array(): ndarray {
	const obj: ndarray = {
		'byteLength': 80,
		'BYTES_PER_ELEMENT': 8,
		'data': new Float64Array( 10 ),
		'dtype': 'float64',
		'flags': {
			'ROW_MAJOR_CONTIGUOUS': true,
			'COLUMN_MAJOR_CONTIGUOUS': false
		},
		'length': 10,
		'ndims': 1,
		'offset': 0,
		'order': 'row-major',
		'shape': [ 10 ],
		'strides': [ 1 ],
		'get': (): number => 0,
		'set': (): ndarray => obj
	};
	return obj;
}

/**
* Evaluates the identity function.
*
* @param x - input value
* @returns input value
*/
function identity( x: number ): number {
	return x;
}

// TESTS //

// The function returns `undefined`...
{
	const x = array();
	const y = array();
	const arrays = [ x, y ];

	map( arrays, identity ); // $ExpectType void
	map( arrays, identity, {} ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	map( 5, identity ); // $ExpectError
	map( true, identity ); // $ExpectError
	map( false, identity ); // $ExpectError
	map( null, identity ); // $ExpectError
	map( undefined, identity ); // $ExpectError
	map( {}, identity ); // $ExpectError
	map( [ 1 ], identity ); // $ExpectError
	map( ( x: number ): number => x, identity ); // $ExpectError

	map( 5, identity, {} ); // $ExpectError
	map( true, identity, {} ); // $ExpectError
	map( false, identity, {} ); // $ExpectError
	map( null, identity, {} ); // $ExpectError
	map( undefined, identity, {} ); // $ExpectError
	map( {}, identity, {} ); // $ExpectError
	map( [ 1 ], identity, {} ); // $ExpectError
	map( ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const x = array();
	const y = array();
	const arrays = [ x, y ];

	map( arrays, '10' ); // $ExpectError
	map( arrays, 5 ); // $ExpectError
	map( arrays, true ); // $ExpectError
	map( arrays, false ); // $ExpectError
	map( arrays, null ); // $ExpectError
	map( arrays, undefined ); // $ExpectError
	map( arrays, [] ); // $ExpectError
	map( arrays, {} ); // $ExpectError

	map( arrays, '10', {} ); // $ExpectError
	map( arrays, 5, {} ); // $ExpectError
	map( arrays, true, {} ); // $ExpectError
	map( arrays, false, {} ); // $ExpectError
	map( arrays, null, {} ); // $ExpectError
	map( arrays, undefined, {} ); // $ExpectError
	map( arrays, [], {} ); // $ExpectError
	map( arrays, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = array();
	const y = array();
	const arrays = [ x, y ];

	map(); // $ExpectError
	map( arrays ); // $ExpectError{
	map( arrays, identity, {}, {} ); // $ExpectError
}
