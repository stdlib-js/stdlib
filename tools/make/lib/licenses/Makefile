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

# Define the command for listing licenses:
LIST_LICENSES ?= NODE_PATH="$(NODE_PATH)" $(NODE) $(TOOLS_DIR)/licenses/licenses/bin/cli

# Define the command for inferring licenses:
INFER_LICENSES ?= NODE_PATH="$(NODE_PATH)" $(NODE) $(TOOLS_DIR)/licenses/infer/bin/cli

# Define the command-line options to be used when inferring licenses:
INFER_LICENSES_FLAGS ?= --pattern '{readme*,licen[cs]e*,copying*}'

# Define the command for reporting license information:
LICENSES_REPORTER ?= NODE_PATH="$(NODE_PATH)" $(NODE) $(TOOLS_DIR)/licenses/reporters/basic/bin/cli

# Define the command for reporting licenses by license type:
LICENSES_REPORTER_GROUP ?= NODE_PATH="$(NODE_PATH)" $(NODE) $(TOOLS_DIR)/licenses/reporters/group/bin/cli

# Define the command for reporting root package dependencies:
LICENSES_REPORTER_DEPS ?= NODE_PATH="$(NODE_PATH)" $(NODE) $(TOOLS_DIR)/licenses/reporters/root-deps/bin/cli

# Define the command for reporting missing licenses:
LICENSES_REPORTER_NO_LICENSE ?= NODE_PATH="$(NODE_PATH)" $(NODE) $(TOOLS_DIR)/licenses/reporters/no-license/bin/cli

# Define the command for reporting ambiguous licenses:
LICENSES_REPORTER_AMBIGUOUS ?= NODE_PATH="$(NODE_PATH)" $(NODE) $(TOOLS_DIR)/licenses/reporters/ambiguous/bin/cli

# Define the command for reporting excluded licenses:
LICENSES_REPORTER_EXCLUDED ?= NODE_PATH="$(NODE_PATH)" $(NODE) $(TOOLS_DIR)/licenses/reporters/whitelist/bin/cli

# Define the command for generating a license summary:
LICENSES_REPORTER_SUMMARY ?= NODE_PATH="$(NODE_PATH)" $(NODE) $(TOOLS_DIR)/licenses/reporters/summary/bin/cli


# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/licenses/ls.mk
include $(TOOLS_MAKE_LIB_DIR)/licenses/check.mk
