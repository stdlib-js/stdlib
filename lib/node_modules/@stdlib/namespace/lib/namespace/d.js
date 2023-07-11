/* eslint-disable max-lines */

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

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'DALE_CHALL_NEW',
	'path': '@stdlib/datasets/dale-chall-new',
	'value': require( '@stdlib/datasets/dale-chall-new' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'datasets',
	'path': '@stdlib/datasets',
	'value': require( '@stdlib/datasets' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'DataView',
	'path': '@stdlib/array/dataview',
	'value': require( '@stdlib/array/dataview' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/buffer',
		'@stdlib/array/typed'
	]
});

ns.push({
	'alias': 'datespace',
	'path': '@stdlib/array/datespace',
	'value': require( '@stdlib/array/datespace' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/linspace',
		'@stdlib/array/logspace'
	]
});

ns.push({
	'alias': 'dayOfQuarter',
	'path': '@stdlib/time/day-of-quarter',
	'value': require( '@stdlib/time/day-of-quarter' ),
	'type': 'Function',
	'related': [
		'@stdlib/time/day-of-year'
	]
});

ns.push({
	'alias': 'dayOfYear',
	'path': '@stdlib/time/day-of-year',
	'value': require( '@stdlib/time/day-of-year' ),
	'type': 'Function',
	'related': [
		'@stdlib/time/day-of-quarter'
	]
});

ns.push({
	'alias': 'daysInMonth',
	'path': '@stdlib/time/days-in-month',
	'value': require( '@stdlib/time/days-in-month' ),
	'type': 'Function',
	'related': [
		'@stdlib/time/days-in-year'
	]
});

ns.push({
	'alias': 'daysInYear',
	'path': '@stdlib/time/days-in-year',
	'value': require( '@stdlib/time/days-in-year' ),
	'type': 'Function',
	'related': [
		'@stdlib/time/days-in-month'
	]
});

ns.push({
	'alias': 'ddot',
	'path': '@stdlib/blas/ddot',
	'value': require( '@stdlib/blas/ddot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ddot',
		'@stdlib/blas/dsdot',
		'@stdlib/blas/gdot',
		'@stdlib/blas/sdot',
		'@stdlib/blas/sdsdot'
	]
});

ns.push({
	'alias': 'debugSinkStream',
	'path': '@stdlib/streams/node/debug-sink',
	'value': require( '@stdlib/streams/node/debug-sink' ),
	'type': 'Function',
	'related': [
		'@stdlib/streams/node/debug',
		'@stdlib/streams/node/inspect-sink'
	]
});

ns.push({
	'alias': 'debugStream',
	'path': '@stdlib/streams/node/debug',
	'value': require( '@stdlib/streams/node/debug' ),
	'type': 'Function',
	'related': [
		'@stdlib/streams/node/debug-sink',
		'@stdlib/streams/node/inspect'
	]
});

ns.push({
	'alias': 'decorateAfter',
	'path': '@stdlib/utils/decorate-after',
	'value': require( '@stdlib/utils/decorate-after' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/decorate-before'
	]
});

ns.push({
	'alias': 'deepEqual',
	'path': '@stdlib/assert/deep-equal',
	'value': require( '@stdlib/assert/deep-equal' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-strict-equal',
		'@stdlib/assert/is-same-value'
	]
});

ns.push({
	'alias': 'deepGet',
	'path': '@stdlib/utils/deep-get',
	'value': require( '@stdlib/utils/deep-get' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/deep-pluck',
		'@stdlib/utils/deep-set'
	]
});

ns.push({
	'alias': 'deepHasOwnProp',
	'path': '@stdlib/assert/deep-has-own-property',
	'value': require( '@stdlib/assert/deep-has-own-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/deep-has-property',
		'@stdlib/assert/has-own-property',
		'@stdlib/utils/deep-get',
		'@stdlib/utils/deep-pluck',
		'@stdlib/utils/deep-set'
	]
});

ns.push({
	'alias': 'deepHasProp',
	'path': '@stdlib/assert/deep-has-property',
	'value': require( '@stdlib/assert/deep-has-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/deep-has-own-property',
		'@stdlib/assert/has-own-property',
		'@stdlib/utils/deep-get',
		'@stdlib/utils/deep-pluck',
		'@stdlib/utils/deep-set'
	]
});

ns.push({
	'alias': 'deepPluck',
	'path': '@stdlib/utils/deep-pluck',
	'value': require( '@stdlib/utils/deep-pluck' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/deep-get',
		'@stdlib/utils/deep-set'
	]
});

ns.push({
	'alias': 'deepSet',
	'path': '@stdlib/utils/deep-set',
	'value': require( '@stdlib/utils/deep-set' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/deep-get',
		'@stdlib/utils/deep-pluck'
	]
});

ns.push({
	'alias': 'defineMemoizedProperty',
	'path': '@stdlib/utils/define-memoized-property',
	'value': require( '@stdlib/utils/define-memoized-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-memoized-read-only-property',
		'@stdlib/utils/define-property'
	]
});

ns.push({
	'alias': 'defineProperties',
	'path': '@stdlib/utils/define-properties',
	'value': require( '@stdlib/utils/define-properties' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-property',
		'@stdlib/utils/define-read-only-property'
	]
});

ns.push({
	'alias': 'defineProperty',
	'path': '@stdlib/utils/define-property',
	'value': require( '@stdlib/utils/define-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-properties',
		'@stdlib/utils/define-read-only-property'
	]
});

ns.push({
	'alias': 'dirname',
	'path': '@stdlib/utils/dirname',
	'value': require( '@stdlib/utils/dirname' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/extname'
	]
});

ns.push({
	'alias': 'dotcase',
	'path': '@stdlib/string/dotcase',
	'value': require( '@stdlib/string/dotcase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/camelcase',
		'@stdlib/string/kebabcase',
		'@stdlib/string/pascalcase',
		'@stdlib/string/snakecase'
	]
});

ns.push({
	'alias': 'DoublyLinkedList',
	'path': '@stdlib/utils/doubly-linked-list',
	'value': require( '@stdlib/utils/doubly-linked-list' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/linked-list',
		'@stdlib/utils/stack'
	]
});

ns.push({
	'alias': 'doUntil',
	'path': '@stdlib/utils/do-until',
	'value': require( '@stdlib/utils/do-until' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/do-until',
		'@stdlib/utils/do-until-each',
		'@stdlib/utils/do-while',
		'@stdlib/utils/until',
		'@stdlib/utils/while'
	]
});

ns.push({
	'alias': 'doUntilAsync',
	'path': '@stdlib/utils/async/do-until',
	'value': require( '@stdlib/utils/async/do-until' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/do-until',
		'@stdlib/utils/async/do-until-each',
		'@stdlib/utils/async/do-while',
		'@stdlib/utils/async/until',
		'@stdlib/utils/async/while'
	]
});

ns.push({
	'alias': 'doUntilEach',
	'path': '@stdlib/utils/do-until-each',
	'value': require( '@stdlib/utils/do-until-each' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/do-until-each',
		'@stdlib/utils/do-until-each-right',
		'@stdlib/utils/do-while-each',
		'@stdlib/utils/until-each'
	]
});

ns.push({
	'alias': 'doUntilEachRight',
	'path': '@stdlib/utils/do-until-each-right',
	'value': require( '@stdlib/utils/do-until-each-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/do-until-each',
		'@stdlib/utils/async/do-until-each-right',
		'@stdlib/utils/do-while-each-right',
		'@stdlib/utils/until-each-right'
	]
});

ns.push({
	'alias': 'doWhile',
	'path': '@stdlib/utils/do-while',
	'value': require( '@stdlib/utils/do-while' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/do-until',
		'@stdlib/utils/async/do-while',
		'@stdlib/utils/do-while-each',
		'@stdlib/utils/until',
		'@stdlib/utils/while'
	]
});

ns.push({
	'alias': 'doWhileAsync',
	'path': '@stdlib/utils/async/do-while',
	'value': require( '@stdlib/utils/async/do-while' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/do-until',
		'@stdlib/utils/do-while',
		'@stdlib/utils/async/do-while-each',
		'@stdlib/utils/async/until',
		'@stdlib/utils/async/while'
	]
});

ns.push({
	'alias': 'doWhileEach',
	'path': '@stdlib/utils/do-while-each',
	'value': require( '@stdlib/utils/do-while-each' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/do-until-each',
		'@stdlib/utils/async/do-while-each',
		'@stdlib/utils/do-while-each-right',
		'@stdlib/utils/while-each'
	]
});

ns.push({
	'alias': 'doWhileEachRight',
	'path': '@stdlib/utils/do-while-each-right',
	'value': require( '@stdlib/utils/do-while-each-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/do-until-each-right',
		'@stdlib/utils/do-while-each',
		'@stdlib/utils/async/do-while-each-right',
		'@stdlib/utils/while-each-right'
	]
});

ns.push({
	'alias': 'dswap',
	'path': '@stdlib/blas/dswap',
	'value': require( '@stdlib/blas/dswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dswap',
		'@stdlib/blas/dcopy',
		'@stdlib/blas/gswap',
		'@stdlib/blas/sswap'
	]
});


// EXPORTS //

module.exports = ns;
