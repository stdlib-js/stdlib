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

# DEPENDENCIES #

ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	include $(TOOLS_MAKE_LIB_DIR)/test-cov/istanbul.mk
endif


# TARGETS #

# Run unit tests and generate a test coverage report.
#
# This target instruments JavaScript source code, runs unit tests, and outputs a test coverage report.

test-javascript-cov: clean-javascript-cov
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	$(QUIET) $(MAKE) -f $(this_file) test-istanbul
endif

.PHONY: test-javascript-cov


# View a test coverage report.
#
# This target opens an HTML JavaScript coverage report in a local web browser.

view-javascript-cov:
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	$(QUIET) $(MAKE) -f $(this_file) view-istanbul-report
endif

.PHONY: view-javascript-cov


# Remove a coverage directory.
#
# This target cleans up a JavaScript coverage directory by removing it entirely.

clean-javascript-cov:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(COVERAGE_DIR)

.PHONY: clean-javascript-cov
