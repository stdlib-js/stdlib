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
	include $(TOOLS_MAKE_LIB_DIR)/tools-test-cov/istanbul.mk
endif


# TARGETS #

# Run unit tests and generate a test coverage report.
#
# This target instruments JavaScript source code, runs unit tests, and outputs a test coverage report.

tools-test-javascript-cov:
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	$(QUIET) NODE_ENV_TEST="$(NODE_ENV_TEST)" NODE_PATH_TEST="$(NODE_PATH_TEST)" NODE_FLAGS_TEST="$(NODE_FLAGS_TEST)" $(MAKE) -f $(this_file) tools-test-istanbul
endif

.PHONY: tools-test-javascript-cov
