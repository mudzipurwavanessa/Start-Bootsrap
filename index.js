document.addEventListener('scroll',() =>{

    const navigation = document.querySelector('.navigation');
    if(window.scrollY >0){
        navigation.classList.add('scrolled');

    }
else{
    navigation.classList.remmove('scrolled');
}

}


);