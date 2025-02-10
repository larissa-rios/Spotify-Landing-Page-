// BOM DIA | BOA TARDE | BOA NOITE

// Obtém a referência do elemento com o ID "greeting"
const greetingElement = document.getElementById("greeting");

// Obtém a hora atual do sistema
const currentHour = new Date().getHours();

// Define a mensagem de saudação com base na hora atual
const greetingMessage =
    currentHour >= 5 && currentHour < 12
        ? "Bom dia"
        : currentHour >= 12 && currentHour < 18
        ? "Boa tarde"
        : "Boa noite";
greetingElement.textContent = greetingMessage;

// GRID INTELIGENTE
const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {
    const containerWidth = container.offsetWidth;
    const numColumns = Math.floor(containerWidth / 200);
    container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;
    console.log({ container });
    console.log({ numColumns });
});

observer.observe(container);

function displayResults(result) {
    resultPlaylist.classList.add("hidden");
  
    // Verifica se encontrou algum artista
    if (result.length === 0) {
      resultArtist.innerHTML = `
        <div class="error-container">
          <span>Nenhum artista encontrado</span>
        </div>
      `;
      resultArtist.classList.remove("hidden");
      return;
    }
  
    // Limpa resultados anteriores
    resultArtist.innerHTML = `
      <div class="grid-container">
        <div class="artist-card">
          <div class="card-img">
            <img id="artist-img" class="artist-img" />
            <div class="play">
              <span class="fa fa-solid fa-play"></span>
            </div>
          </div>
          <div class="card-text">
            <a title="Foo Fighters" class="vst" href=""></a>
            <span class="artist-name" id="artist-name"></span>
            <span class="artist-categorie">Artista</span>
          </div>
        </div>
      </div>
    `;
  
    const artistName = document.getElementById("artist-name");
    const artistImage = document.getElementById("artist-img");
  
    result.forEach((element) => {
      artistName.innerText = element.name;
      artistImage.src = element.urlImg;
    });
  
    resultArtist.classList.remove("hidden");
  }