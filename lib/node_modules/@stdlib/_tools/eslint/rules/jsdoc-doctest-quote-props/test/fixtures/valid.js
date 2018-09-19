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

var valid = [];
var test;

test = {
	'code': [
		'/**',
		'* Merges objects into a target object. Note that the target object is mutated.',
		'*',
		'* @name merge',
		'* @type {Function}',
		'* @param {Object} target - target object',
		'* @param {...Object} source - source objects (i.e., objects to be merged into the target object)',
		'* @throws {Error} must provide a target object and one or more source objects',
		'* @throws {TypeError} first argument must be an object',
		'* @throws {TypeError} source arguments must be objects',
		'* @returns {Object} merged (target) object',
		'*',
		'* @example',
		'* var target = {',
		'*     \'a\': \'beep\'',
		'* };',
		'* var source = {',
		'*     \'a\': \'boop\',',
		'*     \'b\': \'bap\'',
		'* };',
		'*',
		'* var out = merge( target, source );',
		'* // returns {\'a\':\'boop\', \'b\':\'bap\'}',
		'*/',
		'var merge = mergefcn( defaults );'
	].join( '\n' )
};
valid.push( test );

test = {
	'code': [
		'/**',
		'* Merges objects into a target object. Note that the target object is mutated.',
		'*',
		'* @name merge',
		'* @type {Function}',
		'* @param {Object} target - target object',
		'* @param {...Object} source - source objects (i.e., objects to be merged into the target object)',
		'* @throws {Error} must provide a target object and one or more source objects',
		'* @throws {TypeError} first argument must be an object',
		'* @throws {TypeError} source arguments must be objects',
		'* @returns {Object} merged (target) object',
		'*',
		'* @example',
		'* var target = {',
		'*     \'a\': \'beep\'',
		'* };',
		'* var source = {',
		'*     \'a\': \'boop\',',
		'*     \'b\': \'bap\'',
		'* };',
		'*',
		'* var out = merge( target, source );',
		'* // returns {...}',
		'*/',
		'var merge = mergefcn( defaults );'
	].join( '\n' )
};
valid.push( test );

test = {
	'code': [
		'/**',
		'* Merges objects into a target object. Note that the target object is mutated.',
		'*',
		'* @name merge',
		'* @type {Function}',
		'* @param {Object} target - target object',
		'* @param {...Object} source - source objects (i.e., objects to be merged into the target object)',
		'* @throws {Error} must provide a target object and one or more source objects',
		'* @throws {TypeError} first argument must be an object',
		'* @throws {TypeError} source arguments must be objects',
		'* @returns {Object} merged (target) object',
		'*',
		'* @example',
		'* var target = {',
		'*     \'a\': \'beep\'',
		'* };',
		'* var source = {',
		'*     \'a\': \'boop\',',
		'*     \'b\': \'bap\'',
		'* };',
		'*',
		'* var out = merge( target, source );',
		'* /* returns {',
		'*     \'a\':\'boop\',',
		'*     \'b\':\'bap\'}',
		'* *\\/',
		'*/',
		'var merge = mergefcn( defaults );'
	].join( '\n' )
};
valid.push( test );

test = {
	'code': [
		'/**',
		'* Returns a high-resolution time difference.',
		'*',
		'* ## Notes',
		'*',
		'* -   Output format: `[seconds, nanoseconds]`.',
		'*',
		'*',
		'* @param {NonNegativeIntegerArray} time - high-resolution time',
		'* @throws {TypeError} must provide a nonnegative integer array',
		'* @throws {RangeError} input array must have length `2`',
		'* @returns {NumberArray} high resolution time difference',
		'*',
		'* @example',
		'* var tic = require( \'@stdlib/time/tic\' );',
		'*',
		'* var start = tic();',
		'* var delta = toc( start );',
		'* // returns [<number>,<number>]',
		'*/',
		'function toc( time ) {',
		'	var now = tic();',
		'	var sec;',
		'	var ns;',
		'	if ( !isNonNegativeIntegerArray( time ) ) {',
		'		throw new TypeError( \'invalid argument. Must provide an array of nonnegative integers. Value: `\' + time + \'`.\' );',
		'	}',
		'	if ( time.length !== 2 ) {',
		'		throw new RangeError( \'invalid argument. Input array must have length `2`.\' );',
		'	}',
		'	sec = now[ 0 ] - time[ 0 ];',
		'	ns = now[ 1 ] - time[ 1 ];',
		'	if ( sec > 0 && ns < 0 ) {',
		'		sec -= 1;',
		'		ns += 1e9;',
		'	}',
		'	else if ( sec < 0 && ns > 0 ) {',
		'		sec += 1;',
		'		ns -= 1e9;',
		'	}',
		'	return [ sec, ns ];',
		'}'
	].join( '\n' )
};
valid.push( test );

test = {
	'code': [
		'/**',
		'* Returns Anscombe\'s quartet.',
		'*',
		'* ## Notes',
		'*',
		'* -   This function synchronously reads data from disk for each invocation. Such behavior is intentional and so is the avoidance of `require`. We assume that invocations are infrequent, and we want to avoid the `require` cache. This means that we allow data to be garbage collected and a user is responsible for explicitly caching data.',
		'*',
		'*',
		'* @throws {Error} unable to read data',
		'* @returns {ArrayArray} Anscombe\'s quartet',
		'*',
		'* @example',
		'* var d = data();',
		'* // returns [[[10,8.04],...],[[10,9.14],...],[[10,7.46],...],[[8,6.58],...]]',
		'*/',
		'function data() {',
		'	var d = readJSON( fpath, opts );',
		'	if ( d instanceof Error ) {',
		'		throw d;',
		'	}',
		'	return d;',
		'}'
	].join( '\n' )
};
valid.push( test );


// EXPORTS //

module.exports = valid;
