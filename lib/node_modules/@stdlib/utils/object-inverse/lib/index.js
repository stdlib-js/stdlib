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

'use strict';

/**
* Invert an object, such that keys become values and values become keys.
*
* @module @stdlib/utils/object-inverse
*
* @example
* var invert = require( '@stdlib/utils/object-inverse' );
*
* var out = invert({
*     'a': 'beep',
*     'b': 'boop'
* });
* // returns { 'beep': 'a', 'boop': 'b' }
*
* out = invert({
*     'a': 'beep',
*     'b': 'beep'
* });
* // returns { 'beep': [ 'a', 'b' ] }
*
* var obj = {};
* obj.a = 'beep';
* obj.b = 'boop';
* obj.c = 'beep'; // inserted after `a`
*
* out = invert( obj, {
*     'duplicates': false
* });
* // returns { 'beep': 'c', 'boop': 'b' }
*/

// MODULES //

var invert = require( './object_inverse.js' );


// EXPORTS //

module.exports = invert;
