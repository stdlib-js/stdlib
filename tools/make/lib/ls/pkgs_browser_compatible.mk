
# VARIABLES #

# Define the path of the executable:
LIST_BROWSER_COMPATIBLE_PACKAGE_NAMES ?= $(TOOLS_PKGS_DIR)/pkgs/browser-compatible/bin/cli

# Define the command flags:
LIST_BROWSER_COMPATIBLE_PACKAGE_NAMES_FLAGS ?=


# TARGETS #

# List browser compatible packages.
#
# This target prints a list of all packages which are compatible with browser environments.

list-pkgs-browser-compatible: $(LIST_BROWSER_COMPATIBLE_PACKAGE_NAMES) $(NODE_MODULES)
	$(QUIET) $(NODE) $(LIST_BROWSER_COMPATIBLE_PACKAGE_NAMES) $(LIST_BROWSER_COMPATIBLE_PACKAGE_NAMES_FLAGS) $(SRC_DIR)

.PHONY: list-pkgs-browser-compatible
