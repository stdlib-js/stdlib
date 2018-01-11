
# TARGETS #

# Run Fortran benchmarks.
#
# This target runs a list of Fortran benchmarks in sequential order.

benchmark-fortran:
	$(QUIET) $(FIND_FORTRAN_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		cd `dirname $$file` && \
		$(MAKE) clean && \
		$(MAKE) && \
		FORTRAN_COMPILER="$(FC)" \
		$(MAKE) run || exit 1; \
	done

.PHONY: benchmark-fortran


# Run Fortran benchmarks.
#
# This target runs a specified list of Fortran benchmarks in sequential order.

benchmark-fortran-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		cd `dirname $$file` && \
		$(MAKE) clean && \
		$(MAKE) && \
		FORTRAN_COMPILER="$(FC)" \
		$(MAKE) run || exit 1; \
	done

.PHONY: benchmark-fortran-files
