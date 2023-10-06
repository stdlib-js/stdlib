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
	'alias': 'MALE_FIRST_NAMES_EN',
	'path': '@stdlib/datasets/male-first-names-en',
	'value': require( '@stdlib/datasets/male-first-names-en' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/female-first-names-en'
	]
});

ns.push({
	'alias': 'map',
	'path': '@stdlib/utils/map',
	'value': require( '@stdlib/utils/map' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map-right',
		'@stdlib/utils/reduce'
	]
});

ns.push({
	'alias': 'map2',
	'path': '@stdlib/utils/map2',
	'value': require( '@stdlib/utils/map2' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map',
		'@stdlib/utils/map3',
		'@stdlib/utils/reduce2'
	]
});

ns.push({
	'alias': 'map2d',
	'path': '@stdlib/utils/map2d',
	'value': require( '@stdlib/utils/map2d' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map',
		'@stdlib/utils/map3d',
		'@stdlib/utils/map4d',
		'@stdlib/utils/map5d',
		'@stdlib/utils/reduce2d'
	]
});

ns.push({
	'alias': 'map2Right',
	'path': '@stdlib/utils/map2-right',
	'value': require( '@stdlib/utils/map2-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map-right',
		'@stdlib/utils/map2',
		'@stdlib/utils/map3-right',
		'@stdlib/utils/reduce2-right'
	]
});

ns.push({
	'alias': 'map3d',
	'path': '@stdlib/utils/map3d',
	'value': require( '@stdlib/utils/map3d' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map',
		'@stdlib/utils/map2d',
		'@stdlib/utils/map4d',
		'@stdlib/utils/map5d',
		'@stdlib/utils/reduce3d'
	]
});

ns.push({
	'alias': 'map4d',
	'path': '@stdlib/utils/map4d',
	'value': require( '@stdlib/utils/map4d' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map',
		'@stdlib/utils/map2d',
		'@stdlib/utils/map3d',
		'@stdlib/utils/map5d',
		'@stdlib/utils/reduce4d'
	]
});

ns.push({
	'alias': 'map5d',
	'path': '@stdlib/utils/map5d',
	'value': require( '@stdlib/utils/map5d' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map',
		'@stdlib/utils/map2d',
		'@stdlib/utils/map3d',
		'@stdlib/utils/map4d',
		'@stdlib/utils/reduce5d'
	]
});

ns.push({
	'alias': 'mapArguments',
	'path': '@stdlib/utils/map-arguments',
	'value': require( '@stdlib/utils/map-arguments' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/filter-arguments',
		'@stdlib/utils/reduce-arguments'
	]
});

ns.push({
	'alias': 'mapFun',
	'path': '@stdlib/utils/map-function',
	'value': require( '@stdlib/utils/map-function' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/map-function'
	]
});

ns.push({
	'alias': 'mapFunAsync',
	'path': '@stdlib/utils/async/map-function',
	'value': require( '@stdlib/utils/async/map-function' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map-function'
	]
});

ns.push({
	'alias': 'mapKeys',
	'path': '@stdlib/utils/map-keys',
	'value': require( '@stdlib/utils/map-keys' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map-values'
	]
});

ns.push({
	'alias': 'mapKeysAsync',
	'path': '@stdlib/utils/async/map-keys',
	'value': require( '@stdlib/utils/async/map-keys' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map-keys',
		'@stdlib/utils/async/map-values'
	]
});

ns.push({
	'alias': 'mapReduce',
	'path': '@stdlib/utils/map-reduce',
	'value': require( '@stdlib/utils/map-reduce' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map',
		'@stdlib/utils/map-reduce-right',
		'@stdlib/utils/reduce'
	]
});

ns.push({
	'alias': 'mapReduceRight',
	'path': '@stdlib/utils/map-reduce-right',
	'value': require( '@stdlib/utils/map-reduce-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map-right',
		'@stdlib/utils/map-reduce',
		'@stdlib/utils/reduce-right'
	]
});

ns.push({
	'alias': 'mapRight',
	'path': '@stdlib/utils/map-right',
	'value': require( '@stdlib/utils/map-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map',
		'@stdlib/utils/reduce'
	]
});

ns.push({
	'alias': 'mapValues',
	'path': '@stdlib/utils/map-values',
	'value': require( '@stdlib/utils/map-values' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map-keys',
		'@stdlib/utils/omit-by',
		'@stdlib/utils/pick-by'
	]
});

ns.push({
	'alias': 'mapValuesAsync',
	'path': '@stdlib/utils/async/map-values',
	'value': require( '@stdlib/utils/async/map-values' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/map-keys',
		'@stdlib/utils/map-values'
	]
});

ns.push({
	'alias': 'maskArguments',
	'path': '@stdlib/utils/mask-arguments',
	'value': require( '@stdlib/utils/mask-arguments' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/filter-arguments',
		'@stdlib/utils/reject-arguments',
		'@stdlib/utils/reorder-arguments',
		'@stdlib/utils/reverse-arguments'
	]
});

ns.push({
	'alias': 'MAX_ARRAY_LENGTH',
	'path': '@stdlib/constants/array/max-array-length',
	'value': require( '@stdlib/constants/array/max-array-length' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/array/max-typed-array-length'
	]
});

ns.push({
	'alias': 'MAX_TYPED_ARRAY_LENGTH',
	'path': '@stdlib/constants/array/max-typed-array-length',
	'value': require( '@stdlib/constants/array/max-typed-array-length' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/array/max-array-length'
	]
});

ns.push({
	'alias': 'maybeBroadcastArray',
	'path': '@stdlib/ndarray/maybe-broadcast-array',
	'value': require( '@stdlib/ndarray/maybe-broadcast-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor',
		'@stdlib/ndarray/broadcast-array'
	]
});

ns.push({
	'alias': 'memoize',
	'path': '@stdlib/utils/memoize',
	'value': require( '@stdlib/utils/memoize' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'merge',
	'path': '@stdlib/utils/merge',
	'value': require( '@stdlib/utils/merge' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/copy'
	]
});

ns.push({
	'alias': 'MILLISECONDS_IN_DAY',
	'path': '@stdlib/constants/time/milliseconds-in-day',
	'value': require( '@stdlib/constants/time/milliseconds-in-day' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'MILLISECONDS_IN_HOUR',
	'path': '@stdlib/constants/time/milliseconds-in-hour',
	'value': require( '@stdlib/constants/time/milliseconds-in-hour' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'MILLISECONDS_IN_MINUTE',
	'path': '@stdlib/constants/time/milliseconds-in-minute',
	'value': require( '@stdlib/constants/time/milliseconds-in-minute' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'MILLISECONDS_IN_SECOND',
	'path': '@stdlib/constants/time/milliseconds-in-second',
	'value': require( '@stdlib/constants/time/milliseconds-in-second' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'MILLISECONDS_IN_WEEK',
	'path': '@stdlib/constants/time/milliseconds-in-week',
	'value': require( '@stdlib/constants/time/milliseconds-in-week' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'MINARD_NAPOLEONS_MARCH',
	'path': '@stdlib/datasets/minard-napoleons-march',
	'value': require( '@stdlib/datasets/minard-napoleons-march' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'MINUTES_IN_DAY',
	'path': '@stdlib/constants/time/minutes-in-day',
	'value': require( '@stdlib/constants/time/minutes-in-day' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'MINUTES_IN_HOUR',
	'path': '@stdlib/constants/time/minutes-in-hour',
	'value': require( '@stdlib/constants/time/minutes-in-hour' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'MINUTES_IN_WEEK',
	'path': '@stdlib/constants/time/minutes-in-week',
	'value': require( '@stdlib/constants/time/minutes-in-week' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'minutesInMonth',
	'path': '@stdlib/time/minutes-in-month',
	'value': require( '@stdlib/time/minutes-in-month' ),
	'type': 'Function',
	'related': [
		'@stdlib/time/minutes-in-year'
	]
});

ns.push({
	'alias': 'minutesInYear',
	'path': '@stdlib/time/minutes-in-year',
	'value': require( '@stdlib/time/minutes-in-year' ),
	'type': 'Function',
	'related': [
		'@stdlib/time/minutes-in-month'
	]
});

ns.push({
	'alias': 'MOBY_DICK',
	'path': '@stdlib/datasets/moby-dick',
	'value': require( '@stdlib/datasets/moby-dick' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'MONTH_NAMES_EN',
	'path': '@stdlib/datasets/month-names-en',
	'value': require( '@stdlib/datasets/month-names-en' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'MONTHS_IN_YEAR',
	'path': '@stdlib/constants/time/months-in-year',
	'value': require( '@stdlib/constants/time/months-in-year' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'moveProperty',
	'path': '@stdlib/utils/move-property',
	'value': require( '@stdlib/utils/move-property' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'MultiSlice',
	'path': '@stdlib/slice/multi',
	'value': require( '@stdlib/slice/multi' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/ctor',
		'@stdlib/slice/ctor'
	]
});


// EXPORTS //

module.exports = ns;
