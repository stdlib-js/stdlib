/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import quaternaryBlockSize = require( './index' );


// TESTS //

// The function returns a number...
{
	quaternaryBlockSize( 'float64', 'float64', 'float64', 'float64', 'float64' ); // $ExpectType number
	quaternaryBlockSize( 'float32', 'int8', 'uint16', 'complex128', 'complex128' ); // $ExpectType number
	quaternaryBlockSize( 'generic', 'generic', 'generic', 'generic', 'generic' ); // $ExpectType number
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	quaternaryBlockSize(); // $ExpectError
	quaternaryBlockSize( 'float64' ); // $ExpectError
	quaternaryBlockSize( 'float64', 'float64' ); // $ExpectError
	quaternaryBlockSize( 'float64', 'float64', 'float64' ); // $ExpectError
	quaternaryBlockSize( 'float64', 'float64', 'float64', 'float64' ); // $ExpectError
}

// The compiler throws an error if the function is provided too many arguments...
{
	quaternaryBlockSize( 'float64', 'float64', 'float64', 'float64', 'float64', {} ); // $ExpectError
}
