let display = document.getElementById('clock')
    let audio = new Audio("C:\Javascript\ass\Chino-The-Living-One.mp3")
    audio.loop = true;
    let alarmTime = null;
    let alarmTimeout = null;

    function updateTime(){
        const date = new Date();

        let hour = date.getHours();
        let minute = date.getMinutes();        
        let second =date.getSeconds(); 

        if (hour == 0){
            hour = 12;
        }if (hour > 12){
            hour = hour - 12;
        }    

        if (hour < 10){
            hour = "0" + hour;
        }if (minute < 10){
            minute = "0" + minute;
        }if (second < 10){
            second = "0" + second;
        }
        display.innerText = `${hour} : ${minute} : ${second}`;  
    }
    // updateTime()
    function setAlarmTime(value){
        alarmTime = value;
    }
    function setAlarm(){
        if(alarmTime){
            let current = new Date();
            let timeToAlarm = new Date(alarmTime);
            if (timeToAlarm > current){
                let timeout = timeToAlarm.getTime() - current.getTime();
                alarmTimeout = setTimeout(()=> {audio.play("C:\Javascript\ass\Chino-The-Living-One.mp3"),  timeout});
                alert('alert set')
            }
        }
    }
    setInterval(updateTime, 1000)