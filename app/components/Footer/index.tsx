
import './styles.sass';

export default function Footer() {
  const year = new Date().getFullYear();
  return <footer>
    <div className="container mx-auto grid grid-cols-12 gap-4 pt-12 pb-6 md:pt-20 md:pb-8">
      <div className="col-span-6 md:col-span-3 mx-4">
        <p className='md:text-lg'>Kuta 🏠</p>
        <ul>
          <li><a href="#">Misión</a></li>
          <li><a href="#">Visión</a></li>
          <li><a href="#">Valores</a></li>
          <li><a href="#">Contáctanos</a></li>
        </ul>
      </div>
      <div className="col-span-6 md:col-span-3 mx-4">
        <p className='md:text-lg'>Nosotros 👥</p>
        <ul>
          <li><a href="#">¿Quiénes somos?</a></li>
          <li><a href="#">¿Qué hacemos?</a></li>
          <li><a href="#">Historias</a></li>
        </ul>
      </div>
      <div className="col-span-12 md:col-span-6 md:text-right mx-4">
        <p className='md:text-lg mt-6 md:mt-0'>Adopción 🐶</p>
        <ul>
          <li>Conoce toda la info - <a href="/adopciones">Requisitos</a></li>
          <li><a href="/adopciones">Mascotas en resguardo</a></li>
        </ul>
      </div>
      <div className="copyright col-span-12 mb-4 md:mb-0">Creado con mucho 🤍 por <a href='https://www.quantumstudios.dev'>Quantum Studios</a> © {year}</div>
    </div>
  </footer>;
}