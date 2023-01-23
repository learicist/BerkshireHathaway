
$(document).ready(function () {
    $("#title").on("click", function () {
        location.reload();
    });

    let images1 = [
        "https://res.cloudinary.com/learicist/image/upload/v1674505380/BerkshireProject/BerkTopLeft/5B363477-23A4-453C-AD13-DFDF5A649812_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505398/BerkshireProject/BerkTopLeft/46F1E632-6709-4A40-A316-A2A5CD0ACF97.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505396/BerkshireProject/BerkTopLeft/34A39C0A-55E0-47D9-A1C1-9839CCB61571_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505394/BerkshireProject/BerkTopLeft/43EC4AB1-A6AC-4751-9D4A-0C2F0BB56FB9_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505394/BerkshireProject/BerkTopLeft/32E4E680-6AEC-43AF-B3EE-6191251AFEBD_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505393/BerkshireProject/BerkTopLeft/8A911F25-161B-49F7-B0BA-F3A991E5AFE3_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505392/BerkshireProject/BerkTopLeft/9F6C5DC7-7155-4130-9018-94A745EEA130_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505391/BerkshireProject/BerkTopLeft/22AD4E7A-B69F-4112-9688-DB80E02FDD8B_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505388/BerkshireProject/BerkTopLeft/02D36403-3220-4D2B-934C-CA2BAC839323.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505388/BerkshireProject/BerkTopLeft/20F70C8B-7615-4948-98FF-118C19A61FE2_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505387/BerkshireProject/BerkTopLeft/14B7F594-A4BE-4D39-A023-28EF0189B3AE_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505383/BerkshireProject/BerkTopLeft/7A70C9E3-B0C7-4722-8AAE-E981936809E9_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505381/BerkshireProject/BerkTopLeft/6C355F2B-A91F-45E7-8930-4589727E1F59_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505376/BerkshireProject/BerkTopLeft/79DF00E3-31DC-484D-A122-FED3DB1DA9F7_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505376/BerkshireProject/BerkTopLeft/5C574836-0AEF-4B72-8779-967641863E70_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505375/BerkshireProject/BerkTopLeft/3A7EAC3D-14C2-4760-8058-3E00A7FFBF25.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505368/BerkshireProject/BerkTopLeft/4C2466A2-CFDB-4702-A70C-59F942F82980_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505368/BerkshireProject/BerkTopLeft/3A7EAC3D-14C2-4760-8058-3E00A7FFBF25_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505365/BerkshireProject/BerkTopLeft/3AE83FB5-207F-4066-8AA2-E97B5C7D9D3D_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505361/BerkshireProject/BerkTopLeft/94E58A9F-0D86-47F6-9169-95AD46A84DB9_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505361/BerkshireProject/BerkTopLeft/03F166B9-543B-4413-BA7B-77FFBC0D55FE_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505361/BerkshireProject/BerkTopLeft/82B16054-5205-4505-BAFC-833F6CDBD4A1_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505360/BerkshireProject/BerkTopLeft/162E2908-4063-4ECD-8D0F-36CE302B8748_1_105_c.jpg",
    ];

    console.log(images1.length + " --> images1 length")

    let images2 = [
        "https://res.cloudinary.com/learicist/image/upload/v1674505551/BerkshireProject/BerkTopRight/20220726_103033.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505548/BerkshireProject/BerkTopRight/20220725_091757.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505534/BerkshireProject/BerkTopRight/20220725_150944.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505526/BerkshireProject/BerkTopRight/20220726_102744.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505525/BerkshireProject/BerkTopRight/20220726_093115.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505502/BerkshireProject/BerkTopRight/6989AF6A-E8BA-4896-9630-7CCE2AA1A12E.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505498/BerkshireProject/BerkTopRight/5556D0B5-862E-4DD4-A453-D7D62053FB41.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505481/BerkshireProject/BerkTopRight/494DF541-A54A-4C22-A940-896D9D0F3462.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505460/BerkshireProject/BerkTopRight/390AC4D7-1F39-4445-B074-CEF23CA372B5.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505459/BerkshireProject/BerkTopRight/20220726_161648.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505456/BerkshireProject/BerkTopRight/B4D0C76E-C087-4380-96C5-3B67C9503448_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505455/BerkshireProject/BerkTopRight/0926F3AB-0335-43EC-B7E4-788633D3C606.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505450/BerkshireProject/BerkTopRight/A2D72DBD-E2C9-4507-918D-2219D9351257_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505449/BerkshireProject/BerkTopRight/62913972-6C5B-4279-8EAE-20952E6A6E85_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505442/BerkshireProject/BerkTopRight/35307354-35BC-4BAA-BDE2-4D0992ABE360.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505427/BerkshireProject/BerkTopRight/251AF2B4-16AD-4DCB-BAF9-B72FA53355DB.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505427/BerkshireProject/BerkTopRight/22817E94-34D2-45B2-8AE8-B91B2EF14C9C_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505416/BerkshireProject/BerkTopRight/1313C041-2E24-4EAC-8FFE-ED2432D76FB5_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505412/BerkshireProject/BerkTopRight/B7DC66B7-DEA1-4946-9FEA-BF25798DD2DA_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505410/BerkshireProject/BerkTopRight/4079D294-0802-4693-AFC5-DB526C01F1E8_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505409/BerkshireProject/BerkTopRight/647DC1C6-65AD-4EA7-8F50-6AC5B984E64D_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505409/BerkshireProject/BerkTopRight/532B064C-3C13-44DA-9B48-0571FC3BD4FF_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505409/BerkshireProject/BerkTopRight/1176A77E-F481-469D-93D8-9FF7A765CB9E_1_105_c.jpg",
    ];

    console.log(images2.length + "--> images2 length")

    let images3 = [
        "https://res.cloudinary.com/learicist/image/upload/v1674509354/BerkshireProject/BerkBottom/90F428ED-5B3E-4B8E-B142-A8B834E9124A_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505577/BerkshireProject/BerkBottom/CD64053E-80F7-48F3-8501-D16DAE7A0087_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505577/BerkshireProject/BerkBottom/CE282F59-147D-4322-9B35-53F987D58E84.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505577/BerkshireProject/BerkBottom/CD64E580-03E1-4C68-8DE6-C345BFBA0DD9_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505577/BerkshireProject/BerkBottom/BC5AAF5F-41A3-4BEC-947C-A5A0D69D95F9_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505575/BerkshireProject/BerkBottom/BE355D4D-EC0C-4779-84D3-C69A6996B674.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505574/BerkshireProject/BerkBottom/CC3A86D9-E0EF-441A-AC28-ED668D5464B7_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505573/BerkshireProject/BerkBottom/CA54F37A-2D0B-4712-B2BE-C2D1E4486402_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505570/BerkshireProject/BerkBottom/FF3A9E0C-0352-4AF8-8F80-CEA41F8AB46C_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505570/BerkshireProject/BerkBottom/DE7B5C75-EBD9-4336-BA8C-5137B663CDD9_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505570/BerkshireProject/BerkBottom/E3CA175D-5507-404D-8FF5-9D7DA33D661B_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505568/BerkshireProject/BerkBottom/F69C2025-CDA0-4921-B3A1-4C369E2B79DF_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505566/BerkshireProject/BerkBottom/D1C8756B-A5FA-418F-8220-1F487876EF52_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505565/BerkshireProject/BerkBottom/DD575EC2-8A77-4039-8D12-6C9914A6FAE0_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505565/BerkshireProject/BerkBottom/F6C1F643-152F-46F4-A99C-0123926D8D8C_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505564/BerkshireProject/BerkBottom/DD5F5E01-B95F-4A6D-AE02-C3EF7A2969DD_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505563/BerkshireProject/BerkBottom/E62F054D-3BE8-49A9-8AF7-1C4D68DB0587_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505562/BerkshireProject/BerkBottom/CFCFE921-47D3-493D-BB07-5B149AAF8B4E_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505558/BerkshireProject/BerkBottom/E81B1FC3-5D4E-49FE-813B-65492A4EC64F_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505558/BerkshireProject/BerkBottom/D4501209-BB2F-45FC-BBE6-27CF7A1AA8A5_1_105_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505556/BerkshireProject/BerkBottom/EA69A702-4879-4239-91B9-145A7B413A65_4_5005_c.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505556/BerkshireProject/BerkBottom/DC0C8002-3DC8-401A-9DB1-EF66274480E8.jpg",
        "https://res.cloudinary.com/learicist/image/upload/v1674505360/BerkshireProject/BerkTopLeft/73BC7CCB-DAA5-458A-A19A-7B65DF7D52E8.jpg"
    ];

    console.log(images3.length + "--> images3 length")

    // MISC SHOTS
    let images4 = [
        
    ];

    let index1 = 0,
        index2 = 0,
        index3 = 0,
        index4 = 0;

    let maxIndex = 23;  

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
        index3 = (maxIndex == index3) ? 0 : ++index3;
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

    $('#submitForm').on('click', function () {
        $('#form')[0].submit();
        $('#form')[0].reset();
        //console.log('reset test');
        return false;
    });

    //let test = "https://photos.google.com/share/AF1QipOTAAaS3tLRk0zrpdq9TCtY9ZUd8pPonkxp5RwBfIoZtsUxC5uQygwtZ0UqeDlnIg?obfsgid=107569901087643252298&email=learicist@gmail.com&key=VWZYMFdQTnF0Uk5xOFBMWk9JZldZUktHMDR5WFNn";

});