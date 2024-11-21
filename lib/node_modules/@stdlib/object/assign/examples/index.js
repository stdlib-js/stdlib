/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

'use strict';

var assign = require( './../lib' );

var obj1 = {
	'name': 'Jane',
	'age': 29
};
var obj2 = {
	'country': 'US',
	'city': 'San Francisco'
};
var obj3 = {
	'hobby': 'Reading'
};

var result = assign( obj1, obj2, obj3 );
console.log( result );
// => { 'name': 'Jane', 'age': 29, 'country': 'US', 'city': 'San Francisco', 'hobby': 'Reading' }
