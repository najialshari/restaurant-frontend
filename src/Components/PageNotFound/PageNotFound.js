import { Link } from 'react-router-dom';
import "./pageNotFound.css"


const PageNotFound = () => {
  return (
    
      <div className='notFoundPage' >
        <div className='notFoundDiv'>
        <h2>This QR Code doesn`t work<br/></h2>
      <Link className='notFoundLink' to={'/'} ><button>Check the Menu</button> </Link>
      </div>
        <img
          className='notFoundImage'
          alt="404 - QR Code doesn`t work "
          // width="50%"
          // src="https://freesvg.org/img/1646582431404-error-404.png"
          src="https://www.pcworld.com/wp-content/uploads/2021/09/thinkstock-qr-code-100725734-orig.jpg?quality=50&strip=all"
        />
      </div>
      
  );
};

export default PageNotFound;