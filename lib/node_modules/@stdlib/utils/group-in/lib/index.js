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
* Group an object's own and inherited property values according to an indicator function.
*
* @module @stdlib/utils/group-in
*
* @example
* var groupIn = require( '@stdlib/utils/group-in' );
*
* function indicator( v ) {
*     return v[ 0 ];
* }
*
* function Foo() {
*     this.a = 'beep';
*     this.b = 'boop';
*     return this;
* }
*
* Foo.prototype = Object.create( null );
* Foo.prototype.c = 'foo';
* Foo.prototype.d = 'bar';
*
* var obj = new Foo();
*
* var out = groupIn( obj, indicator );
* // e.g., returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
*
* @example
* var groupIn = require( '@stdlib/utils/group-in' );
*
* function indicator( v ) {
*     return v[ 0 ];
* }
*
* function Foo() {
*     this.a = 'beep';
*     this.b = 'boop';
*     return this;
* }
*
* Foo.prototype = Object.create( null );
* Foo.prototype.c = 'foo';
* Foo.prototype.d = 'bar';
*
* var obj = new Foo();
*
* var opts = {
*     'returns': 'keys'
* };
* var out = groupIn( obj, opts, indicator );
* // e.g., returns { 'b': [ 'a', 'b', 'd' ], 'f': [ 'c' ] }
*
* @example
* var groupIn = require( '@stdlib/utils/group-in' );
*
* function indicator( v ) {
*     return v[ 0 ];
* }
*
* function Foo() {
*     this.a = 'beep';
*     this.b = 'boop';
*     return this;
* }
*
* Foo.prototype = Object.create( null );
* Foo.prototype.c = 'foo';
* Foo.prototype.d = 'bar';
*
* var obj = new Foo();
*
* var opts = {
*     'returns': '*'
* };
* var out = groupIn( obj, opts, indicator );
* // e.g., returns { 'b': [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ], 'f': [ [ 'c', 'foo' ] ] }
*/

// MODULES //

var groupIn = require( './main.js' );


// EXPORTS //

module.exports = groupIn;
