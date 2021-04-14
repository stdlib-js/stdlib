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

import datasets = require( './index' );


// TESTS //

// The function returns a dataset...
{
	datasets( 'emoji' ); // $ExpectType any
}

// The function does not compile if provided a value other than a string...
{
	datasets( true ); // $ExpectError
	datasets( false ); // $ExpectError
	datasets( null ); // $ExpectError
	datasets( undefined ); // $ExpectError
	datasets( 5 ); // $ExpectError
	datasets( [] ); // $ExpectError
	datasets( {} ); // $ExpectError
	datasets( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	datasets(); // $ExpectError
}
