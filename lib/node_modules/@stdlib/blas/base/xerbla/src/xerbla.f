!>
! @license Apache-2.0
!
! Copyright (c) 2024 The Stdlib Authors.
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

!> Error handler for the BLAS/LAPACK routines.
!
! ## Notes
!
! * Modified version of reference BLAS routine (version 3.12.0). Updated to "free form" Fortran 95.
! * This routine is called by an LAPACK routine if an input parameter has an invalid value. A message is printed and execution stops.
! * Installers may consider modifying the STOP statement in order to call system-specific exception-handling facilities.
!
! ## Authors
!
! * Univ. of Tennessee
! * Univ. of California Berkeley
! * Univ. of Colorado Denver
! * NAG Ltd.
!
! ## License
!
! From <http://netlib.org/blas/faq.html>:
!
! > The reference BLAS is a freely-available software package. It is available from netlib via anonymous ftp and the World Wide Web. Thus, it can be included in commercial software packages (and has been). We only ask that proper credit be given to the authors.
! >
! > Like all software, it is copyrighted. It is not trademarked, but we do ask the following:
! >
! > * If you modify the source for these routines we ask that you change the name of the routine and comment the changes made to the original.
! >
! > * We will gladly answer any questions regarding the software. If a modification is done, however, it is the responsibility of the person who modified the routine to provide support.
!
! @param {string} srname - name of the routine which called `xerbla`
! @param {integer} info - position of the invalid parameter in the parameter list of the calling routine
!<
subroutine xerbla( srname, info )
  implicit none
  ! ..
  ! Scalar arguments:
  character*(*) :: srname
  integer :: info
  ! ..
  ! Intrinsic functions:
  intrinsic len_trim
  ! ..
  write( *, fmt = 9999 ) srname( 1:len_trim( srname ) ), info
  ! ..
  stop
  ! ..
9999 format( 'Error: invalid argument. Must provide a valid argument to routine `', a, '`. Argument: ', i2, '.' )
  ! ..
end subroutine xerbla