#/
# @license Apache-2.0
#
# Copyright (c) 2019 The Stdlib Authors.
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
# Lints license headers in TypeScript files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each context-specific (`lint-license-header-typescript-<context>`) prerequisite.
# -   This rule is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained TypeScript files.
#
#
# @example
# make lint-license-headers-typescript
#/
lint-license-headers-typescript: lint-license-headers-typescript-src lint-license-headers-typescript-tests lint-license-headers-typescript-examples lint-license-headers-typescript-declarations

.PHONY: lint-license-headers-typescript

#/
# Lints license headers in TypeScript source files.
#
# @param {string} [TYPESCRIPT_SOURCES_FILTER] - file path pattern (e.g., `.*/base/erf/.*`)
#
# @example
# make lint-license-headers-typescript-src
#
# @example
# make lint-license-headers-typescript-src TYPESCRIPT_SOURCES_FILTER=".*/base/erf/.*"
#/
lint-license-headers-typescript-src: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_TYPESCRIPT_SOURCES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-typescript-src

#/
# Lints license headers in TypeScript test files.
#
# @param {string} [TYPESCRIPT_TESTS_FILTER] - file path pattern (e.g., `.*/base/erf/.*`)
#
# @example
# make lint-license-headers-typescript-tests
#
# @example
# make lint-license-headers-typescript-tests TYPESCRIPT_TESTS_FILTER=".*/base/erf/.*"
#/
lint-license-headers-typescript-tests: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_TYPESCRIPT_DECLARATIONS_TESTS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-typescript-tests

#/
# Lints license headers in TypeScript examples files.
#
# @param {string} [TYPESCRIPT_EXAMPLES_FILTER] - file path pattern (e.g., `.*/base/erf/.*`)
#
# @example
# make lint-license-headers-typescript-examples
#
# @example
# make lint-license-headers-typescript-examples TYPESCRIPT_EXAMPLES_FILTER=".*/base/erf/.*"
#/
lint-license-headers-typescript-examples: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_TYPESCRIPT_EXAMPLES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-typescript-examples

#/
# Lints license headers in TypeScript declaration files.
#
# @param {string} [TYPESCRIPT_DECLARATIONS_FILTER] - file path pattern (e.g., `.*/base/erf/.*`)
#
# @example
# make lint-license-headers-typescript-declarations
#
# @example
# make lint-license-headers-typescript-declarations TYPESCRIPT_DECLARATIONS_FILTER=".*/base/erf/.*"
#/
lint-license-headers-typescript-declarations: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_TYPESCRIPT_DECLARATIONS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-typescript-declarations
