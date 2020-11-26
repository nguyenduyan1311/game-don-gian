function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }

    this.moveLeft = function (){
        this.right += 20;
        console.log('ok: ' + this.right);
    }

    this.moveUp = function (){
        this.down += 20;
        console.log('ok: ' + this.down);
    }

    this.moveDown = function (){
        this.up += 20;
        console.log('ok: ' + this.up);
    }
}

var hero = new Hero('https://i.imgur.com/zd22NXL.png', 20, 30, 200);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
