# CryptEthers
 Web3 Project

# To run the webapp

 1. cd [to_cryptether_project]
 
 2. cd client
 
 3. npm run dev
 
 4. go to browser :- http://localhost:3000

# To build the image from the cloned folder
 
 1. cd [to cryptether project]
 
 2. Config Dockerfile // or use the existing one
 
 3. run the command for building docker image :- docker build -t [any_name]
 
 4. check if the image is built successfully :- docker images
 
 5. run the container :- docker run -p 8000:3000 -it [the_name_that_you_gave]
 
 6. check if the container is running :- docker ps
 
 7. go to browser :- http://localhost:8000 

