## Calendaru
Server with http communications that is still secure by using the JSON Web tokens
and MongoDB. This can be used for testing the functionality of all the features required in this computer project.


## Specifications:
Simple secure authentication, with a role based system  
Routes authenticated using any secure authentication protocol  
Other specification details will be present in the specification document  

## Implementation:
Node.JS with Express for the backend  
Authentication with JWT  
NoSQL database MongoDB for storing users and other specification related tables  

## Requirements:
The **only** requirement is to have Docker installed and running (and Docker-Compose if it's not already automatically installed on your OS). \
`sudo snap install docker` \
`sudo apt install docker-compose` \
An environment file '.env' that will have the configuration for this deployment must be placed inside `secureagenda/http(s)/backend`. It will contain:
- users and their passwords
- a key with which the authentication tokens will be signed
- the DB address \
This file has already been created with dummy data.

Only the server administrator knows the JWT authentication secret key. He has to specify this key
in the .env file.\
THIS FILE HAVE TO BE SECURELY DELETED AFTER SERVER INSTALLATION!\
We also decided that only the server administrator can add users by adding 
the informations in the .env file. Only new users will be added to the database when restarting the server.

## Installation:
on the application folder\
`cd salendaru`\
Run the following command to deploy:
`sudo docker-compose up --build` 

Once all packages installed the server will be online and can be locally accessed
by entering localhost in a web browser:
`localhost:80`
The deployment is resistant to unexpected shutdowns, it can be brought up with: \
`sudo docker-compose up`

## Testing:
As only the server administrator can add users, we added 4 users for testing purposes:

username : user1    
password : uB>kHtLLDf9FE3u84

username : user2    
password : GFNHOhFvPD202L!vV

username : user3    
password : <dZA*GX0pWOo1YGq<

username : user4    
password : jBvpJmJh2%)yk<OC]


