import psycopg2
import json
from kafka import KafkaConsumer
import datetime

conn = psycopg2.connect(database='cockdb69', user='root', host='localhost', port='26257')

cur = conn.cursor()

consumer = KafkaConsumer('test1', bootstrap_servers='45.79.157.154:9092')

for msg in consumer:
	data = json.loads(msg.value)['data']
	query = "INSERT INTO test_transactions (hash, version, lock_time, size, amount, fees, confirmations, pool, publish_time) " \
		"VALUES ('%s', %d, %d, %d, %d, %d, %d, '%s', %d);" % (
			data['hash'],
			data['version'],
			data['lock_time'],
			data['size'],
			data['amount'],
			data['fees'],
			data['confirmations'],
			data['pool'],
			msg.timestamp
		)
	print query
	cur.execute(query)
	conn.commit()
