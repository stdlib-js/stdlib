/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import dtypes2signatures = require( './index' );


// TESTS //

// The function returns an array-like object containing strings...
{
	dtypes2signatures( [ 'float64', 'float64' ], 1, 1 ); // $ExpectType ArrayLike<string>
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing strings...
{
	dtypes2signatures( 5, 1, 1 ); // $ExpectError
	dtypes2signatures( true, 1, 1 ); // $ExpectError
	dtypes2signatures( false, 1, 1 ); // $ExpectError
	dtypes2signatures( null, 1, 1 ); // $ExpectError
	dtypes2signatures( undefined, 1, 1 ); // $ExpectError
	dtypes2signatures( {}, 1, 1 ); // $ExpectError
	dtypes2signatures( ( x: number ): number => x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	dtypes2signatures( [ 'float64', 'float64' ], '5', 1 ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], true, 1 ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], false, 1 ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], null, 1 ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], undefined, 1 ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], [], 1 ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], {}, 1 ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	dtypes2signatures( [ 'float64', 'float64' ], 1, '5' ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], 1, true ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], 1, false ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], 1, null ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], 1, undefined ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], 1, [] ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], 1, {} ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	dtypes2signatures(); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ] ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], 1 ); // $ExpectError
	dtypes2signatures( [ 'float64', 'float64' ], 1, 1, 1 ); // $ExpectError
}
