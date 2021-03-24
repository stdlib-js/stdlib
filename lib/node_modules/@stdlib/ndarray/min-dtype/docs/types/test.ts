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

import minDataType = require( './index' );


// TESTS //

// The function returns a string...
{
	minDataType( 3.141592653589793 ); // $ExpectType string
	minDataType( 1 ); // $ExpectType string
}

// The function does not compile if not provided exactly one argument...
{
	minDataType(); // $ExpectError
	minDataType( 1, true ); // $ExpectError
}
