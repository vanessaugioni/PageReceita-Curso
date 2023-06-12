import { Waffle, Sun } from "./assets/export";
import { Toggle } from "./components/toggle/index";
import { useState } from "react";

export default function App() {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <>
      <Toggle checked={checked} functionChecked={handleChecked} />

      {/* <img className="Sun" src={Sun} alt="imagem" /> */}

      <main className={`main-page ${checked && 'checked'}`}>
        <header>
          <h1>Waffles Clássico</h1>

          <img src={Waffle} alt="imagem" />
          <div>
            <figcaption>Receita de Waffle clássico</figcaption>
          </div>
        </header>

        <section>
          <h2>INGREDIENTES</h2>

          <ul>
            <li>2 xícaras(chá) de farinha de trigo</li>
            <li>1 colher(sopa) de açucar</li>
            <li>2 colheres(sopa) de fermento em pó</li>
            <li>1/2 colher(chá) de sal</li>
            <li>2 colheres de amido de milho</li>
            <li>3 ovos batidos</li>
            <li>4 colheres(sopa) de manteiga sem sal derretida</li>
            <li>1 e 3/4 de xícara(chá) de leite</li>
            <li>1 colher(sopa) de essência de baunilha</li>
          </ul>
        </section>

        <section>
          <h2>MODO DE PREPARO</h2>
          <div>
            <ol>
              1. Peneire em um recipiente a farinha de trigo, o açúcar, o amido,
              o fermento e o sal. Reserve.
            </ol>
            <ol>
              2. Em outro recipiente misture os ovos batidos com o leite, a
              manteiga derretida e a essência de baunilha.
            </ol>
            <ol>
              3. Despeje sobre a mistura de farinha e rapidamente incorpore os
              ingredientes.
            </ol>
            <ol>
              4. Aqueça o aparelho para Waffles. Coloque uma concha rasa de
              massa e espalhe até cobrir o molde do aparelho, feche a tampa e
              deixe assar até a massa ficar bem dourada.
            </ol>
            <ol>
              5. Retire com espátulas de silicone. Sirva com mel, frutas ou
              geleia.
            </ol>
          </div>
        </section>

        <section>
          <h2>INFORMAÇÕES ADICIONAIS</h2>

          <p>Você poderá servir estes Waffles no café da manhã com geleia.</p>
        </section>
      </main>
      <footer>
        <p>Criado com 💜 por </p>
        <a href="https://github.com/vanessaugioni">Vanessa </a>
      </footer>
    </>
  );
}
