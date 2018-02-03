/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/* eslint-disable object-curly-newline, object-curly-spacing */

'use strict';

var deepHasProp = require( './../lib' );

var bool;
var has;
var obj;

obj = { 'a': { 'b': { 'c': 'd' } } };
bool = deepHasProp( obj, 'a.b.c' );
console.log( bool );
// => true

obj = { 'a': { 'b': { 'c': 'd' } } };
bool = deepHasProp( obj, [ 'a', 'b', 'hasOwnProperty' ] );
console.log( bool );
// => true

obj = { 'a': { 'b': { 'c': 'd' } } };
bool = deepHasProp( obj, 'a/b/c', {
	'sep': '/'
});
console.log( bool );
// => true

obj = { 'a': { 'b': { 'c': 'd' } } };
bool = deepHasProp( obj, 'a.b.c.d' );
console.log( bool );
// => false

obj = { 'a': [ { 'b': { 'c': 'd' } } ] };
bool = deepHasProp( obj, [ 'a', '0', 'b', 'c', 'd' ] );
console.log( bool );
// => false

obj = { 'a': { 'b': { 'c': 'd' } } };
bool = deepHasProp( obj, 'a/b/c/d/e', {
	'sep': '/'
});
console.log( bool );
// => false

// Create a customized function:
has = deepHasProp.factory( 'a_b_c', {
	'sep': '_'
});

obj = { 'a': { 'b': { 'c': 'd' } } };
bool = has( obj );
console.log( bool );
// => true

obj = { 'a': [ { 'b': { 'c': 'd' } } ] };
bool = has( obj );
console.log( bool );
// => false
