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

import convertSame = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	const y = new Float64Array( 0 );

	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], y ); // $ExpectType ArrayOrTypedArray
}

// The compiler throws an error if the function is provided a first argument which is not array-like...
{
	const y = new Float64Array( 0 );

	convertSame( 123, y );  // $ExpectError
	convertSame( true, y ); // $ExpectError
	convertSame( false, y ); // $ExpectError
	convertSame( {}, y ); // $ExpectError
	convertSame( null, y ); // $ExpectError
	convertSame( undefined, y ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array or typed array...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	convertSame( x, 'abc' );  // $ExpectError
	convertSame( x, 123 );  // $ExpectError
	convertSame( x, true ); // $ExpectError
	convertSame( x, false ); // $ExpectError
	convertSame( x, {} ); // $ExpectError
	convertSame( x, null ); // $ExpectError
	convertSame( x, undefined ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];
	const y = new Float64Array( 0 );

	convertSame(); // $ExpectError
	convertSame( x ); // $ExpectError
	convertSame( x, y, 2 ); // $ExpectError
}
