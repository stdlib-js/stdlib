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

# Define the name of the coverage report:
COVERAGE_NAME ?= $(NODE_ENV_TEST)

# Define the path of the `lcov.info` file which will be sent to the coverage service:
LCOV_INFO ?= $(COVERAGE_DIR)/lcov.info


# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/coverage-service/codecov.mk
include $(TOOLS_MAKE_LIB_DIR)/coverage-service/coveralls.mk


# RULES #

#/
# Sends coverage statistics to a hosted code coverage service.
#
# @param {string} COVERAGE_SERVICE - code coverage service name
# @param {string} LCOV_INFO - path of the `lcov.info` file which will be sent to the coverage service
# @param {string} [COVERAGE_NAME] - coverage report name
# @param {string} [CI_SERVICE] - continuous integration (CI) service from which the coverage report originates
#
# @example
# make coverage
#/
coverage:
ifeq ($(COVERAGE_SERVICE), codecov)
	$(QUIET) LCOV_INFO=$(LCOV_INFO) CI_SERVICE=$(CI_SERVICE) COVERAGE_NAME=$(COVERAGE_NAME) $(MAKE) -f $(this_file) coverage-codecov
else
ifeq ($(COVERAGE_SERVICE), coveralls)
	$(QUIET) LCOV_INFO=$(LCOV_INFO) CI_SERVICE=$(CI_SERVICE) COVERALLS_REPO_TOKEN=$(COVERALLS_REPO_TOKEN) $(MAKE) -f $(this_file) coverage-coveralls
endif
endif

.PHONY: coverage
