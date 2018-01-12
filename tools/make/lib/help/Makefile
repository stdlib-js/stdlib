
# VARIABLES #

# Define the path to the Makefile usage text file for displaying help information:
MAKE_USAGE ?= $(TOOLS_MAKE_DIR)/usage.txt

# Define command flags:
FIND_MAKEFILES_FLAGS ?= \
	-name 'Makefile' \
	-o \
	-name '*.mk'


# TARGETS #

#/
# Prints a `Makefile` help message.
#
# @example
# make help
#/
help:
	$(QUIET) $(CAT) $(MAKE_USAGE)

.PHONY: help

#/
# Prints a sorted list of `Makefile` rules.
#
# ## Notes
#
# -   The list of rules is **not** exhaustive, as the list does **not** include rules which have not been explicitly declared PHONY targets and does **not** include rules declared via variables. These rules could be included by dumping the Makefile database `make -qp`, but this is not seen as necessary due to predominant use of `.PHONY`.
#
# @example
# make list-rules
#/
list-rules:
	$(QUIET) find $(TOOLS_MAKE_DIR) $(FIND_MAKEFILES_FLAGS) \
	| xargs grep '^.PHONY: ' \
	| awk '{print $$2}' \
	| sort

.PHONY: list-rules

#/
# Prints a sorted list of `Makefile` rules for computing project statistics.
#
# ## Notes
#
# -   The list of rules is **not** exhaustive, as the list does **not** include rules which have not been explicitly declared PHONY targets and does **not** include rules declared via variables. These rules could be included by dumping the Makefile database `make -qp`, but this is not seen as necessary due to predominant use of `.PHONY`.
#
# @example
# make list-stats-rules
#/
list-stats-rules:
	$(QUIET) find $(TOOLS_MAKE_DIR) $(FIND_MAKEFILES_FLAGS) \
	| xargs grep '^.PHONY: stats-' \
	| awk '{print $$2}' \
	| sort

.PHONY: list-stats-rules
