window.onload = function() {

    const statusText = document.getElementById("statusText")
    const clickWindow = document.getElementById("clickwindow")
    const timer = document.getElementById("timer")

    const startBtn = document.getElementById("startBtn");
    startBtn.addEventListener('click', function () {
        startBtn.disabled = true;
        statusText.innerText = "Starting in 3...";
        setTimeout(function() {countdown(3)}, 1100)
    })
    
    var numClicks = 0
    var count = null
    var counter = null

    function countdown(i){
        var text = ""
        i -= 1
        switch (i) {
            case 2: {
                statusText.innerText = "Starting in 3... 2..."
                clickWindow.style.backgroundColor = "red"
                return setTimeout(function() {countdown(i)}, 1100)
            }
            case 1: {
                statusText.innerText = "Starting in 3... 2... 1..."
                clickWindow.style.backgroundColor = "yellow"
                return setTimeout(function() {countdown(i)}, 1100)
            }
            case 0: {
                statusText.innerText = "Clicks: 0"
                clickWindow.style.backgroundColor = "lightgreen"
                return playGame()
            }
        }
    }
    
    function playGame(){
        numClicks = 0
        clickWindow.addEventListener('click', handleClick)

        count = 100; // 10 Seconds
        counter = setInterval(timeLeft, 100); //10 will  run it every 100th of a second
    }
    
    function endGame(){
        numClicks = Math.round(numClicks/10)
        timer.innerText = ""
        statusText.innerText = `You got ${numClicks} clicks per second!`
        clickWindow.style.backgroundColor = "lightslategrey"
        clickWindow.removeEventListener('click', handleClick)
        
        var result = {
            owner_id: user,
            game_type: game,
            score: numClicks
        }
        
        fetch( '/addResult', {
            method:'POST',
            headers: {"X-CSRF-TOKEN": csrf, "Content-Type": "application/json"},
            body: JSON.stringify(result)
        }).then(async function( response ) {
            var data = await response.json()
            let dataScore = data.map(gameRes => gameRes.score);

            console.log(dataScore);
            
            window.dispatchEvent(new CustomEvent("updateData", {detail: {data: dataScore, myScore : result.score}}))
        })
        
        startBtn.disabled = false
    }
    

    function timeLeft()
    {
        if (count <= 0)
        {
            clearInterval(counter);
            endGame()
            return;
        }
        count--;
        timer.innerText = count /10+ "s";
    }

    function handleClick(){
        numClicks += 1
        statusText.innerText = `Clicks: ${numClicks}`
    }

}