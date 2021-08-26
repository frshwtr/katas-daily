out=''
if [ $(($1 % 3)) == 0 ]
then
  out="${out}Fizz"
fi
if [ $(($1 % 5)) == 0 ]
then
  out="${out}Buzz"
fi
if [[ $out == '' ]]
then
  out=$1
fi

echo $out