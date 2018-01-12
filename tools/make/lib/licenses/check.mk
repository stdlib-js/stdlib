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

# Define the command for checking licenses:
CHECK_LICENSES ?= \
	$(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
		--depth 0 \
	| $(LICENSES_REPORTER_DEPS) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_EXCLUDED) \
		--exclude $(LICENSES_WHITELIST)

# Define the command for checking licenses for 'production' dependencies:
CHECK_LICENSES_PRODUCTION ?= \
	$(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
		--depth 0 \
		--no-dev \
	| $(LICENSES_REPORTER_DEPS) \
		--no-dev \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_EXCLUDED) \
		--exclude $(LICENSES_WHITELIST)


# RULES #

# Check package licenses.
#
# This target checks the license for each package dependency against a list of permitted licenses.

check-licenses: $(NODE_MODULES)
	$(QUIET) $(CHECK_LICENSES)

.PHONY: check-licenses


# Check production package licenses.
#
# This target checks the license for each package dependency against a list of permitted licenses.

check-licenses-production: $(NODE_MODULES)
	$(QUIET) $(CHECK_LICENSES_PRODUCTION)

.PHONY: check-licenses-production
