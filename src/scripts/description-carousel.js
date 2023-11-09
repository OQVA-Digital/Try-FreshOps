console.log('foi')

let bullets = document.querySelectorAll('.intro .descriptions .bullet')

let carouselBts = document.querySelectorAll('.roulette .icons button')

let rouletteIcons = document.querySelector('.roulette .icons')
let spinContainers = document.querySelectorAll('.roulette .icons .spin_ctnr')

let dottedBorder = document.querySelector('.roulette .borders svg.dotted')


let counter = 0;
setTimeout(() => {
    bullets[counter].classList.add('show')
}, 900);

var repeatHighlight = setInterval(() => {
    
    if(document.querySelector('.intro .descriptions .bullet.show')) {
        document.querySelector('.intro .descriptions .bullet.show').classList.remove('show')
    }

    setTimeout(() => {
        bullets[counter].classList.add('show')
    }, 200);

    if(counter != bullets.length - 1) {
        counter++
    } else {
        counter = 0;
    }
}, 6000);



function alternateBullet() {

    for(let i=0;i<carouselBts.length;i++) {
        carouselBts[i].addEventListener('click', function() {
            document.querySelector('.intro .descriptions .bullet.show').classList.remove('show')

            setTimeout(() => {
                bullets[i].classList.add('show')
            }, 200);

            clearInterval(repeatHighlight)
        })
        
        carouselBts[i].addEventListener('mouseover', function() {
            rouletteIcons.classList.add('stop')
            dottedBorder.classList.add('stop')

            for(let j=0;j<spinContainers.length;j++) {
                spinContainers[j].classList.add('stop')
            }
        })
        
        carouselBts[i].addEventListener('mouseout', function() {
            rouletteIcons.classList.remove('stop')

            for(let j=0;j<spinContainers.length;j++) {
                spinContainers[j].classList.remove('stop')
                dottedBorder.classList.remove('stop')
            }
        })
    }

}

alternateBullet()