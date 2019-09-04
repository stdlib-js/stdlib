/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import getOwnPropertyDescriptors = require( './index' );


// TESTS //

// The function returns an object of property descriptors...
{
	getOwnPropertyDescriptors( { 'beep': 'boop', 'foo': 3.14 } ); // $ExpectType PropertyDescriptorMap
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	getOwnPropertyDescriptors(); // $ExpectError
	getOwnPropertyDescriptors( [], 2 ); // $ExpectError
}
