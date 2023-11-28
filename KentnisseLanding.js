document.addEventListener('DOMContentLoaded', function() {
    var topElement = document.querySelector('.skewed .top');
    var bottomElement = document.querySelector('.skewed .bottom');
    var handleElement = document.querySelector('.handle');
    var topknowledgeElement = document.querySelector('.topknowledge');
    var bottomknowledgeElement = document.querySelector('.bottomknowledge');
    var TopkentnisseElement = document.querySelector('#Top-kentnisse');
    var bottomKentnisseElement = document.querySelector('#bottom-kentnisse');
    var CertificateswitchElement = document.querySelector('#Certificateswitch');
    var WorkdayswitchElement = document.querySelector('#Workdayswitch');
    var textboxtopElement = document.querySelector('.text-box-top');
    var textboxbottomElement = document.querySelector('.text-box-bottom');
    var topcontentElement = document.querySelector ('#Top-content')

    if (window.innerWidth >= 767) {
    // Event listener for topElement
    topElement.addEventListener('click', function() {
        Topclick();
    });
 
    function Topclick() {
        // Update styles on click
        topElement.style.width = 'calc(50vw + 2500px)';
        handleElement.style.left = '150%';
        topknowledgeElement.style.display = 'flex';
        topknowledgeElement.style.transition = 'flex 1.5s ease';
        TopkentnisseElement.style.opacity = '0';
        TopkentnisseElement.style.transition = 'opacity 1.5s ease';
        topknowledgeElement.scrollIntoView({ behavior: 'smooth' });
    }
    // Event listener for bottomElement
    bottomElement.addEventListener('click', function() {
        bottomclick();
    });
 
    function bottomclick() {
        // Update styles on click
        topElement.style.width = 'calc(1vw + 1px)';
        handleElement.style.left = '-50%';
        bottomknowledgeElement.style.display = 'flex';
        bottomknowledgeElement.style.transition = 'flex 1.5s ease';
        bottomKentnisseElement.style.opacity = '0';
        bottomKentnisseElement.style.transition = 'opacity 1.5s ease';
        bottomknowledgeElement.scrollIntoView({ behavior: 'smooth' });
    }
 
    // Event listener for CertificateswitchElement
    CertificateswitchElement.addEventListener('click', function() {
        Certificateswitch();
    });

    function Certificateswitch() {
        // Update styles on click
        topElement.style.width = 'calc(50vw + 2500px)';
        handleElement.style.left = '150%';
        topknowledgeElement.style.display = 'flex';
        topknowledgeElement.style.transition = 'flex 1.5s ease';
        TopkentnisseElement.style.opacity = '0';
        TopkentnisseElement.style.transition = 'opacity 1.5s ease';
        bottomknowledgeElement.style.display = 'none';
        window.scrollTo({
            top: 300,
            behavior: 'smooth'
        });
    }
        // Event listener for Workdayswitch
        WorkdayswitchElement.addEventListener('click', function() {
            Workdayswitch();
        });  

        function Workdayswitch() {
            // Update styles on click
            topElement.style.width = 'calc(1vw + 1px)';
            handleElement.style.left = '-50%';
            bottomknowledgeElement.style.display = 'flex';
            bottomknowledgeElement.style.transition = 'flex 1.5s ease';
            bottomKentnisseElement.style.opacity = '0';
            bottomKentnisseElement.style.transition = 'opacity 1.5s ease';
            topknowledgeElement.style.display = 'none';
            window.scrollTo({
                top: 300,
                behavior: 'smooth'
            });
        }
    } else {
        topElement.addEventListener('click', function() {

            TopclickMobile();
    
        });
        function TopclickMobile() {
            // Update styles on click
            topcontentElement.style.display = "none";
            topknowledgeElement.style.display = 'flex';
            topknowledgeElement.style.transition = 'flex 1.5s ease';
            TopkentnisseElement.style.opacity = '0';
            TopkentnisseElement.style.transition = 'opacity 1.5s ease';
            topknowledgeElement.scrollIntoView({ behavior: 'smooth' });
            textboxtopElement.style.borderRadius = '0%';
        }
        
        bottomElement.addEventListener('click', function() {
            bottomclickMobile();  // Fix the function name
        });
        
        function bottomclickMobile() {
            // Update styles on click
            topcontentElement.style.display = "none";
            bottomknowledgeElement.style.display = 'flex';
            bottomknowledgeElement.style.transition = 'flex 1.5s ease';
            bottomKentnisseElement.style.opacity = '0';
            bottomKentnisseElement.style.transition = 'opacity 1.5s ease';
            bottomknowledgeElement.scrollIntoView({ behavior: 'smooth' });
        }        
}

CertificateswitchElement.addEventListener('click', function() {

    Certificateswitch();

});



function Certificateswitch() {

    // Update styles on click

    topcontentElement.style.display = "none";
    topknowledgeElement.style.display = 'flex';
    topknowledgeElement.style.transition = 'flex 1.5s ease';
    TopkentnisseElement.style.opacity = '0';
    TopkentnisseElement.style.transition = 'opacity 1.5s ease';
    bottomknowledgeElement.style.display = 'none';
    window.scrollTo({
        top: 10,
        behavior: 'smooth'
    });
}
    // Event listener for Workdayswitch
    WorkdayswitchElement.addEventListener('click', function() {
        Workdayswitch();
    });  
    function Workdayswitch() {
        // Update styles on click
        topcontentElement.style.display = "none";
        bottomknowledgeElement.style.display = 'flex';
        bottomknowledgeElement.style.transition = 'flex 1.5s ease';
        bottomKentnisseElement.style.opacity = '0';
        bottomKentnisseElement.style.transition = 'opacity 1.5s ease';
        topknowledgeElement.style.display = 'none';
        textboxbottomElement.style.borderRadius = '0%';    
    window.scrollTo({
        top: 10,
        behavior: 'smooth'
    });
    }
});

 