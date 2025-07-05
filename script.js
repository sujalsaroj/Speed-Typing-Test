let displayTime=document.querySelector('#timerDisplay');
        const quotes=[
            "Be yourself; everyone else is already taken.",
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            "Life can only be understood backwards; but it must be lived forwards.",
            "The realization that life is absurd cannot be an end, but only a beginning.",
           " Three things in life your health, your mission, and the people you love. That’s it.",
          " Life gets better when you stop caring about everything.",
        ]
        let currentquotes='';
        let startTime;
        let started=false;
        let setTimeInterval;
        let elapsedSeconds;
        function speedTypeTest(){
            currentquotes=quotes[Math.floor(Math.random()*quotes.length)];
            document.querySelector('.textContainer').innerText=currentquotes;
            document.querySelector('#inputArea').value='';
            document.querySelector('.result').innerText='';
            displayTime.innerText=`0:0:0`;
            started=false;
            clearInterval(setTimeInterval);
            
        }
        function startTimer(){
            if(!started){
                startTime=new Date().getTime();
                started=true;
                 elapsedSeconds=0;

                 setTimeInterval=setInterval(()=>{
                   elapsedSeconds++;
                   let min=Math.floor(elapsedSeconds/60);
                   let sec=elapsedSeconds%60;
                   displayTime.innerText=`0:${min}:${sec}`;
                 },1000);
            }
        
            let typed=document.querySelector('#inputArea').value;       
            if(typed.trim().toLowerCase()===currentquotes.trim().toLowerCase()){
                let endTime=new Date().getTime();
                let timeTaken=(endTime-startTime)/1000;
                let wordCount=currentquotes.split(" ").length;
                let wpm=Math.round((wordCount/timeTaken)*60);

                let correctChar=0;
                for(let i=1;i<typed.length;i++){
                    if(typed[i]===currentquotes[i]);
                    correctChar++;
                }
                let accuracy=(correctChar/typed.length)*100;
                document.querySelector('.result').innerText=`Time Taken ${timeTaken.toFixed(2)} seconds.
                speed is ${wpm} WPM.
                Accuracy is ${accuracy.toFixed(2)}%.`;
                clearInterval(setTimeInterval);
            }
        }
        document.querySelector('#inputArea').addEventListener("input",startTimer);
        speedTypeTest();

       
       