# Contracts version

# Setup dependencies
```shell
npm install
```

# Run server
```shell
node src/server.js
```

```text
Go to the https://localhost:15000 to view frontend p
```

# Simple API for frontend part

```text
To get contracts data to fill table use api below
```

### Request

`GET https://localhost:15000/contracts_data`


    curl -i -H 'Accept: application/json' http://localhost:15000/contracts_data

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []