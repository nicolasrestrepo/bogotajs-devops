sudo npm i -g now
echo "deploying..."
URL=$(now --docker -t $NOW_TOKEN)
echo "running acceptance $URL"
curl --silent -L $URL