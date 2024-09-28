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
import forEach = require( './index' );

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
* Callback function.
*
* @param v - ndarray element
* @throws unexpected error
*/
function clbk( v: any ): void {
	if ( v !== v ) {
		throw new Error( 'unexpected error' );
	}
}


// TESTS //

// The function returns `undefined`...
{
	const x = array();
	const arrays = [ x ];

	forEach( arrays, clbk ); // $ExpectType void
	forEach( arrays, clbk, {} ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarray-like objects...
{
	forEach( 5, clbk ); // $ExpectError
	forEach( true, clbk ); // $ExpectError
	forEach( false, clbk ); // $ExpectError
	forEach( null, clbk ); // $ExpectError
	forEach( undefined, clbk ); // $ExpectError
	forEach( {}, clbk ); // $ExpectError
	forEach( [ 1 ], clbk ); // $ExpectError
	forEach( ( x: number ): number => x, clbk ); // $ExpectError

	forEach( 5, clbk, {} ); // $ExpectError
	forEach( true, clbk, {} ); // $ExpectError
	forEach( false, clbk, {} ); // $ExpectError
	forEach( null, clbk, {} ); // $ExpectError
	forEach( undefined, clbk, {} ); // $ExpectError
	forEach( {}, clbk, {} ); // $ExpectError
	forEach( [ 1 ], clbk, {} ); // $ExpectError
	forEach( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const x = array();
	const arrays = [ x ];

	forEach( arrays, '10' ); // $ExpectError
	forEach( arrays, 5 ); // $ExpectError
	forEach( arrays, true ); // $ExpectError
	forEach( arrays, false ); // $ExpectError
	forEach( arrays, null ); // $ExpectError
	forEach( arrays, undefined ); // $ExpectError
	forEach( arrays, [] ); // $ExpectError
	forEach( arrays, {} ); // $ExpectError

	forEach( arrays, '10', {} ); // $ExpectError
	forEach( arrays, 5, {} ); // $ExpectError
	forEach( arrays, true, {} ); // $ExpectError
	forEach( arrays, false, {} ); // $ExpectError
	forEach( arrays, null, {} ); // $ExpectError
	forEach( arrays, undefined, {} ); // $ExpectError
	forEach( arrays, [], {} ); // $ExpectError
	forEach( arrays, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = array();
	const arrays = [ x ];

	forEach(); // $ExpectError
	forEach( arrays ); // $ExpectError
	forEach( arrays, clbk, {}, {} ); // $ExpectError
}
