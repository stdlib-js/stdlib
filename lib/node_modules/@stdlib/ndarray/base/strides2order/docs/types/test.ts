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

import strides2order = require( './index' );


// TESTS //

// The function returns a number...
{
	strides2order( [ 2, 1 ] ); // $ExpectType number
}

// The function does not compile if provided a value other than an array-like object of numbers...
{
	strides2order( true ); // $ExpectError
	strides2order( false ); // $ExpectError
	strides2order( '5' ); // $ExpectError
	strides2order( 123 ); // $ExpectError
	strides2order( {} ); // $ExpectError
	strides2order( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	strides2order(); // $ExpectError
}
