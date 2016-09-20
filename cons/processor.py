# never got to set this up on a daemon - a set of constantly updating facts for a bitcoin dashboard

import psycopg2
import json
import time

current_milli_time = lambda: int(round(time.time() * 1000))

conn = psycopg2.connect(database='cockdb69', user='root', host='localhost', port='26257')
cur = conn.cursor()

while(True):

	#transactions per second
	fetch_query = 'SELECT COUNT(*) FROM test_transactions WHERE publish_time > %d;' % (current_milli_time() - 15000)
	print fetch_query
	cur.execute(fetch_query)
	tps = int(cur.fetchall()[0][0]) / 15
	query = "UPDATE general_facts SET num_field_1 = %d WHERE fact_name = 'Transactions per Second';" % tps
	print query
	cur.execute(query)
	conn.commit()

