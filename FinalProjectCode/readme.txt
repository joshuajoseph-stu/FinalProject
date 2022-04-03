spring code is configured to run in ec2 docker, it wont work in local machine, or docker in local machine. 

mysql server uses official mysql image. 

-------------------------------
NOTES OF HOW EVERYTHING WORKS
-------------------------------

all functionality works in site. all other functionality works in spring. all functionality works in sql. 
for this single sql variation, use image
springapp2, website3. mysql in seperate ec2. 

so order of operation is: 

FOR SQL
1. create ec2 update and install docker 
2. pull sql 
3. create networrk and volume with 
3.1. docker volume create mysqlvol
3.2. to confirm, docker volume list 
3.3. docker network create jewel-test
3.4. to confirm, docker inspect jewel-test 
4. docker run --name mysqlwv-test --network jewel-test -p 3307:3306 -e MYSQL_ROOT_PASSWORD=pass123 -e MYSQL_DATABASE=jewel -d --mount source=mysqlvol,target=/var/lib/mysql mysql
5. now enter into sql terminal using docker exec -it mysqlwv-test  mysql -uroot -ppass123
6. create proper db with create database jeweltest

FOR SPRING AND WEBSITE
1. create ec2 for spring
2. connect to ec2
3. update and install docker 

to set up ec2 and docker : https://www.linode.com/docs/guides/installing-and-using-docker-on-ubuntu-and-debian/
in step 3 above, use 
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
in step 4 above, use 
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
do next few steps 
IMPORTANT: sudo systemctl start docker
once steps are done and docker -v works, 

4. pull website3 and springapp2 

docker pull joshuajoseph369/website3
docker pull joshuajoseph369/springapp2
docker images to confirm 

5. run them using commands: 

edit: make network using
docker network create jewel-test

5.1. docker run --name website --network jewel-test -d -p 80:80 joshuajoseph369/website3
5.2. docker run --name springtest --network jewel-test -d -p 8080:8080 joshuajoseph369/springapp2

6. if sql is online and working swagger should be accessible and website should show data
7. swagger will be on ip:8080/swagger-ui.html
8. website will be on ip. no need to specify port

incase we need to change config of website or spring,
1. docker exec -it "containerid" /bin/sh
2.1. vi isnt installed normally in apache2 container. 
2.2. so run apt-get update and apt-get install vim
2.2.1 have to cd to correct directory. ls and find htdocs/ cd into it and ls and youll see all your files 
2.6. to edit hit i to enter insert mode in vi, then after changing it hit esc. then hit : and type wq! and hit enter. should be saved
3. can also change html pages and whatever

demo data: 
11, Silver Necklace, Silver, 999, SN58
12, Red Orb, Ruby, 1499, RO29
13, Tanjiro Earrings, Platinum, 1299, TE37
