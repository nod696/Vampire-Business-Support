const tabList = document.querySelector(".team__tab__inner");
const tabNav = document.querySelectorAll(".tab__item");
const tabItems = document.querySelectorAll(".team__item");


tabList.addEventListener("click", event => {
       
    tabNav.forEach(item => {
            item.classList.remove("active");
            event.target.classList.add("active");
           
            }); 
            let link = event.target.dataset.id;
            switch(link) {
                case 'all':
                    tabItems.forEach(item => {
                        if (item.classList.contains('team__item')) {
                            item.style.display = "block";
                        }else {
                            item.style.display = "none";
                        };
                    });
                    break;
                case 'schemers':
                    tabItems.forEach(item => {
                        if (item.classList.contains('schemers')) {
                            item.style.display = "block";
                        }else {
                            item.style.display = "none";
                        };
                    });
                    break;
                case 'pursuers':
                    tabItems.forEach(item => {
                        if (item.classList.contains('pursuers')) {
                            item.style.display = "block";
                        }else {
                            item.style.display = "none";
                        };
                    });
                    break;
                case 'hypnosis':
                    tabItems.forEach(item => {
                        if (item.classList.contains('hypnosis')) {
                            item.style.display = "block";
                        }else {
                            item.style.display = "none";
                        };
                    });
                    break;
                    };
        });
   

