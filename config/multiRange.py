import sys
import re
import json
import urllib.request
from datetime import datetime, timedelta

def getSensors(page, type, outFile, day=None, startDay=None, endDay=None):
	if day is None:
		url = 'https://np02-slow-control.web.cern.ch/np02-slow-control/app/config/' + page + '.conf'
		with urllib.request.urlopen(url) as response:
			resp = response.read().decode('utf-8')
			sensors = resp.splitlines()
		dd = []
		for i in range(len(sensors)):
			dd.append(sensors[i].split(','))
		data = {}
		for i in range(len(sensors)):
			data[dd[i][0]] = ''
		for i in data:
			res = []
			elemID = i
			dataURL = 'http://np02cajje.cern.ch:5000/range/' + startDay + '/' + endDay + '/' + elemID
			with urllib.request.urlopen(dataURL) as rr:
				r = rr.read().decode('utf-8')
				res = json.loads(r)
				temp = [res[i] for i in range(len(res))]
			data[i] = temp
		final = json.dumps(data)
		f = open(outFile, "w+")
		f.write(final)
		f.close
	if day is not None:
		url = 'https://np02-slow-control.web.cern.ch/np02-slow-control/app/config/' + page + '.conf'
		with urllib.request.urlopen(url) as response:
			resp = response.read().decode('utf-8')
			sensors = resp.splitlines()
		dd = []
		for i in range(len(sensors)):
			dd.append(sensors[i].split(','))
		data = {}
		for i in range(len(sensors)):
			data[dd[i][0]] = ''
		for i in data:
			res = []
			elemID = i
			dataURL = 'http://np02cjhe.cern.ch:5000/day/' + day + '/' + elemID
			with urllib.request.urlopen(dataURL) as rr:
				r = rr.read().decode('utf-8')
				res = json.loads(r)
				temp = [res[i] for i in range(len(res))]
			data[i] = temp
		final = json.dumps(data)
		f = open(outFile, "w+")
		f.write(final)
		f.close


page = sys.argv[1]
type = sys.argv[2]
if (type == 'day'):
	outFile = sys.argv[3]
	day = sys.argv[4]
	startDay = None
	endDay = None
else:
	outFile = sys.argv[3]
	day = None
	startDay = sys.argv[4]
	endDay = sys.argv[5]

getSensors(page, type, outFile, day, startDay, endDay)
