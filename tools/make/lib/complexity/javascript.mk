#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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

# VARIABLES #

# Define the output directory:
JAVASCRIPT_COMPLEXITY_OUT ?= $(COMPLEXITY_DIR)/javascript


# DEPENDENCIES #

ifeq ($(JAVASCRIPT_COMPLEXITY_TOOL), plato)
	include $(TOOLS_MAKE_LIB_DIR)/complexity/plato.mk
endif


# RULES #

#/
# Analyzes code complexity for all JavaScript code.
#
# TODO: address bash argument length errors
#
# @param {string} [JAVASCRIPT_COMPLEXITY_OUT] - output directory
#
# @example
# make complexity-javascript
#
# @example
# make complexity-javascript JAVASCRIPT_COMPLEXITY_OUT=/foo/bar/beep/boop
#/
complexity-javascript: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(SOURCES) $(TESTS) $(EXAMPLES) $(BENCHMARKS)

.PHONY: complexity-javascript

#/
# Analyzes code complexity for JavaScript source code.
#
# TODO: address bash argument length errors
#
# @param {string} [JAVASCRIPT_COMPLEXITY_OUT] - output directory
#
# @example
# make complexity-javascript-src
#
# @example
# make complexity-javascript-src JAVASCRIPT_COMPLEXITY_OUT=/foo/bar/beep/boop
#/
complexity-javascript-src: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(SOURCES)

.PHONY: complexity-javascript-src

#/
# Analyzes code complexity for JavaScript test files.
#
# TODO: address bash argument length errors
#
# @param {string} [JAVASCRIPT_COMPLEXITY_OUT] - output directory
#
# @example
# make complexity-javascript-tests
#
# @example
# make complexity-javascript-tests JAVASCRIPT_COMPLEXITY_OUT=/foo/bar/beep/boop
#/
complexity-javascript-tests: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(TESTS)

.PHONY: complexity-javascript-tests

#/
# Analyzes code complexity for JavaScript example files.
#
# TODO: address bash argument length errors
#
# @param {string} [JAVASCRIPT_COMPLEXITY_OUT] - output directory
#
# @example
# make complexity-javascript-examples
#
# @example
# make complexity-javascript-examples JAVASCRIPT_COMPLEXITY_OUT=/foo/bar/beep/boop
#/
complexity-javascript-examples: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(EXAMPLES)

.PHONY: complexity-javascript-examples

#/
# Analyzes code complexity for JavaScript benchmark files.
#
# TODO: address bash argument length errors
#
# @param {string} [JAVASCRIPT_COMPLEXITY_OUT] - output directory
#
# @example
# make complexity-javascript-benchmarks
#
# @example
# make complexity-javascript-benchmarks JAVASCRIPT_COMPLEXITY_OUT=/foo/bar/beep/boop
#/
complexity-javascript-benchmarks: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(BENCHMARKS)

.PHONY: complexity-javascript-benchmarks

#/
# Analyzes code complexity for a list of JavaScript files.
#
# TODO: address bash argument length errors
#
# @param {string} FILES - list of JavaScript file paths
# @param {string} [JAVASCRIPT_COMPLEXITY_OUT] - output directory
#
# @example
# make complexity-javascript-files FILES='/foo/bar.js /beep/boop.js'
#
# @example
# make complexity-javascript-files FILES='/foo/bar.js /beep/boop.js' JAVASCRIPT_COMPLEXITY_OUT=/foo/bar/beep/boop
#/
complexity-javascript-files: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(FILES)

.PHONY: complexity-javascript-files

#/
# Opens an HTML JavaScript complexity report in a local web browser.
#
# @param {string} [JAVASCRIPT_COMPLEXITY_OUT] - output directory containing an HTML JavaScript complexity report
#
# @example
# make view-javascript-complexity
#
# @example
# make view-javascript-complexity JAVASCRIPT_COMPLEXITY_OUT=/foo/bar/beep/boop
#/
view-javascript-complexity:
ifeq ($(JAVASCRIPT_COMPLEXITY_TOOL), plato)
	$(QUIET) $(MAKE) -f $(this_file) view-plato-report
endif

.PHONY: view-javascript-complexity

#/
# Removes an output complexity directory.
#
# @param {string} [JAVASCRIPT_COMPLEXITY_OUT] - output directory to be removed
#
# @example
# make clean-javascript-complexity
#
# @example
# make clean-javascript-complexity JAVASCRIPT_COMPLEXITY_OUT=/foo/bar/beep/boop
#/
clean-javascript-complexity:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(JAVASCRIPT_COMPLEXITY_OUT)

.PHONY: clean-javascript-complexity
