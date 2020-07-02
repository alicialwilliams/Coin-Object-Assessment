//console.log ('Hello World')

let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random()) 
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           console.log(this.state);
    },
    toString: function() {
        coin.flip()
        let flipResult = ''
        if (this.state === 1) {
             flipResult = 'heads'+ ',';
        } else {
         flipResult = 'tails' + ',';
        }
        document.body.append(flipResult)
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        
        coin.flip() 
        const imgElement = document.createElement('img')

        if (this.state === 1) {
            imgElement.className = 'image'
            imgElement.src = "./images/qtf.jpg";
            
       } 
       else {
            imgElement.className = 'image'
            imgElement.src = "./images/qtb.jpg";
            
        
       }
        document.body.append(imgElement)
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        
        
    }
};


        function display20flips() {
            for (let index = 1; index <= 20; index += 1 ) {
                coin.toString("")
            }
            
        }
        display20flips()
        
        function display20images() { //src:https://allinworld99.blogspot.com/
            
            
             for (let index = 1; index <= 20; index += 1 ) {
                coin.toHTML()
                
            }
           
        }
        display20images()
