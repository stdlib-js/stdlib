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

import promoteDataTypes = require( './index' );


// TESTS //

// The function returns a data type or null...
{
	promoteDataTypes( [ 'float64', 'float64' ] ); // $ExpectType DataType | null
}

// The compiler throws an error if the function is not provided an array-like object containing data types...
{
	promoteDataTypes( '5' ); // $ExpectError
	promoteDataTypes( 5 ); // $ExpectError
	promoteDataTypes( true ); // $ExpectError
	promoteDataTypes( false ); // $ExpectError
	promoteDataTypes( null ); // $ExpectError
	promoteDataTypes( {} ); // $ExpectError
	promoteDataTypes( [ '5' ] ); // $ExpectError
	promoteDataTypes( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	promoteDataTypes(); // $ExpectError
	promoteDataTypes( [ 'float64' ], {} ); // $ExpectError
}
