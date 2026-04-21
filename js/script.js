$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).om('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

    });
    //smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();

        $('html,body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
             500,
            'linear'
        );
    });

    
});


function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
        
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
        
    // I-check kung hindi pa sumasapit ang buwan o araw ng bday ngayong taon
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
        
    return age;
    }

    // Ilagay dito ang saktong birthday mo (YYYY-MM-DD)
    const myBirthDate = "1999-04-26"; 
    document.getElementById("my-age").innerText = calculateAge(myBirthDate);
