const sidebarArr = Array.from(document.getElementById("sidebar").children);

const secObserver = new IntersectionObserver((entries) => {
    const tar = entries[0].target;
    const tarId = tar.getAttribute('id');
    if(entries[0].isIntersecting){
        sidebarArr.forEach((el) => {
            const addr = el.getAttribute('href');
            if(addr.substr(1) === tarId){//substr because href contains #
                el.classList.add('bg-cu-white');
            }else{
                el.classList.remove('bg-cu-white');
            }
        })
    }
}, {root: null, threshold: 0.6});

//observing sections for intersection
secObserver.observe(document.getElementById('hero-sec'));
secObserver.observe(document.getElementById('about-sec'));
secObserver.observe(document.getElementById('features-sec'));
secObserver.observe(document.getElementById('pricing-sec'));
secObserver.observe(document.getElementById('contact-sec'));
