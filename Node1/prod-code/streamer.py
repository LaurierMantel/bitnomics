from kafka import KafkaProducer
import websocket
import time

producer = KafkaProducer(bootstrap_servers='localhost:9092')
def on_message(ws, message):
    producer.send('test1', message)
    print message

def on_error(ws, error):
    print error

def on_close(ws):
    print "### closed ###"

def on_open(ws):
    ws.send('{"subscribe":"transactions"}')

if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("wss://bitcoin.toshi.io",
                                on_message = on_message,
                                on_error = on_error,
                                on_close = on_close)
    ws.on_open = on_open

    ws.run_forever()
