!>
! @license Apache-2.0
!
! Copyright (c) 2025 The Stdlib Authors.
!
! Licensed under the Apache License, Version 2.0 (the "License");
! you may not use this file except in compliance with the License.
! You may obtain a copy of the License at
!
!    http://www.apache.org/licenses/LICENSE-2.0
!
! Unless required by applicable law or agreed to in writing, software
! distributed under the License is distributed on an "AS IS" BASIS,
! WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
! See the License for the specific language governing permissions and
! limitations under the License.
!<

!> Benchmarks.
!
! ## Notes
!
! -   Written in "free form" Fortran 95.
!
!<
program bench
  implicit none
  ! ..
  ! Local constants:
  character(4), parameter :: name = 'TODO' ! if changed, be sure to adjust length
  integer, parameter :: iterations = 10000000
  integer, parameter :: repeats = 3
  integer, parameter :: min = 1
  integer, parameter :: max = 6
  ! ..
  ! Run the benchmarks:
  call main()
  ! ..
  ! Functions:
contains
  ! ..
  ! Prints the TAP version.
  ! ..
  subroutine print_version()
    print '(A)', 'TAP version 13'
  end subroutine print_version
  ! ..
  ! Prints the TAP summary.
  !
  ! @param {integer} total - total number of tests
  ! @param {integer} passing - total number of passing tests
  ! ..
  subroutine print_summary( total, passing )
    ! ..
    ! Scalar arguments:
    integer, intent(in) :: total, passing
    ! ..
    ! Local variables:
    character(len=999) :: str, tmp
    ! ..
    ! Intrinsic functions:
    intrinsic adjustl, trim
    ! ..
    print '(A)', '#'
    ! ..
    write (str, '(I15)') total ! TAP plan
    tmp = adjustl( str )
    print '(A,A)', '1..', trim( tmp )
    ! ..
    print '(A,A)', '# total ', trim( tmp )
    ! ..
    write (str, '(I15)') passing
    tmp = adjustl( str )
    print '(A,A)', '# pass  ', trim( tmp )
    ! ..
    print '(A)', '#'
    print '(A)', '# ok'
  end subroutine print_summary
  ! ..
  ! Prints benchmarks results.
  !
  ! @param {integer} iterations - number of iterations
  ! @param {double} elapsed - elapsed time in seconds
  ! ..
  subroutine print_results( iterations, elapsed )
    ! ..
    ! Scalar arguments:
    double precision, intent(in) :: elapsed
    integer, intent(in) :: iterations
    ! ..
    ! Local variables:
    double precision :: rate
    character(len=999) :: str, tmp
    ! ..
    ! Intrinsic functions:
    intrinsic dble, adjustl, trim
    ! ..
    rate = dble( iterations ) / elapsed
    ! ..
    print '(A)', '  ---'
    ! ..
    write (str, '(I15)') iterations
    tmp = adjustl( str )
    print '(A,A)', '  iterations: ', trim( tmp )
    ! ..
    write (str, '(f0.9)') elapsed
    tmp = adjustl( str )
    print '(A,A)', '  elapsed: ', trim( tmp )
    ! ..
    write( str, '(f0.9)') rate
    tmp = adjustl( str )
    print '(A,A)', '  rate: ', trim( tmp )
    ! ..
    print '(A)', '  ...'
  end subroutine print_results
  ! ..
  ! Runs a benchmark.
  !
  ! @param {integer} iterations - number of iterations
  ! @param {integer} len - array length
  ! @return {double} elapsed time in seconds
  ! ..
  double precision function benchmark( iterations, len )
    ! ..
    ! External functions:
    interface
      double precision function TODO( N, dx, stride )
        double precision :: dx(*)
        integer :: stride, N
      end function TODO
    end interface
    ! ..
    ! Scalar arguments:
    integer, intent(in) :: iterations, len
    ! ..
    ! Local scalars:
    double precision :: elapsed, y, r
    real :: t1, t2
    integer :: i
    ! ..
    ! Local arrays:
    double precision, allocatable :: x(:)
    ! ..
    ! Intrinsic functions:
    intrinsic random_number, cpu_time
    ! ..
    ! Allocate arrays:
    allocate( x(len) )
    ! ..
    do i = 1, len
      call random_number( r )
      x( i ) = ( r*20000.0d0 ) - 10000.0d0
    end do
    ! ..
    y = 0.0d0
    ! ..
    call cpu_time( t1 )
    ! ..
    do i = 1, iterations
      y = TODO( x );
      if ( y /= y ) then
        print '(A)', 'should not return NaN'
        exit
      end if
    end do
    ! ..
    call cpu_time( t2 )
    ! ..
    elapsed = t2 - t1
    ! ..
    if ( y /= y ) then
      print '(A)', 'should not return NaN'
    end if
    ! ..
    ! Deallocate arrays:
    deallocate( x )
    ! ..
    benchmark = elapsed
    return
  end function benchmark
  ! ..
  ! Main execution sequence.
  ! ..
  subroutine main()
    ! ..
    ! Local variables:
    integer :: count, iter, len, i, j
    double precision :: elapsed
    character(len=999) :: str, tmp
    ! ..
    ! Intrinsic functions:
    intrinsic adjustl, trim
    ! ..
    call print_version()
    count = 0
    do i = min, max
      len = 10**i
      iter = iterations / 10**(i-1)
      do j = 1, repeats
        count = count + 1
        ! ..
        write (str, '(I15)') len
        tmp = adjustl( str )
        print '(A,A,A,A)', '# fortran::native::', name, ':len=', trim( tmp )
        ! ..
        elapsed = benchmark( iter, len )
        ! ..
        call print_results( iter, elapsed )
        ! ..
        write (str, '(I15)') count
        tmp = adjustl( str )
        print '(A,A,A)', 'ok ', trim( tmp ), ' benchmark finished'
      end do
    end do
    call print_summary( count, count )
  end subroutine main
end program bench