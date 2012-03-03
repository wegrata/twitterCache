#!/usr/bin/env python
import json
import couchdb
import requests

def main():
    data = {'track':'#lrnchat'}
    auth = ('user','password')
    url = 'https://stream.twitter.com/1/statuses/filter.json'
    db = couchdb.Database('http://wegrata.iriscouch.com/twitter')
    response = requests.post(url,auth=auth,data=data)
    for line in response.iter_lines():
    	print line
    	if len(line) > 1:
    		tweet = json.loads(line)
    		db.save(tweet)
if __name__ == "__main__":
	main()