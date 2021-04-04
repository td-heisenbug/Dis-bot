module.exports = {
	name: 'link',
	description: 'Link of all classes',
    execute(message, args) {
        var now = new Date()
        if(now.getDay() == 1){
             if(now.getUTCHours() == 2){
               message.channel.send('https://meet.google.com/wjp-hfva-irg')
               } else if((now.getUTCHours() > 3 && now.getUTCMinutes() > 19) && (now.getUTCHours() > 5 && now.getUTCMinutes() < 20)){
                message.channel.send('https://meet.google.com/ber-iudb-nzu')
               } else if((now.getUTCHours() > 5 && now.getUTCMinutes() > 19) && (now.getUTCHours() > 6 && now.getUTCMinutes() < 40)){
                message.channel.send('https://meet.google.com/gcy-xqmj-t2p')
               } else if((now.getUTCHours() > 6 && now.getUTCMinutes() > 39) && (now.getUTCHours() > 7 && now.getUTCMinutes() < 40)){
                message.channel.send('http://meet.google.com/teo-yxey-gra')
               } else if((now.getUTCHours() > 7  && now.getUTCMinutes() > 39) && (now.getUTCHours() > 8 && now.getUTCMinutes() < 50)){
                message.channel.send('https://meet.google.com/mib-cfkv-oca')
               }
    
           } else if(now.getDay() == 2){
                if(now.getUTCHours() == 2){ 
                 message.channel.send('https://meet.google.com/gcy-xqmj-t2p')
                } else if(now.getUTCHours() == 3){
                 message.channel.send('https://meet.google.com/mib-cfkv-oca')
                } else if(now.getUTCHours() == 4){
                 message.channel.send('http://meet.google.com/teo-yxey-gra')
                } else if(now.getUTCHours() == 5){
                 message.channel.send('https://meet.google.com/drv-npyd-hgj')
                }
           } else if(now.getDay() == 3){
               if(now.getUTCHours() == 2){ 
                    message.channel.send('https://meet.google.com/lookup/cl3nvei53')
                   } else if(now.getUTCHours() == 3){
                    message.channel.send('https://meet.google.com/mib-cfkv-oca')
                   } else if(now.getUTCHours() == 4){
                    message.channel.send('https://meet.google.com/niz-rsvd-acf?authuser=0')
                   } else if(now.getUTCHours() > 5){
                    message.channel.send('http://meet.google.com/teo-yxey-gra')
                   }
          } else if(now.getDay() == 4){
                if(now.getUTCHours() > 0 && (now.getUTCHours() > 2 && now.getUTCMinutes() < 20)){
                message.channel.send('https://meet.google.com/pea-bodc-gqc')
                } else if((now.getUTCHours() > 2 && now.getUTCMinutes() > 19) && (now.getUTCHours() > 3 && now.getUTCMinutes() < 20)){
                 message.channel.send('https://meet.google.com/dw2-7ptm-ro3')
                } else if((now.getUTCHours() > 3 && now.getUTCMinutes() > 19) && (now.getUTCHours() > 7 && now.getUTCMinutes() < 40)){
                 message.channel.send('https://meet.google.com/gcy-xqmj-t2p')
                } else if((now.getUTCHours() > 7 && now.getUTCMinutes() > 39) && (now.getUTCHours() > 8 && now.getUTCMinutes() < 50)){
                 message.channel.send('http://meet.google.com/teo-yxey-gra')
    
           } else if(now.getDay() == 5){
            if(now.getUTCHours() > 0 && (now.getUTCHours() > 2 && now.getUTCMinutes() < 20)){
                message.channel.send('https://meet.google.com/pea-bodc-gqc')
                } else if((now.getUTCHours() > 2 && now.getUTCMinutes() > 19) && (now.getUTCHours() > 4 && now.getUTCMinutes() < 20)){
                 message.channel.send('EVS LINK')
                } else if((now.getUTCHours() > 4 && now.getUTCMinutes() > 19) && (now.getUTCHours() > 5 && now.getUTCMinutes() < 20)){
                 message.channel.send('https://meet.google.com/gcy-xqmj-t2p')
                } else if((now.getUTCHours() > 5 && now.getUTCMinutes() > 19) && (now.getUTCHours() > 7 && now.getUTCMinutes() < 50)){
                 message.channel.send('https://meet.google.com/mib-cfkv-oca')
                }
           }
        }
    }
}