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

/// <reference types="@stdlib/types"/>

import { ndarray } from '@stdlib/types/ndarray';
import nullary = require( './index' );

/**
* Mock function to create an ndarray-like object.
*
* @return ndarray-like object
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
* Returns a constant value.
*
* @returns output value
*/
function constant(): number {
	return 10.0;
}


// TESTS //

// The function returns `undefined`...
{
	const x = array();
	const arrays = [ x ];

	nullary( arrays, constant ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	nullary( 5, constant ); // $ExpectError
	nullary( true, constant ); // $ExpectError
	nullary( false, constant ); // $ExpectError
	nullary( null, constant ); // $ExpectError
	nullary( undefined, constant ); // $ExpectError
	nullary( {}, constant ); // $ExpectError
	nullary( [ 1 ], constant ); // $ExpectError
	nullary( ( x: number ): number => x, constant ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a nullary function...
{
	const x = array();
	const arrays = [ x ];

	nullary( arrays, '10' ); // $ExpectError
	nullary( arrays, 5 ); // $ExpectError
	nullary( arrays, true ); // $ExpectError
	nullary( arrays, false ); // $ExpectError
	nullary( arrays, null ); // $ExpectError
	nullary( arrays, undefined ); // $ExpectError
	nullary( arrays, [] ); // $ExpectError
	nullary( arrays, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = array();
	const arrays = [ x ];

	nullary(); // $ExpectError
	nullary( arrays ); // $ExpectError
	nullary( arrays, constant, 10 ); // $ExpectError
}
