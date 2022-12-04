

$(document).ready(function () {
    $("#title").on("click", function () {
        location.reload();
    });

    // CLOSE UPS
    let images1 = [
        "https://res.cloudinary.com/learicist/image/upload/v1670096335/BerkshireProject/solo2.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929696/BerkshireProject/three.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929701/BerkshireProject/smile.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929542/BerkshireProject/closeup.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669061759/BerkshireProject/Pic1.jpg"
    ];

    // GROUP SHOTS
    let images2 = [
        "https://res.cloudinary.com/learicist/image/upload/v1669929631/BerkshireProject/group.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929608/BerkshireProject/group2.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929647/BerkshireProject/group3.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929601/BerkshireProject/group4.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929665/BerkshireProject/group5.jpg"
    ];

    // ACTION SHOTS
    let images3 = [
        "https://res.cloudinary.com/learicist/image/upload/v1669061764/BerkshireProject/DrumPic.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1670096335/BerkshireProject/campfire.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1670096339/BerkshireProject/arm.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929548/BerkshireProject/dance2.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929633/BerkshireProject/dance.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929700/BerkshireProject/tiedye.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929575/BerkshireProject/food.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929649/BerkshireProject/guitar.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929686/BerkshireProject/hat2.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1669929715/BerkshireProject/shirts.jpg"
    ];

    // MISC SHOTS
    let images4 = [
        
    ];

    let index1 = 0,
        index2 = 0,
        index3 = 0,
        index4 = 0;

    let maxIndex = 4;
    let maxIndexBottom = 9;

    //PIC1 ROTATION
    setInterval(function () {
        let curr = images1[index1];
        index1 = (maxIndex == index1) ? 0 : ++index1;
        $('#pics1').fadeOut(450, function () {
            $(this).attr("src", curr);
            $(this).fadeIn(350);
            //console.log(curr);
        });
        //console.log(images1[curr]);
    }, 11000);

    //PIC2 ROTATION
    setInterval(function () {
        let curr = images2[index2];
        index2 = (maxIndex == index2) ? 0 : ++index2;
        $('#pics2').fadeOut(450, function () {
            $(this).attr("src", curr);
            $(this).fadeIn(350);
            //console.log(curr);
        });
        //console.log(images1[curr]);
    }, 9000);

    //PIC3 ROTATION
    setInterval(function () {
        let curr = images3[index3];
        index3 = (maxIndexBottom == index3) ? 0 : ++index3;
        $('#pics3').fadeOut(450, function () {
            $(this).attr("src", curr);
            $(this).fadeIn(350);
            //console.log(curr);
        });
        //console.log(images1[curr]);
    }, 13000);

    //PIC4 ROTATION
    // setInterval(function () {
    //     let curr = images4[index4];
    //     index4 = (maxIndex == index4) ? 0 : ++index4;
    //     $('#pics4').fadeOut(450, function () {
    //         $(this).attr("src", curr);
    //         $(this).fadeIn(350);
    //         //console.log(curr);
    //     });
    //     //console.log(images1[curr]);
    // }, 11000);

    $("#mainBody").on('click', function () {
        if ( $('#hamButton').attr('aria-expanded') === 'true' ) {
            console.log('test');
            $('#hamButton').trigger('click');
        }
    });
});