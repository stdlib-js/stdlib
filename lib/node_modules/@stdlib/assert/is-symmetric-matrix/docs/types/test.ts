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

/* eslint-disable @typescript-eslint/no-invalid-this */

import isSymmetricMatrix = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const matrix =	{
		'data': [ 0, 1, 1, 2 ],
		'ndims': 2,
		'shape': [ 2, 2 ],
		'strides': [ 2, 1 ],
		'offset': 0,
		'order': 'row-major',
		'dtype': 'generic',
		'length': 4,
		'flags': {},
		'get': function get( i: number, j: number ): number {
			const idx = ( this.strides[ 0 ] * i ) + ( this.strides[ 1 ] * j );
			return this.data[ idx ];
		},
		'set': function set( i: number, j: number, v: number ): number {
			const idx = ( this.strides[ 0 ] * i ) + ( this.strides[ 1 ] * j );
			this.data[ idx ] = v;
			return v;
		}
	};
	isSymmetricMatrix( matrix ); // $ExpectType boolean
	isSymmetricMatrix( [] ); // $ExpectType boolean
	isSymmetricMatrix( false ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isSymmetricMatrix(); // $ExpectError
}
