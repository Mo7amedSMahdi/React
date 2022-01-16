import personalImage from "../images/personal-image.jpg";

export default function CardHeader() {
  return (
    <div className="card-head">
      <div className="header-image">
        <img src={personalImage} />
      </div>
      <div className="header-content">
        <div className="name">
          <h1>Laura Smith</h1>
        </div>
        <div className="job-title">Frontend Developer</div>
        <div className="webSite">laurasmith.website</div>
        <button type="button" className="btn">
        <i class="fa fa-envelope" aria-hidden="true"></i>
        Email
        </button>
      </div>
    </div>
  );
}
