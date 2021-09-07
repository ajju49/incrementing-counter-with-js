const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        //bcoz data-target is attribut of class counter
        // we added + before counter bcoz we make it number
        // without + its a string
        // we can put in number constructor i.e [ number() ]
        // or we can use parce Int
        const c = +counter.innerText
        //by adding + to counter we make it number

        const increment = target / 1000
        //here our target no.(we mension in html get divided in 1000 parts)
        

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            // math.ceil makes number round-off eg.(19.7 = 20)
            setTimeout(updateCounter,1)
            //to update counter we pass fun. updateCounter
            // we pass 1 for to wait 1ms before update
            // we pass setTimeOut to stop updating after 1ms.
            // by setTimeOut it will update after every 1ms
        }
        else{
            counter.innerText = target
        }
    }

    updateCounter()
})