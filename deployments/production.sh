sudo npm i -g --unsafe-perm now
echo "deploying production..."
URL=$(now --docker --public -t $NOW_TOKEN)
now alias $URL production-bogota-devops