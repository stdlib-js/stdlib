
# VARIABLES #

# Define the path of the linter executable:
PACKAGE_JSON_LINTER ?= $(TOOLS_DIR)/lint/pkg-json/bin/cli

# Define the command-line options to be used when invoking the executable:
PACKAGE_JSON_LINTER_FLAGS ?=


# TARGETS #

# Lint package.json.
#
# This target lints package.json files.

lint-pkg-json:
	$(QUIET) $(MAKE_EXECUTABLE) $(PACKAGE_JSON_LINTER)
	$(QUIET) $(PACKAGE_JSON_LINTER) $(PACKAGE_JSON_LINTER_FLAGS) $(ROOT_DIR)

.PHONY: lint-pkg-json
