
import http.client, urllib.parse
import time
import ssl
# defining the api-endpoint
URL = "embedded.fltprep.com"

text_dir = 'C:\\Users\\Alex\\Documents\\School\\321\\weather.txt'


data = {}

def parse_text():
    file = open(text_dir, "r")
    listOfData = []

    for line in file:
        listOfData.append(line)
    file.close()
    temp_string = listOfData[-1]
    dataarry =  temp_string.split(',')
    print(dataarry)
    humid = dataarry[0]
    temp = dataarry[1]
    return {'temp': temp, 'humid': humid, 'baro': ''}


def post(temp, humid):
    params = urllib.parse.urlencode(parse_text())
    headers = {"Content-type": "application/x-www-form-urlencoded",
                "Accept": "text/plain"}
    conn = http.client.HTTPSConnection(URL, context=ssl._create_unverified_context())

    conn.request("POST", "/api/wx", params,headers)

    conn.getresponse()

    conn.close()

def main():
    while(True):
        post(22,23)
        time.sleep(5)

if __name__ == '__main__':
    main()