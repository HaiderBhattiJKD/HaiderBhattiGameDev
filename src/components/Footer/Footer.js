import './Footer.css'

function GetYear() {
  const date = new Date();
  const year = date.getFullYear();
  return (
      <>
          {year}
      </>
)
}

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/HaiderBhattiJKD'
      className='link footer__link'
    >
      © [Haider Ali Bhatti] | Crafting immersive experiences with Unity & C# | {GetYear()}
    </a>
  </footer>
)

export default Footer