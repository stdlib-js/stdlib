#/
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#/

# RULES #

#/
# Lints license headers in JavaScript files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each context-specific (`lint-license-header-javascript-<context>`) prerequisite.
# -   This rule is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained JavaScript files.
#
#
# @example
# make lint-license-headers-javascript
#/
lint-license-headers-javascript: lint-license-headers-javascript-src lint-license-headers-javascript-tests lint-license-headers-javascript-examples lint-license-headers-javascript-benchmarks

.PHONY: lint-license-headers-javascript

#/
# Lints license headers in JavaScript source files.
#
# @param {string} [SOURCES_FILTER] - file path pattern (e.g., `.*/utils/group-by/.*`)
#
# @example
# make lint-license-headers-javascript-src
#
# @example
# make lint-license-headers-javascript-src SOURCES_FILTER=".*/utils/group-by/.*"
#/
lint-license-headers-javascript-src: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_SOURCES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-javascript-src

#/
# Lints license headers in JavaScript test files.
#
# @param {string} [TESTS_FILTER] - file path pattern (e.g., `.*/utils/group-by/.*`)
#
# @example
# make lint-license-headers-javascript-tests
#
# @example
# make lint-license-headers-javascript-tests TESTS_FILTER=".*/utils/group-by/.*"
#/
lint-license-headers-javascript-tests: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-javascript-tests

#/
# Lints license headers in JavaScript examples files.
#
# @param {string} [EXAMPLES_FILTER] - file path pattern (e.g., `.*/utils/group-by/.*`)
#
# @example
# make lint-license-headers-javascript-examples
#
# @example
# make lint-license-headers-javascript-examples EXAMPLES_FILTER=".*/utils/group-by/.*"
#/
lint-license-headers-javascript-examples: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-javascript-examples

#/
# Lints license headers in JavaScript benchmark files.
#
# @param {string} [BENCHMARKS_FILTER] - file path pattern (e.g., `.*/utils/group-by/.*`)
#
# @example
# make lint-license-headers-javascript-benchmarks
#
# @example
# make lint-license-headers-javascript-benchmarks BENCHMARKS_FILTER=".*/utils/group-by/.*"
#/
lint-license-headers-javascript-benchmarks: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-javascript-benchmarks
