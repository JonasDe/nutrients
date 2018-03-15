### Requirements
- Docker

### To get it up and running
```
# Start
docker build -t <your username>/node-web-app .

docker run -p 49160:8080 -d <your username>/node-web-app


# Below is is simply for checking that it runs. 

# Get container ID
docker ps

# Print app output
docker logs <container id>


docker exec -it <container id> /bin/bash
```


Visit http://localhost:49160 to make sure its running.


Might take a few seconds to load. 
Large table, and the layout will correct itself once all database entries has loaded.
