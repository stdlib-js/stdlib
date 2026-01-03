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

import dtypes2enums = require( './index' );


// TESTS //

// The function returns an array...
{
	dtypes2enums( [ 'float64', 'float64' ] ); // $ExpectType (number | null)[]
}

// The compiler throws an error if the function is not provided an array-like object containing data types...
{
	dtypes2enums( '5' ); // $ExpectError
	dtypes2enums( 5 ); // $ExpectError
	dtypes2enums( true ); // $ExpectError
	dtypes2enums( false ); // $ExpectError
	dtypes2enums( null ); // $ExpectError
	dtypes2enums( {} ); // $ExpectError
	dtypes2enums( [ '5' ] ); // $ExpectError
	dtypes2enums( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	dtypes2enums(); // $ExpectError
	dtypes2enums( [ 'float64' ], {} ); // $ExpectError
}
