# EtherSender

## Run
```javascript

npm install && npm start
```

http server start in http://localhost:3000


## Ganache
I have used ganache. You can download from github, install and run
```javascript
git clone https://github.com/trufflesuite/ganache

npm install  && npm start

```
app uses RPC SERVER in HTTP://127.0.0.1:7545

## Send 

POST http://localhost:3000/api/v1/transactions/send


```javascript
{
	"address": "0x8dcBa48481B95D9b8Be014dC3e59A2D419354f0a"
}
```

## Run Tests
```javascript

npm run test
```
