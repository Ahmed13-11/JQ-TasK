// ** hide and show singerSection 
$('.song').click(function() {
    let option = $(this).nextAll('.songDetail');
    console.log(option);
    $(option).slideToggle(1000);
});



// ** 100 character in textarea   okey
let charCount = 100;
$('#textarea').keyup(function(e) {
    if (this.value.length >= 100) {
        e.preventDefault();
        charCount = 'Your available characters have finished';
    } else {
        charCount=100-this.value.length;
    }
    $('.contact-input p span').text(charCount);
});



// ** counter
let Countter = document.querySelectorAll('#box p')
var days=10;
var hours=10;
var minutes=59;
var seconds=10;
var interval = setInterval(function(){
    if (seconds == 0) {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else if (hours > 0) {
            minutes = 59;
            hours--;
        } else if (days > 0) {
            hours = 23;
            days--;
        }
    } else {
        seconds--;
    }
    Countter[0].textContent = `${days} days`
    Countter[1].textContent = `${hours} hours`
    Countter[2].textContent = `${minutes} minutes`
    Countter[3].textContent = `${seconds} seconds`
    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
        clearInterval(interval);
    }
},1000)



// ** nav beside
// ** move smoothy to sections

$('#toggle').click(function() {
    let boxWidth = $('.blackdiv').outerWidth();
    $('.blackdiv').css({ left: `0px`, transition: 'all 1s' });
    $('.open').css({ left: `${boxWidth + 10}px`, transition: 'all 1s' });
});

$('#close').click(function(){
    let boxWidth = $('.blackdiv').outerWidth();
    $('.blackdiv').css({ left: `${-boxWidth}px`, transition: 'all 1s' });
    $('.open').css({ left: `10px`, transition: 'all 1s' });
})

$('.blackdivcontain a').click(function(){
    let selected=$(this).attr('href')
    let sectionTop=$(selected).offset().top
    $('body,html').animate({
    scrollTop:sectionTop
    },2000)
})
