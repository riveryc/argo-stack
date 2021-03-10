curl --location --request POST 'http://localhost:8080/sample' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "1",
    "method": "sayHello",
    "params": [
        {
            "name": "Airwallex"
        }
    ]
}'
