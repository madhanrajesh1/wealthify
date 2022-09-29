import Image from "next/image";
import styled from "styled-components";
import thyroid from "../assets/image/thyroid.svg";
const Wrappers = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.161);
  .name,
  .subtitle {
    margin-left: 1.5rem;
  }
  .subtitle {
    max-width: 300px;
  }
  .join-btn {
    width: 200px;
    background-color: var(--primary-700);
    padding: 0.75rem 1.5rem;
    border-radius: 1.5rem;
    text-decoration: none;
    border: none;
    color: white;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;
const Card = ({ img, name, subtitle }) => {
  return (
    <Wrappers>
      <div className="img">
        <Image src={img} />
      </div>
      <p className="name">{name}</p>
      <p className="subtitle">{subtitle}</p>
      <button className="join-btn">Join Now</button>
    </Wrappers>
  );
};

export default Card;
