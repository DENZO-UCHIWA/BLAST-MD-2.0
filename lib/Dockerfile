FROM quay.io/suhailtechinfo/suhail
RUN git clone https://github.com/DENZO-UCHIWA/BLAST-MD /root/blast-md
WORKDIR /root/blast-md/
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
