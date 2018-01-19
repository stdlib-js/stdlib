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

# TARGETS #

# Run unit tests and generate a test coverage report.
#
# This target instruments source code, runs unit tests, and outputs a test coverage report.

tools-test-istanbul:
	$(QUIET) NODE_ENV="$(NODE_ENV_TEST)" \
	NODE_PATH="$(NODE_PATH_TEST)" \
	$(ISTANBUL_COVER) \
		--dir $(COVERAGE_DIR) \
		--report $(ISTANBUL_COVER_REPORT_FORMAT) \
	$(JAVASCRIPT_TEST) -- \
		$(JAVASCRIPT_TEST_FLAGS) \
		$(TOOLS_TESTS)

.PHONY: tools-test-istanbul
