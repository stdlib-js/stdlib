/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable stdlib/require-order */

'use strict';

// MODULES //

var append = require( './../append.js' );


// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'base.rad2deg',
	'path': '@stdlib/math/base/special/rad2deg',
	'value': require( '@stdlib/math/base/special/rad2deg' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/deg2rad'
	]
});

ns.push({
	'alias': 'base.rad2degf',
	'path': '@stdlib/math/base/special/rad2degf',
	'value': require( '@stdlib/math/base/special/rad2degf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/rad2deg'
	]
});

ns.push({
	'alias': 'base.ramp',
	'path': '@stdlib/math/base/special/ramp',
	'value': require( '@stdlib/math/base/special/ramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/heaviside'
	]
});

ns.push({
	'alias': 'base.rampf',
	'path': '@stdlib/math/base/special/rampf',
	'value': require( '@stdlib/math/base/special/rampf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/heavisidef',
		'@stdlib/math/base/special/ramp'
	]
});

append( ns, require( './random' ) );

ns.push({
	'alias': 'base.rcbrt',
	'path': '@stdlib/math/base/special/rcbrt',
	'value': require( '@stdlib/math/base/special/rcbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cbrt'
	]
});

ns.push({
	'alias': 'base.rcbrtf',
	'path': '@stdlib/math/base/special/rcbrtf',
	'value': require( '@stdlib/math/base/special/rcbrtf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/rcbrt',
		'@stdlib/math/base/special/cbrtf'
	]
});

ns.push({
	'alias': 'base.reldiff',
	'path': '@stdlib/math/base/utils/relative-difference',
	'value': require( '@stdlib/math/base/utils/relative-difference' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/utils/absolute-difference',
		'@stdlib/math/base/utils/float64-epsilon-difference'
	]
});

ns.push({
	'alias': 'base.removeFirst',
	'path': '@stdlib/string/base/remove-first',
	'value': require( '@stdlib/string/base/remove-first' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/remove-first-code-point',
		'@stdlib/string/base/remove-first-grapheme-cluster',
		'@stdlib/string/base/remove-last'
	]
});

ns.push({
	'alias': 'base.removeFirstCodePoint',
	'path': '@stdlib/string/base/remove-first-code-point',
	'value': require( '@stdlib/string/base/remove-first-code-point' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/remove-last-code-point',
		'@stdlib/string/base/remove-first-grapheme-cluster',
		'@stdlib/string/base/remove-first'
	]
});

ns.push({
	'alias': 'base.removeFirstGraphemeCluster',
	'path': '@stdlib/string/base/remove-first-grapheme-cluster',
	'value': require( '@stdlib/string/base/remove-first-grapheme-cluster' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/remove-first-code-point',
		'@stdlib/string/base/remove-last-grapheme-cluster',
		'@stdlib/string/base/remove-first'
	]
});

ns.push({
	'alias': 'base.removeLast',
	'path': '@stdlib/string/base/remove-last',
	'value': require( '@stdlib/string/base/remove-last' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/remove-last-code-point',
		'@stdlib/string/base/remove-last-grapheme-cluster',
		'@stdlib/string/base/remove-first'
	]
});

ns.push({
	'alias': 'base.removeLastCodePoint',
	'path': '@stdlib/string/base/remove-last-code-point',
	'value': require( '@stdlib/string/base/remove-last-code-point' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/remove-first-code-point',
		'@stdlib/string/base/remove-last-grapheme-cluster',
		'@stdlib/string/base/remove-last'
	]
});

ns.push({
	'alias': 'base.removeLastGraphemeCluster',
	'path': '@stdlib/string/base/remove-last-grapheme-cluster',
	'value': require( '@stdlib/string/base/remove-last-grapheme-cluster' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/remove-first-code-point',
		'@stdlib/string/base/remove-last-code-point',
		'@stdlib/string/base/remove-last'
	]
});

ns.push({
	'alias': 'base.rempio2',
	'path': '@stdlib/math/base/special/rempio2',
	'value': require( '@stdlib/math/base/special/rempio2' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.repeat',
	'path': '@stdlib/string/base/repeat',
	'value': require( '@stdlib/string/base/repeat' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.replace',
	'path': '@stdlib/string/base/replace',
	'value': require( '@stdlib/string/base/replace' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/replace-after',
		'@stdlib/string/base/replace-before',
		'@stdlib/string/base/replace-after-last',
		'@stdlib/string/base/replace-before-last'
	]
});

ns.push({
	'alias': 'base.replaceAfter',
	'path': '@stdlib/string/base/replace-after',
	'value': require( '@stdlib/string/base/replace-after' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/replace-after-last',
		'@stdlib/string/base/replace-before',
		'@stdlib/string/base/replace-before-last'
	]
});

ns.push({
	'alias': 'base.replaceAfterLast',
	'path': '@stdlib/string/base/replace-after-last',
	'value': require( '@stdlib/string/base/replace-after-last' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/replace-after',
		'@stdlib/string/base/replace-before-last',
		'@stdlib/string/base/replace-before'
	]
});

ns.push({
	'alias': 'base.replaceBefore',
	'path': '@stdlib/string/base/replace-before',
	'value': require( '@stdlib/string/base/replace-before' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/replace-after',
		'@stdlib/string/base/replace-before-last',
		'@stdlib/string/base/replace-after-last'
	]
});

ns.push({
	'alias': 'base.replaceBeforeLast',
	'path': '@stdlib/string/base/replace-before-last',
	'value': require( '@stdlib/string/base/replace-before-last' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/replace-after-last',
		'@stdlib/string/base/replace-after',
		'@stdlib/string/base/replace-before'
	]
});

ns.push({
	'alias': 'base.reverse',
	'path': '@stdlib/string/base/reverse',
	'value': require( '@stdlib/string/base/reverse' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/reverse-code-points',
		'@stdlib/string/base/reverse-grapheme-clusters'
	]
});

ns.push({
	'alias': 'base.reverseCodePoints',
	'path': '@stdlib/string/base/reverse-code-points',
	'value': require( '@stdlib/string/base/reverse-code-points' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/reverse-grapheme-clusters',
		'@stdlib/string/base/reverse'
	]
});

ns.push({
	'alias': 'base.reverseGraphemeClusters',
	'path': '@stdlib/string/base/reverse-grapheme-clusters',
	'value': require( '@stdlib/string/base/reverse-grapheme-clusters' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/reverse-code-points',
		'@stdlib/string/base/reverse'
	]
});

ns.push({
	'alias': 'base.rightPad',
	'path': '@stdlib/string/base/right-pad',
	'value': require( '@stdlib/string/base/right-pad' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/left-pad'
	]
});

ns.push({
	'alias': 'base.rightTrim',
	'path': '@stdlib/string/base/right-trim',
	'value': require( '@stdlib/string/base/right-trim' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/left-trim'
	]
});

ns.push({
	'alias': 'base.risingFactorial',
	'path': '@stdlib/math/base/special/rising-factorial',
	'value': require( '@stdlib/math/base/special/rising-factorial' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/falling-factorial'
	]
});

ns.push({
	'alias': 'base.rotl32',
	'path': '@stdlib/number/uint32/base/rotl',
	'value': require( '@stdlib/number/uint32/base/rotl' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/uint32/base/rotr'
	]
});

ns.push({
	'alias': 'base.rotr32',
	'path': '@stdlib/number/uint32/base/rotr',
	'value': require( '@stdlib/number/uint32/base/rotr' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/uint32/base/rotl'
	]
});

ns.push({
	'alias': 'base.round',
	'path': '@stdlib/math/base/special/round',
	'value': require( '@stdlib/math/base/special/round' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/floor',
		'@stdlib/math/base/special/roundn',
		'@stdlib/math/base/special/trunc'
	]
});

ns.push({
	'alias': 'base.round2',
	'path': '@stdlib/math/base/special/round2',
	'value': require( '@stdlib/math/base/special/round2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil2',
		'@stdlib/math/base/special/floor2',
		'@stdlib/math/base/special/round',
		'@stdlib/math/base/special/round10'
	]
});

ns.push({
	'alias': 'base.round10',
	'path': '@stdlib/math/base/special/round10',
	'value': require( '@stdlib/math/base/special/round10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil10',
		'@stdlib/math/base/special/floor10',
		'@stdlib/math/base/special/round',
		'@stdlib/math/base/special/round2'
	]
});

ns.push({
	'alias': 'base.roundb',
	'path': '@stdlib/math/base/special/roundb',
	'value': require( '@stdlib/math/base/special/roundb' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceilb',
		'@stdlib/math/base/special/floorb',
		'@stdlib/math/base/special/round',
		'@stdlib/math/base/special/roundn'
	]
});

ns.push({
	'alias': 'base.roundn',
	'path': '@stdlib/math/base/special/roundn',
	'value': require( '@stdlib/math/base/special/roundn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceiln',
		'@stdlib/math/base/special/floorn',
		'@stdlib/math/base/special/round',
		'@stdlib/math/base/special/roundb'
	]
});

ns.push({
	'alias': 'base.roundsd',
	'path': '@stdlib/math/base/special/roundsd',
	'value': require( '@stdlib/math/base/special/roundsd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceilsd',
		'@stdlib/math/base/special/floorsd',
		'@stdlib/math/base/special/round',
		'@stdlib/math/base/special/truncsd'
	]
});

ns.push({
	'alias': 'base.rsqrt',
	'path': '@stdlib/math/base/special/rsqrt',
	'value': require( '@stdlib/math/base/special/rsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sqrt'
	]
});

ns.push({
	'alias': 'base.rsqrtf',
	'path': '@stdlib/math/base/special/rsqrtf',
	'value': require( '@stdlib/math/base/special/rsqrtf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/rsqrt',
		'@stdlib/math/base/special/sqrtf'
	]
});


// EXPORTS //

module.exports = ns;
