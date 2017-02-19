
# VARIABLES #

# Define the root directory from which to search for packages:
PACKAGES_DIR ?= $(ROOT_DIR)/lib/node_modules

# Define the path of the executable:
LIST_PACKAGE_NAMES ?= $(TOOLS_DIR)/pkgs/names/bin/cli

# Define the command flags:
LIST_PACKAGE_NAMES_FLAGS ?=


# TARGETS #

# List all package names.
#
# This target prints a list of all package names.

list-pkgs-names: $(LIST_PACKAGE_NAMES) $(NODE_MODULES)
	$(QUIET) $(NODE) $(LIST_PACKAGE_NAMES) $(LIST_PACKAGE_NAMES_FLAGS) $(PACKAGES_DIR)

.PHONY: list-pkgs-names
