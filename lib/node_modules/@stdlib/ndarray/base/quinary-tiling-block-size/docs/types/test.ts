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

import quinaryBlockSize = require( './index' );


// TESTS //

// The function returns a number...
{
	quinaryBlockSize( 'float64', 'float64', 'float64', 'float64', 'float64', 'float64' ); // $ExpectType number
	quinaryBlockSize( 'float32', 'int8', 'uint16', 'int32', 'uint8', 'complex128' ); // $ExpectType number
	quinaryBlockSize( 'generic', 'generic', 'generic', 'generic', 'generic', 'generic' ); // $ExpectType number
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	quinaryBlockSize(); // $ExpectError
	quinaryBlockSize( 'float64' ); // $ExpectError
	quinaryBlockSize( 'float64', 'float64' ); // $ExpectError
	quinaryBlockSize( 'float64', 'float64', 'float64' ); // $ExpectError
	quinaryBlockSize( 'float64', 'float64', 'float64', 'float64' ); // $ExpectError
	quinaryBlockSize( 'float64', 'float64', 'float64', 'float64', 'float64' ); // $ExpectError
}

// The compiler throws an error if the function is provided too many arguments...
{
	quinaryBlockSize( 'float64', 'float64', 'float64', 'float64', 'float64', 'float64', {} ); // $ExpectError
}
