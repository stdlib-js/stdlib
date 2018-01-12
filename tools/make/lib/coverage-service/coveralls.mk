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

# Define the [Coveralls][1] command (see also [2][2]).
#
# [1]: https://coveralls.io/
# [2]: https://github.com/nickmerwin/node-coveralls
COVERALLS ?= npm install coveralls && $(CAT) $(LCOV_INFO) | $(NODE_MODULES)/coveralls/bin/coveralls.js

ifndef COVERALLS_SERVICE_NAME
	COVERALLS_SERVICE_NAME := $(CI_SERVICE)
endif

ifeq ($(CI_SERVICE), travis)
	COVERALLS_SERVICE_JOB_ID := $(TRAVIS_JOB_ID)
else
ifeq ($(CI_SERVICE), appveyor)
	COVERALLS_SERVICE_JOB_ID := $(APPVEYOR_JOB_ID)
else
ifeq ($(CI_SERVICE), circle)
	COVERALLS_SERVICE_JOB_ID := $(CIRCLE_BUILD_NUM)
else
	COVERALLS_SERVICE_JOB_ID ?=
endif
endif
endif

# Define a list of environment variables when invoking the Coveralls command:
COVERALLS_ENV_VARS ?= COVERALLS_SERVICE_NAME=$(COVERALLS_SERVICE_NAME) COVERALLS_SERVICE_JOB_ID=$(COVERALLS_SERVICE_JOB_ID)

ifdef COVERALLS_REPO_TOKEN
	COVERALLS_ENV_VARS := COVERALLS_REPO_TOKEN=$(COVERALLS_REPO_TOKEN) $(COVERALLS_ENV_VARS)
endif


# RULES #

#/
# Sends coverage statistics to [Coveralls][1].
#
# [1]: https://coveralls.io/
#
# @param {string} LCOV_INFO - path of the `lcov.info` file which will be sent to the coverage service
# @param {string} [CI_SERVICE] - continuous integration (CI) service from which the coverage report originates
# @param {string} [COVERALLS_REPO_TOKEN] - the secret repository token from Coveralls
#
# @example
# make coverage-coveralls
#/
coverage-coveralls:
	$(QUIET) $(COVERALLS_ENV_VARS) $(COVERALLS) || echo 'Failed to upload coverage reports to Coveralls.'

.PHONY: coverage-coveralls
