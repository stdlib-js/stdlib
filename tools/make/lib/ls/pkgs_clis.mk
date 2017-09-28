
# VARIABLES #

# Define the path of the executable:
LIST_PACKAGE_CLIS ?= $(TOOLS_PKGS_DIR)/pkgs/clis/bin/cli

# Define the command flags:
LIST_PACKAGE_CLIS_FLAGS ?=


# TARGETS #

# List all package command-line interfaces.
#
# This target prints a list of all package command-line interfaces.

list-pkgs-clis: $(LIST_PACKAGE_CLIS) $(NODE_MODULES)
	$(QUIET) $(NODE) $(LIST_PACKAGE_CLIS) $(LIST_PACKAGE_CLIS_FLAGS) $(SRC_DIR)

.PHONY: list-pkgs-clis
