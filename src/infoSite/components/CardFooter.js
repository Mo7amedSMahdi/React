import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function CardFooter() {
  return (
    <footer>
      <ul className="nav">
        <li>
          <a href="#">
          <FontAwesomeIcon icon={["fab", "twitter-square"]} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "instagram-square"]} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "github-square"]} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
