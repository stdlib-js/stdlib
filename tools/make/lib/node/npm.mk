
# TARGETS #

# Run preversion tasks.
#
# This target runs tasks which should be completed before incrementing the project version.

preversion: dedupe-node-modules

.PHONY: preversion
