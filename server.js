var nodemailer = require('nodemailer');
const { getMaxListeners } = require('../../vs/InstaClone/Server/Model/post');

var Transporter = nodemailer.createTransport({
    service :'gmail',
    auth : {
        user: 'sriram.gsr6@gmail.com',
        pass: 'sriram143'
    }
})

var options  = {
    from : 'sriram.gsr6@gmail.com',
    to : 'sriramgarapati16@gmail.com',
    subject: 'Testing mail',
    text: "welcome to new nodejs project"
}

Transporter.sendMail(options, (err,info)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log('Email is Sent');
    }
})