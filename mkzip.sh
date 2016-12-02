#!/bin/sh

NAME=`basename $PWD`
echo $NAME

cd ..
rm -f $NAME.zip
zip -r $NAME.zip $NAME -x chromewheel/mkzip.sh
