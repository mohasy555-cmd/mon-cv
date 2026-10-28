import { useState } from 'react'
import './App.css'


function App() {
  return (
    <div className="cv">

      {/* En-tête */}
      <header className="cv-header text-center">
        <div className="photo">
          <img src="/photo.jpg" alt="Photo de profil" />
        </div>

        <h1>MOHAMED DEMBA SY</h1>
        <p>ÉTUDIANT EN <i>GENIE LOGICIEL</i></p>

        <div className="row mt-4">
          <div className="col-md-4">Dakar, Sénégal</div>
          <div className="col-md-4">+221 77 467 47 21</div>
          <div className="col-md-4"><a href="mohasy555@gmail.com">mohasy555@gmail.com</a></div>
        </div>
      </header>

      {/* Corps du CV */}
      <div className="row g-0">

        {/* Colonne gauche */}
        <aside className="col-md-4 sidebar">

          <h2>À PROPOS DE MOI</h2>
          <p>
            Étudiant en informatique, passionné par le
            développement web et la création d'applications.
            Je souhaite développer mes compétences et réaliser
            des projets modernes.
          </p>

          <hr />

          <h2>FORMATION</h2>
          <p>
            <strong>Études en informatique</strong><br />
            Formation en développement et programmation.
          </p>

          <hr />

          <h2>LANGUES</h2>
          <p>Français — Courant</p>
          <p>Anglais — Niveau débutant</p>

        </aside>

        {/* Colonne droite */}
        <main className="col-md-8 content">

          <h2>EXPÉRIENCES ET PROJETS</h2>

          <h3>1. Bibliothèque en C</h3>
          <p>
            Création d'un programme pour gérer des livres
            et apprendre les bases de la programmation.
          </p>

          <h3>2. Stage</h3>
          <p>
            Stage au DataCenter de DIAMNIADIO d'une durée de 3 mois
          </p>

          <h3>3. Application avec React</h3>
          <p>
            Réalisation d'un CV interactif avec React,
            Vite et Bootstrap.
          </p>

          <hr />

          <h2>COMPÉTENCES</h2>

          <ul>
            <li>HTML et CSS : création de pages web.</li>
            <li>JavaScript : bases de la programmation.</li>
            <li>React et Bootstrap : création d'interfaces web.</li>
          </ul>

        </main>

      </div>
    </div>
  );
}

export default App;

