if [[ "$(($1%3))" == 0  &&  "$(($1%5))" == 0 ]]
then
  echo 'Fizz'
elif [ "$(($1%3))" == 0 ]
then
  echo 'Fizz'
elif [ "$(($1%5))" == 0 ]
then
  echo 'Buzz'
else
  echo $1
fi
