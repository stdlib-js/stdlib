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

import kebabcase = require( './index' );


// TESTS //

// The function returns a string...
{
	kebabcase( 'Hello World!' ); // $ExpectType string
}

// The function does not compile if provided a value other than a string...
{
	kebabcase( true ); // $ExpectError
	kebabcase( false ); // $ExpectError
	kebabcase( null ); // $ExpectError
	kebabcase( undefined ); // $ExpectError
	kebabcase( 5 ); // $ExpectError
	kebabcase( [] ); // $ExpectError
	kebabcase( {} ); // $ExpectError
	kebabcase( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	kebabcase(); // $ExpectError
}
