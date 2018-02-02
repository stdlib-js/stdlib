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
* Invert an object, such that keys become values and values become keys, according to a transform function.
*
* @module @stdlib/utils/object-inverse-by
*
* @example
* var invertBy = require( '@stdlib/utils/object-inverse-by' );
*
* function transform( key, value ) {
*     return key + value;
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop'
* };
* var out = invertBy( obj, transform );
* // returns { 'abeep': 'a', 'bboop': 'b' }
*
* @example
* var invertBy = require( '@stdlib/utils/object-inverse-by' );
*
* function transform( key, value ) {
*     return value;
* }
* var obj = {
*     'a': 'beep',
*     'b': 'beep'
* };
* var out = invertBy( obj, transform );
* // returns { 'beep': [ 'a', 'b' ] }
*
* @example
* var invertBy = require( '@stdlib/utils/object-inverse-by' );
*
* function transform( key, value ) {
*     return value;
* }
*
* var obj = {};
* obj.a = 'beep';
* obj.b = 'boop';
* obj.c = 'beep'; // inserted after `a`
*
* var opts = {
*     'duplicates': false
* };
* var out = invertBy( obj, opts, transform );
* // returns { 'beep': 'c', 'boop': 'b' }
*/

// MODULES //

var invertBy = require( './object_inverse_by.js' );


// EXPORTS //

module.exports = invertBy;
