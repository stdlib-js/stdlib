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

# Run JavaScript unit tests.
#
# This target runs JavaScript unit tests using a specified test runner and pipes TAP output to a reporter.

tools-test-javascript:
	$(QUIET) NODE_ENV_TEST="$(NODE_ENV_TEST)" NODE_PATH_TEST="$(NODE_PATH_TEST)" NODE_FLAGS_TEST="$(NODE_FLAGS_TEST)" FILES="$(TOOLS_TESTS)" $(MAKE) -f $(this_file) test-javascript-files

.PHONY: tools-test-javascript


# Generate a JavaScript test summary.
#
# This target runs JavaScript unit tests and aggregates TAP output as a test summary.

tools-test-javascript-summary:
	$(QUIET) NODE_ENV_TEST="$(NODE_ENV_TEST)" NODE_PATH_TEST="$(NODE_PATH_TEST)" NODE_FLAGS_TEST="$(NODE_FLAGS_TEST)" FILES="$(TOOLS_TESTS)" $(MAKE) -f $(this_file) test-javascript-files-summary

.PHONY: tools-test-javascript-summary


# Run unit tests against Node.js versions.
#
# This targets runs JavaScript unit tests against specific Node.js versions.
#
# TODO: update once `test-node-versions` has been updated to accepting a `$FILES` list.

tools-test-node-versions:
	$(QUIET) NODE_ENV_TEST="$(NODE_ENV_TEST)" NODE_PATH_TEST="$(NODE_PATH_TEST)" NODE_FLAGS_TEST="$(NODE_FLAGS_TEST)" TESTS="$(TOOLS_TESTS)" $(MAKE) -f $(this_file) test-node-versions

.PHONY: tools-test-node-versions
