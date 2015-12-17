import amqplib from 'amqplib/callback_api';

export default class Repository {

  static test(configuration) {
    return new Promise(resolve => {
      const callbackOpen = err => {
        if(err){
          resolve({
            configuration: configuration,
            error: err
          });
        } else {
          resolve({
            configuration: configuration,
            error: null
          });
        }
      };

      amqplib.connect(configuration.url, callbackOpen);
    });
  }
}
