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

# Define the path of the executable for listing contributors:
LIST_CONTRIBUTORS ?= $(TOOLS_DIR)/git/scripts/list_contributors

# Define the command-line options to be used when invoking the executable:
LIST_CONTRIBUTORS_FLAGS ?=

# Define the path of the executable for updating a CONTRIBUTORS file:
UPDATE_CONTRIBUTORS ?= $(TOOLS_DIR)/scripts/update_contributors

# Define the command-line options to be used when invoking the executable:
UPDATE_CONTRIBUTORS_FLAGS ?=

# Define the output filepath for a CONTRIBUTORS file:
UPDATE_CONTRIBUTORS_OUT ?= $(ROOT_DIR)/CONTRIBUTORS


# RULES #

#/
# Lists contributors to the project repository.
#
# @example
# make list-contributors
#/
list-contributors:
	$(QUIET) $(MAKE_EXECUTABLE) $(LIST_CONTRIBUTORS)
	$(QUIET) $(LIST_CONTRIBUTORS) $(LIST_CONTRIBUTORS_FLAGS)

.PHONY: list-contributors

#/
# Updates the project `CONTRIBUTORS` file.
#
# @example
# make update-contributors
#/
update-contributors:
	$(QUIET) $(MAKE_EXECUTABLE) $(UPDATE_CONTRIBUTORS)
	$(QUIET) $(UPDATE_CONTRIBUTORS) $(UPDATE_CONTRIBUTORS_FLAGS) $(UPDATE_CONTRIBUTORS_OUT)

.PHONY: update-contributors
