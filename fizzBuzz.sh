function is_multiple_of_three() {
  if [ $(($1% 3)) == 0 ]
    then
      return 0
    else
      return 1
  fi
}

function is_multiple_of_five() {
  if [ $(($1% 5)) == 0 ]
    then
      return 0
    else
      return 1
  fi
}

function is_multiple_of_three_and_five() {
  if is_multiple_of_three $1 && is_multiple_of_five $1
  then
    return 0
  else
    return 1
  fi
}

if is_multiple_of_three_and_five $1
then
  echo 'FizzBuzz'
elif is_multiple_of_three $1
then
  echo 'Fizz'
elif is_multiple_of_five $1
then
  echo 'Buzz'
else
  echo $1
fi