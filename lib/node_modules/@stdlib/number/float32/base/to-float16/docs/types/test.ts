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

import float32ToFloat16 = require( './index' );


// TESTS //

// The function returns a number...
{
	float32ToFloat16( 3.14 ); // $ExpectType number
	float32ToFloat16( 0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	float32ToFloat16( true ); // $ExpectError
	float32ToFloat16( false ); // $ExpectError
	float32ToFloat16( '5' ); // $ExpectError
	float32ToFloat16( [] ); // $ExpectError
	float32ToFloat16( {} ); // $ExpectError
	float32ToFloat16( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	float32ToFloat16(); // $ExpectError
}
