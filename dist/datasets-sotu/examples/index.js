/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var sotu = require( './../' ).SOTU;

var speeches;

// Get a range of speeches:
speeches = sotu({
	'range': [ 2009, 2013 ]
});
console.dir( speeches );
// => [...]

// Get speeches by one or more Presidents:
speeches = sotu({
	'name': [
		'Abraham Lincoln',
		'William J Clinton'
	]
});
console.log( 'Number of addresses by Abraham Lincoln and Bill Clinton: %d', speeches.length );

// Get all addresses by Presidents belonging to the Democratic Party:
speeches = sotu({
	'party': 'Democratic'
});
console.log( 'Number of addresses by Democrats: %d', speeches.length );
