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

import typedarray = require( './index' );


// TESTS //

// The function returns a typed array..
{
	typedarray(); // $ExpectType TypedArray
	typedarray( 'float32' ); // $ExpectType TypedArray
	typedarray( 10, 'float32' ); // $ExpectType TypedArray
	typedarray( [ 1, 2, 3 ], 'int32' ); // $ExpectType TypedArray
}

// The compiler throws an error if the function is provided a first argument which is not a data type, number, array-like object, or typed array...
{
	typedarray( true ); // $ExpectError
	typedarray( false ); // $ExpectError
	typedarray( {} ); // $ExpectError
	typedarray( null ); // $ExpectError
	typedarray( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	typedarray( buf, 8, 2, 'int32', {} ); // $ExpectError
}
