from kafka import KafkaConsumer

consumer = KafkaConsumer('test1', bootstrap_servers='45.79.157.154:9092')
for msg in consumer:
    print (msg)
