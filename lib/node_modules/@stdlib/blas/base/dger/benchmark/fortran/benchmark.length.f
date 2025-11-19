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

program bench
  implicit none
  ! ..
  ! Local constants:
  character(4), parameter :: name = 'dger' ! if changed, be sure to adjust length
  integer, parameter :: iterations = 1000000
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
    write (str, '(f100.9)') elapsed
    tmp = adjustl( str )
    print '(A,A)', '  elapsed: ', trim( tmp )
    ! ..
    write( str, '(f100.9)') rate
    tmp = adjustl( str )
    print '(A,A)', '  rate: ', trim( tmp )
    ! ..
    print '(A)', '  ...'
  end subroutine print_results
  ! ..
  ! Runs a benchmark.
  !
  ! @param {integer} iterations - number of iterations
  ! @param {integer} N - array dimension size
  ! @return {double} elapsed time in seconds
  ! ..
  double precision function benchmark( iterations, N )
    ! ..
    ! External functions:
    interface
      subroutine dger( M, N, alpha, X, strideX, Y, strideY, A, LDA )
        integer :: strideX, strideY, LDA, M, N
        double precision :: X(*), Y(*), A(LDA, *)
        double precision :: alpha
      end subroutine dger
    end interface
    ! ..
    ! Scalar arguments:
    integer, intent(in) :: iterations, N
    ! ..
    ! Local scalars:
    double precision :: elapsed, r
    double precision ::  t1, t2
    integer :: i, j
    ! ..
    ! Local arrays:
    double precision, allocatable :: x(:), y(:), A(:,:)
    ! ..
    ! Intrinsic functions:
    intrinsic random_number, cpu_time, mod
    ! ..
    ! Allocate arrays:
    allocate( x(N), y(N), A(N,N) )
    ! ..
    do i = 1, N
      call random_number( r )
      x( i ) = ( r*20.0 ) - 10.0
      call random_number( r )
      y( i ) = ( r*20.0 ) - 10.0
      do j = 1, N
        call random_number( r )
        A(i, j) = ( r*20.0 ) - 10.0
      end do
    end do
    ! ..
    call cpu_time( t1 )
    ! ..
    j = 1
    do i = 1, iterations
      call dger( N, N, 1.0d0, x, 1, y, 1, A, N )
      j = mod( i, N ) + 1
      if ( A( j, j ) /= A( j, j ) ) then
        print '(A)', 'should not return NaN'
        exit
      end if
    end do
    ! ..
    call cpu_time( t2 )
    ! ..
    elapsed = t2 - t1
    ! ..
    if ( A( j, j ) /= A( j, j ) ) then
      print '(A)', 'should not return NaN'
    end if
    ! ..
    ! Deallocate arrays:
    deallocate( x, y, A )
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
    character(len=999) :: str, tmp
    double precision :: elapsed
    integer :: i, j, N, count, iter
    ! ..
    ! Intrinsic functions:
    intrinsic adjustl, trim, floor, sqrt
    ! ..
    call print_version()
    count = 0
    do i = min, max
      N = floor( ( 10**i )**(1.0/2.0) )
      iter = iterations / 10**(i-1)
      do j = 1, repeats
        count = count + 1
        ! ..
        write (str, '(I15)') N*N
        tmp = adjustl( str )
        print '(A,A,A,A)', '# fortran::', name, ':size=', trim(tmp)
        ! ..
        elapsed = benchmark( iter, N )
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
