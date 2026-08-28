/* =========================
   ELEMENTOS
========================= */

const menuButton =
    document.getElementById("menuButton");

const sideMenu =
    document.getElementById("sideMenu");

const profileButton =
    document.getElementById("profileButton");

const profileMenu =
    document.getElementById("profileMenu");

const notificationButton =
    document.getElementById("notificationButton");

const notificationPanel =
    document.getElementById("notificationPanel");

const plusButton =
    document.getElementById("plusButton");

const postModal =
    document.getElementById("postModal");

const closeModal =
    document.getElementById("closeModal");

const publishButton =
    document.getElementById("publishButton");

const editNickname =
    document.getElementById("editNickname");

const nickname =
    document.getElementById("nickname");


/* =========================
   MENU
========================= */

menuButton.addEventListener("click", function(event) {

    event.stopPropagation();

    sideMenu.classList.toggle("active");

});


/* =========================
   PERFIL
========================= */

profileButton.addEventListener("click", function(event) {

    event.stopPropagation();

    profileMenu.classList.toggle("active");

    notificationPanel.classList.remove("active");

});


/* =========================
   NOTIFICAÇÕES
========================= */

notificationButton.addEventListener("click", function(event) {

    event.stopPropagation();

    notificationPanel.classList.toggle("active");

    profileMenu.classList.remove("active");

});


/* =========================
   ABRIR POST
========================= */

function openPostModal() {

    postModal.classList.add("active");

}


plusButton.addEventListener(
    "click",
    openPostModal
);


/* =========================
   FECHAR MODAL
========================= */

closeModal.addEventListener("click", function() {

    postModal.classList.remove("active");

});


postModal.addEventListener("click", function(event) {

    if (event.target === postModal) {

        postModal.classList.remove("active");

    }

});


/* =========================
   PUBLICAR POST
========================= */

publishButton.addEventListener("click", function() {

    const title =
        document
            .getElementById("postTitle")
            .value
            .trim();


    const description =
        document
            .getElementById("postDescription")
            .value
            .trim();


    const tags =
        document
            .getElementById("postTags")
            .value
            .trim();


    const files =
        document
            .getElementById("postFiles")
            .files;


    if (!title) {

        alert("Digite um título.");

        return;

    }


    if (!description) {

        alert("Digite uma descrição.");

        return;

    }


    /* =========================
       CRIAR POST
    ========================= */

    const post =
        document.createElement("article");

    post.className = "post";


    /* =========================
       TAGS
    ========================= */

    let tagsHTML = "";


    if (tags) {

        tags
            .split(" ")
            .forEach(tag => {

                if (tag.trim()) {

                    tagsHTML += `

                        <span class="tag">
                            ${tag}
                        </span>

                    `;

                }

            });

    }


    /* =========================
       ARQUIVOS
    ========================= */

    let mediaHTML = "";


    for (const file of files) {

        const url =
            URL.createObjectURL(file);


        if (file.type.startsWith("image/")) {

            mediaHTML += `

                <img
                    class="post-media"
                    src="${url}"
                    alt="Imagem da publicação">

            `;

        }


        if (file.type.startsWith("video/")) {

            mediaHTML += `

                <video
                    class="post-media"
                    controls
                    src="${url}">
                </video>

            `;

        }

    }


    /* =========================
       HTML DO POST
    ========================= */

    post.innerHTML = `

        <div class="post-header">

            <div class="post-avatar">

                <img
                    src="imagens/believe.jpg"
                    alt="Believe">

            </div>


            <div>

                <div class="post-user">

                    ${nickname.textContent.trim()}

                </div>


                <div class="post-time">

                    agora

                </div>

            </div>

        </div>


        <div class="post-content">

            <h2 class="post-title">

                ${title}

            </h2>


            <p class="post-description">

                ${description}

            </p>


            <div class="tags">

                ${tagsHTML}

            </div>


            ${mediaHTML}

        </div>


        <div class="post-actions">

            <button class="action">

                ❤️ 0

            </button>


            <button class="action">

                💬 0

            </button>


            <button class="action">

                🔗 Compartilhar

            </button>

        </div>

    `;


    /* =========================
       COLOCAR NO TOPO
    ========================= */

    const content =
        document.querySelector(".content");


    const firstPost =
        content.querySelector(".post");


    content.insertBefore(
        post,
        firstPost
    );


    /* =========================
       LIMPAR FORMULÁRIO
    ========================= */

    document.getElementById("postTitle").value = "";

    document.getElementById("postDescription").value = "";

    document.getElementById("postTags").value = "";

    document.getElementById("postFiles").value = "";


    /* =========================
       FECHAR MODAL
    ========================= */

    postModal.classList.remove("active");

});


/* =========================
   CLICAR FORA DOS MENUS
========================= */

document.addEventListener("click", function(event) {


    if (
        !sideMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        sideMenu.classList.remove("active");

    }


    if (
        !profileMenu.contains(event.target) &&
        !profileButton.contains(event.target)
    ) {

        profileMenu.classList.remove("active");

    }


    if (
        !notificationPanel.contains(event.target) &&
        !notificationButton.contains(event.target)
    ) {

        notificationPanel.classList.remove("active");

    }

});


/* =========================
   ALTERAR NICKNAME
========================= */

editNickname.addEventListener("click", function(event) {

    event.stopPropagation();


    const novoNickname =
        prompt(
            "Digite seu novo nickname:",
            nickname.textContent.trim()
        );


    if (
        novoNickname !== null &&
        novoNickname.trim() !== ""
    ) {

        nickname.textContent =
            novoNickname.trim();

    }

});
