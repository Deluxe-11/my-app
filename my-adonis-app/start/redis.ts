/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import Redis from '@ioc:Adonis/Addons/Redis';
import Ws from 'App/Services/Ws'

Redis.subscribe('myapp_database_hello', (data: string) => {
    // Ws.io.emit('done',user);
    const comment = JSON.parse(data);
    console.log(comment);

    Ws.io.to(comment.commentable_id).emit('add-comment',comment);

})
  