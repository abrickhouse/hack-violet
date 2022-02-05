import logo from "./fem-med.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="#">
              Home
            </a>
            <a class="nav-item nav-link" href="#">
              Find Help
            </a>
            <a class="nav-item nav-link" href="info.html">
              Get Information
            </a>
          </div>
        </div>
      </nav>
      <header className="App-header">
        <div class="container overflow-hidden">
          <div class="row gx-5">
            <div class="col-6 col-md-4">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div class="col">
              <h1 class="display-1" className="title">
                Women-Focused Aid
              </h1>
              <p className="top-text">
                1 in 5 women struggle with mental health issues. Information
                about women and mental health and issues thatat they face.
                Information about women and mental health and issues thatat they
                face. Information about women and mental health and issues
                thatat they face. Information about women and mental health and
                issues thatat they face.
              </p>
            </div>
          </div>
        </div>
      </header>
      <body className="body-text">
        <h2 class="display-5">
          Why?
          <small class="text-muted"> and How?</small>
        </h2>
        <p className="body-text">
          Recent research has shown that the way men and women display mental
          illness differs greatly. This disparity, in conjunction with misogyny,
          results in healthcare being tailored to suit men’s needs, and severely
          lacking in its attention to women’s needs. Stigma... Phasellus
          efficitur eleifend ante ac pretium. Vestibulum suscipit, erat in
          mollis ultricies, urna augue porta erat, a facilisis dui elit non
          augue. Sed ac commodo leo, quis dictum est. Donec lectus nibh,
          tincidunt nec lorem sed, feugiat dignissim nisi. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. In risus odio, feugiat sollicitudin mi vel, viverra mattis
          dui. Nam tristique venenatis velit et finibus. Fusce fringilla, nunc
          vitae aliquam consequat, lacus dui laoreet lectus, a venenatis est
          risus id ipsum. Pellentesque nulla risus, condimentum eget finibus
          sed, fermentum in lacus. Aliquam suscipit justo ut tortor venenatis
          varius. Quisque id mi eget tellus porta accumsan. Etiam varius sem ut
          lorem fringilla, at tincidunt arcu tincidunt. Donec at enim vel neque
          fringilla gravida. Nam malesuada tempus mauris, quis hendrerit justo
          lacinia in.{" "}
        </p>
        <figure class="text-center">
          <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>

        <div class="container overflow-hidden">
          <div class="row g-2">
            <div class="col">
              <h2 class="display-6">Accessibilty</h2>
              <h2 class="display-6">
                <small class="text-muted"> and Socioeconomics</small>
              </h2>
              <p className="body-text-two">
                Aliquam placerat, nulla vel vehicula lacinia, nibh metus aliquam
                nisi, a ultricies enim eros vel leo. Nunc mi magna, auctor vel
                lacus vel, posuere rutrum quam. Suspendisse dignissim, nisi sit
                amet elementum faucibus, neque enim placerat leo, sit amet
                congue metus mi et nisl. Donec ornare semper posuere. Ut ac
                magna quis lectus ultrices mattis. Praesent in pulvinar orci.
                Pellentesque gravida urna at posuere tincidunt. Nunc lectus
                nulla, ornare faucibus posuere ac, imperdiet in mi. Cras in
                suscipit quam, vel suscipit eros. Mauris pulvinar mauris id est
                bibendum pulvinar. Phasellus eleifend nec tortor in molestie.
                Mauris mattis elit id rutrum eleifend.{" "}
              </p>
            </div>
            <div class="col">
              <h2 class="display-6">Focus on Women</h2>
              <h2 class="display-6">
                <small class="text-muted"> and Care Designed for Us</small>
              </h2>
              <p className="body-text-two">
                As well as differences in expression, men and women are at
                different risk for certain disorders and sometimes require
                different treatment. Maecenas at felis quis dui auctor commodo.
                Morbi dictum ante vel mauris vehicula, ac rutrum est convallis.
                Suspendisse nunc augue, pellentesque sed dolor nec, scelerisque
                pellentesque dolor. Maecenas euismod, justo vitae rhoncus
                eleifend, nibh libero sollicitudin ligula, nec finibus leo nisl
                sit amet magna. Etiam at pellentesque enim, non rhoncus turpis.
                Quisque lacinia eu risus in mattis. Phasellus placerat, lectus
                sed tempus ultricies, ex dolor viverra justo, et aliquet metus
                justo vel arcu. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
