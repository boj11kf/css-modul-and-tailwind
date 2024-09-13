import logo from '../assets/logo.png';

/* 
  Ha van olyan egyedi stilus amit hasznalni szeretnenk, 
  lasd font-tile a <h1></h1> className-ben, akkor azt fel kell vennunk
  annak megfeleloen a tailwind.config.js file extend objektumaba

  Es termeszetesen, a tailwind installalasat kovetoen a .css fileba,
  ugyanugy hasznalhatunk css kodot, de oda ilyenkor mar erdemes
  csak atfogobb dolgokat, mint body, vagy hatter modositasok
*/

export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-8 md:mb-16'>
      <img src={logo} alt="A canvas" className='mb-8 w-44 h-44 object-contain'/>
      <h1 className='text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title'>ReactArt</h1>
      <p className='text-stone-500'>A community of artists and art-lovers.</p>
    </header>
  );
}
