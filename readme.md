# Health Check RabbitMq

## CI
[![Circle CI](https://circleci.com/gh/LucasRodrigues/health-check-rabbitmq.svg?style=svg)](https://circleci.com/gh/LucasRodrigues/health-check-rabbitmq)

## Install

```
$ npm install health-check-rabbitmq
```

## Usage

```
var healthCheckRabbitMq = require('health-check-rabbitmq');

healthCheckRabbitMq.do([
{
  url: '127.0.0.1',
  port: 6379
},
{
  url: 'wrong host',
  port: 6379
}])
 .then(function(result){
    console.log(result);

    /*
      {
        health: false,
        success: 1,
        error: 1,
        details:
          [
            {
              name: '127.0.0.1:6379',
              health: true,
              message: ''
            },
            {
              name: 'wrong host:6379',
              health: false,
              message: 'Redis connection to wrong host:6379 failed - getaddrinfo ENOTFOUND wrong host wrong host:6379'
            }
          ]
      }
    */
 })
 .catch(function(error){
    console.log(error);
 });
```
