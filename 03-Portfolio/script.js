//template_vivxxrf
//service_4798qxg
//YBX7DhWf37wjV_Gln

function contact(event){
    event.preventDefault();
    // // await emailjs.sendForm{
    // //     'service_4798qxg',
    // //     'template_vivxxrf'
    // //     event.target,
    // //     'YBX7DhWf37wjV_Gln'
    // // };
    const loading = domcument.querySelector('.modal__overlay--loading')
    loading.classList += " modal__overlay--visible"
    setTimeout(()=>{
        console.log("work");
    }, 500);
    console.log("Testing")
}