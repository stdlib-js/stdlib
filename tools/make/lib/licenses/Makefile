
# VARIABLES #

# Define the command for `node`:
NODE ?= node

# Define a license SPDX identifier whitelist:
LICENSES_WHITELIST ?= 'Apache-2.0,Artistic-2.0,BSD-2-Clause,BSD-3-Clause,BSL-1.0,CC0-1.0,ISC,MIT,MPL-2.0,Unlicense,WTFPL'

# Define the command for listing licenses:
LIST_LICENSES ?= $(NODE) $(TOOLS_DIR)/licenses/licenses/bin/cli

# Define the command for inferring licenses:
INFER_LICENSES ?= $(NODE) $(TOOLS_DIR)/licenses/infer/bin/cli

# Define the command-line options to be used when inferring licenses:
INFER_LICENSES_FLAGS ?= --pattern '{readme*,licen[cs]e*,copying*}'

# Define the command for reporting license information:
LICENSES_REPORTER ?= $(NODE) $(TOOLS_DIR)/licenses/reporters/basic/bin/cli

# Define the command for reporting licenses by license type:
LICENSES_REPORTER_GROUP ?= $(NODE) $(TOOLS_DIR)/licenses/reporters/group/bin/cli

# Define the command for reporting root package dependencies:
LICENSES_REPORTER_DEPS ?= $(NODE) $(TOOLS_DIR)/licenses/reporters/root-deps/bin/cli

# Define the command for reporting missing licenses:
LICENSES_REPORTER_NO_LICENSE ?= $(NODE) $(TOOLS_DIR)/licenses/reporters/no-license/bin/cli

# Define the command for reporting ambiguous licenses:
LICENSES_REPORTER_AMBIGUOUS ?= $(NODE) $(TOOLS_DIR)/licenses/reporters/ambiguous/bin/cli

# Define the command for reporting excluded licenses:
LICENSES_REPORTER_EXCLUDED ?= $(NODE) $(TOOLS_DIR)/licenses/reporters/whitelist/bin/cli

# Define the command for generating a license summary:
LICENSES_REPORTER_SUMMARY ?= $(NODE) $(TOOLS_DIR)/licenses/reporters/summary/bin/cli


# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/licenses/ls.mk
include $(TOOLS_MAKE_LIB_DIR)/licenses/check.mk
