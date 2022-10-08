# CryptEthers
 Web3 Project

# To run the webapp

cd [to_cryptether_project]
 
 cd client
 
 npm run dev
 
 go to browser :- http://localhost:3000

# To build the image from the cloned folder
 
 cd [to cryptether project]
 
 Config Dockerfile // or use the existing one
 
 run the command for building docker image :- docker build -t [any_name]
 
 check if the image is built successfully :- docker images
 
 run the container :- docker run -p 8000:3000 -it [the_name_that_you_gave]
 
 check if the container is running :- docker ps
 
 go to browser :- http://localhost:8000 

