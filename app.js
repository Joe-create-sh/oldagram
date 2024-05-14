import { posts } from './data.js';

console.log(posts);

const postFeed = document.querySelector('.post-feed');
console.log(postFeed);

function createPostHeader(post) {
    
    return `<header>
                   
                <div class="hero">

                    <div class="container row">

                        <div class="post-avatar-container">
                        
                            <img class="post-avatar" src=${post.avatar} alt="${post.name}'s avatar">

                            <div class="header-text-container">

                                <p class="bold-text">${post.name}</p>
                                <p class="ordinary-text">${post.location}</p>

                            </div>

                        </div>
           
                    </div>
                
                </div>

            </header>`;

}


function createPostImage(post) {
    
    return `<figure class="selfie-container">

                <img src=${post.post} alt="${post.name}'s selfie">

            </figure>`;

}

function createUserInteractionSection(post, index) {
    
    return `<section class="interactive-container">
       
                <div class="interactive-icons">
                        
                    <i class="fa-regular fa-heart" data-like-icon data-post-index="${index}"></i>
                    <i class="fa-sharp fa-regular fa-comment fa-rotate-270"></i>
                    <i class="fa-sharp fa-regular fa-paper-plane-top fa-rotate-by" style="--fa-rotate-angle: 335deg;""></i>
                                                                                
                </div>

                    <p class="bold-text" data-likes-display="${index}">${post.likes} likes</p>               
                    <p class="ordinary-text"><span class="bold-text">${post.username}</span> ${post.comment}</p>
                       
            </section>

        <div class="post-divider"></div>`;
                                    
}

function renderPosts() {
    
    posts.forEach((post, index) => {

        const postHeader = createPostHeader(post);
        const postImage = createPostImage(post);
        const postInteractionSection = createUserInteractionSection(post, index);

        const userPost = `${postHeader}${postImage}${postInteractionSection}`;

        postFeed.innerHTML += userPost;

    });

    document.querySelectorAll('[data-like-icon]').forEach(icon => { 

        icon.addEventListener('dblclick', function () { 
       
            const index = this.getAttribute('data-post-index');
            increaseLikes(index);
       
        });
       
    });
    
    
    document.querySelectorAll('.selfie-container img').forEach((img, index) => { 
    
        img.addEventListener('dblclick', function () { 
    
            increaseLikes(index);
    
    
        });
    
    });

}


renderPosts();



function increaseLikes(index) {
    
    posts[index].likes++; 

    document.querySelector(`[data-likes-display="${index}"]`).textContent = `${posts[index].likes} likes`;

}





