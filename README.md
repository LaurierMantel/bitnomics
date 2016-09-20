# Bitnomics 

Bitnomics is a real time data streaming data pipeline using Apache Kafka and CockroachDB.  It was built at Hack the North and deployed on Linode.  The goal was to get real time economic information on the Bitcoin blockchain to gain insights at the macronecomic level on bitcoin.  

The pipeline works roughly as follows:
- Data streams from a Coinbase websocket into a Kafka topic using a Python Kafka producer
- Another python Kafka consumer on the other end reads from the topic, inserting the messages into CockroachDB
- (ideally) we would have a webapp running to visualize these topics

Some cool features:
- running things as daemons made the pipeline more robust, preventing important components from randomly stopping and causing us to lose exactly-once semantics on blockchain transaction events
- CockroachDB worked quite well - it has a Postgresql interface
- Kafka also worked quite as an MQ and was very reliable

![system diagram](https://cloud.githubusercontent.com/assets/10405248/18657444/594f7274-7ec8-11e6-81b3-27dad8322970.png)

Contributors: [Laurier Mantel](http://lauriermantel.com) and [Nolan Dey](http://ndey96.github.io)
