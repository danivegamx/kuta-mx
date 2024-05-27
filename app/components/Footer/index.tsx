
import './styles.sass';

export default function Footer() {
  const year = new Date().getFullYear();
  return <footer>
    <div className="container mx-auto grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-3">
        <p>Kuta 🏠</p>
        <ul>
          <li><a href="#">Misión</a></li>
          <li><a href="#">Visión</a></li>
          <li><a href="#">Valores</a></li>
          <li><a href="#">Contáctanos</a></li>
        </ul>
      </div>
      <div className="col-span-12 md:col-span-3">
        <p>Nosotros 👥</p>
        <ul>
          <li><a href="#">¿Quiénes somos?</a></li>
          <li><a href="#">¿Qué hacemos?</a></li>
          <li><a href="#">Historias</a></li>
        </ul>
      </div>
      <div className="col-span-12 md:col-span-6 adoptions-links">
        <p>Adopción 🐶</p>
        <ul>
          <li>Conoce toda la info - <a href="/adopciones">Requisitos</a></li>
          <li><a href="/adopciones">Mascotas en resguardo</a></li>
        </ul>
      </div>
      <div className="copyright col-span-12">Creado con mucho 🤍 por <a href='https://www.quantumstudios.dev'>Quantum Studios</a> © { year }</div>
    </div>
  </footer>;
}