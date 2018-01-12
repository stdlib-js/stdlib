#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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
JAVASCRIPT_COMPLEXITY_DIR ?= $(COMPLEXITY_DIR)/javascript


# DEPENDENCIES #

ifeq ($(JAVASCRIPT_COMPLEXITY_TOOL), plato)
	include $(TOOLS_MAKE_LIB_DIR)/complexity/plato.mk
endif


# RULES #

# Analyze code complexity.
#
# This target analyzes all JavaScript source code.
#
# TODO: address bash argument length errors

complexity-javascript: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(SOURCES) $(TESTS) $(EXAMPLES) $(BENCHMARKS)

.PHONY: complexity-javascript


# Analyze source code complexity.
#
# This target analyzes only JavaScript source files.
#
# TODO: address bash argument length errors

complexity-javascript-src: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(SOURCES)

.PHONY: complexity-javascript-src


# Analyze test code complexity.
#
# This target analyzes only JavaScript test files.
#
# TODO: address bash argument length errors

complexity-javascript-tests: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(TESTS)

.PHONY: complexity-javascript-tests


# Analyze example code complexity.
#
# This target analyzes only JavaScript example files.
#
# TODO: address bash argument length errors

complexity-javascript-examples: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(EXAMPLES)

.PHONY: complexity-javascript-examples


# Analyze benchmark code complexity.
#
# This target analyzes only JavaScript benchmark files.
#
# TODO: address bash argument length errors

complexity-javascript-benchmarks: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(BENCHMARKS)

.PHONY: complexity-javascript-benchmarks


# Analyze code complexity.
#
# This target analyzes JavaScript code complexity. Note that we expect `$FILES` to be a JavaScript file list.

complexity-javascript-files: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(FILES)

.PHONY: complexity-javascript-files


# View a complexity report.
#
# This target opens an HTML JavaScript complexity report in a local web browser.

view-javascript-complexity:
ifeq ($(JAVASCRIPT_COMPLEXITY_TOOL), plato)
	$(QUIET) $(MAKE) -f $(this_file) view-plato-report
endif

.PHONY: view-javascript-complexity


# Remove a complexity directory.
#
# This target cleans up a JavaScript complexity directory by removing it entirely.

clean-javascript-complexity:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(JAVASCRIPT_COMPLEXITY_DIR)

.PHONY: clean-javascript-complexity
