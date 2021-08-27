#!/bin/bash

function is_multiple_of_three() {
  if [ $(($1%3)) == 0 ]
    then
      return 0
  fi
  return 1
}

function is_multiple_of_five() {
  if [ $(($1%5)) == 0 ]
    then
      return 0
  fi
  return 1
}

out=''
if is_multiple_of_three "$1"
then
  out="${out}Fizz"
fi
if is_multiple_of_five "$1"
then
    out="${out}Buzz"
fi

if [[ $out == '' ]]
then
  echo "$1"
else
  echo "$out"
fi