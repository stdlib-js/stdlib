/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import ndarray = require( '@stdlib/ndarray/base/ctor' );
import minsorted = require( './index' );


// TESTS //

// The function returns a number...
{
	const xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	minsorted( [ x ] ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing ndarrays...
{
	minsorted( 5 ); // $ExpectError
	minsorted( true ); // $ExpectError
	minsorted( false ); // $ExpectError
	minsorted( null ); // $ExpectError
	minsorted( undefined ); // $ExpectError
	minsorted( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	minsorted(); // $ExpectError
	minsorted( [ x ], 2 ); // $ExpectError
}
