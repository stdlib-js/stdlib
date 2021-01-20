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

import convert = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'int32' ); // $ExpectType ArrayOrTypedArray
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'float32' ); // $ExpectType ArrayOrTypedArray
}

// The compiler throws an error if the function is provided a first argument which is not array-like...
{
	convert( 123, 'float64' );  // $ExpectError
	convert( true, 'float64' ); // $ExpectError
	convert( false, 'float64' ); // $ExpectError
	convert( {}, 'float64' ); // $ExpectError
	convert( null, 'float64' ); // $ExpectError
	convert( undefined, 'float64' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a known data type...
{
	convert( [ 1, 2, 3, 4 ], 'abc' ); // $ExpectError
	convert( [ 1, 2, 3, 4 ], 123 ); // $ExpectError
	convert( [ 1, 2, 3, 4 ], [] ); // $ExpectError
	convert( [ 1, 2, 3, 4 ], {} ); // $ExpectError
	convert( [ 1, 2, 3, 4 ], true ); // $ExpectError
	convert( [ 1, 2, 3, 4 ], false ); // $ExpectError
	convert( [ 1, 2, 3, 4 ], null ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	convert(); // $ExpectError
	convert( [ 1.0, 2.0, 3.0, 4.0 ] ); // $ExpectError
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'float64', 2 ); // $ExpectError
}
