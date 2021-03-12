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

import safeCasts = require( './index' );


// TESTS //

// The function returns an object, array of strings, or null...
{
	safeCasts(); // $ExpectType any
	safeCasts( 'float32' ); // $ExpectType any
	safeCasts( 'float' ); // $ExpectType any
}

// The function does not compile if provided a value other than a string...
{
	safeCasts( 123 ); // $ExpectError
	safeCasts( true ); // $ExpectError
	safeCasts( false ); // $ExpectError
	safeCasts( null ); // $ExpectError
	safeCasts( {} ); // $ExpectError
	safeCasts( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided more than one argument...
{
	safeCasts( 'float32', 123 ); // $ExpectError
}
