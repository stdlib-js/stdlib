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
* Split an object's own property values into two groups according to a predicate function.
*
* @module @stdlib/utils/bifurcate-own
*
* @example
* var bifurcateOwn = require( '@stdlib/utils/bifurcate-own' );
*
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop',
*     'c': 'foo',
*     'd': 'bar'
* };
*
* var out = bifurcateOwn( obj, predicate );
* // e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
*
* @example
* var bifurcateOwn = require( '@stdlib/utils/bifurcate-own' );
*
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop',
*     'c': 'foo',
*     'd': 'bar'
* };
*
* var opts = {
*     'returns': 'keys'
* };
* var out = bifurcateOwn( obj, opts, predicate );
* // e.g., returns [ [ 'a', 'b', 'd' ], [ 'c' ] ]
*
* @example
* var bifurcateOwn = require( '@stdlib/utils/bifurcate-own' );
*
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop',
*     'c': 'foo',
*     'd': 'bar'
* };
* var opts = {
*     'returns': '*'
* };
* var out = bifurcateOwn( obj, opts, predicate );
* // e.g., returns [ [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ], [ [ 'c', 'foo' ] ] ]
*/

// MODULES //

var bifurcateOwn = require( './main.js' );


// EXPORTS //

module.exports = bifurcateOwn;
