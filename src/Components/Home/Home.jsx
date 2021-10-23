import image from "../../assets/360_F_245281783_3zeOLu7mhjUmYbFlBwSNsfwQmQZzukWo.jpg";
import resume from "../../assets/Mirna Taher Abd El-Azeem.pdf"
import "./Home.css"
const Home = () => {
  return (
    <div className="py-5">
      <div className="row justify-content-between align-items-center border rounded p-3 shadow">
        <div className="col-4">
          <figure className="py-3">
            <img src={image} alt="avatar icon" />
          </figure>
          <h1 className="fs-3">Mirna Taher Abd El-Azeem</h1>
        </div>

        <div className="col-8">
          <div className="w-50 mx-auto">
            <p>
              My name is Mirna Taher, I'm a Junior Frontend Developer and I have
              the following skills:
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>SASS</li>
              <li>Angular</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li className="my-3"><a href={resume} className="btn btn-primary" download >Resume</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
