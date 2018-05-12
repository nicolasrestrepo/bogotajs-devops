sudo npm i -g --unsafe-perm now
echo "deploying..."
URL=$(now --docker --public -t $NOW_TOKEN)
echo "running acceptance $URL"
curl --silent -L $URL