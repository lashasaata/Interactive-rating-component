import styled from "styled-components";
import star from "../../assets/images/icon-star.svg";
function Ratting(props) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <MainCard>
      <div>
        <img src={star} alt="starIcon" />
      </div>
      <Header>How did we do?</Header>
      <Description>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Description>
      <section>
        {stars.map((e, index) => {
          return (
            <Rate
              style={
                e == props.number
                  ? { backgroundColor: "#7c8798", color: "white" }
                  : {}
              }
              key={index}
              onClick={() => props.setNumber(e)}
            >
              {e}
            </Rate>
          );
        })}
      </section>
      <Submit onClick={() => props.setResult(!props.result)}>SUBMIT</Submit>
    </MainCard>
  );
}

export default Ratting;

const MainCard = styled.main`
  width: 327px;
  height: 360px;
  padding: 24px 22px 32px 24px;
  border-radius: 15px;
  background-image: radial-gradient(circle at 50% 0, #232a34, #181e27 90%);
  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #262e38;
  }
  section {
    display: flex;
    gap: 18px;
    margin-top: 24px;
  }
`;
const Header = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  margin-top: 16px;
`;
const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.57;
  color: #969fad;
  margin-top: 10px;
`;
const Rate = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #262e38;
  border: none;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.71;
  letter-spacing: 0.18px;
  text-align: center;
  color: #7c8798;
  &:hover {
    cursor: pointer;
    background-color: #fc7614;
  }
`;
const Submit = styled.button`
  width: 279px;
  height: 45px;
  border-radius: 22.5px;
  background-color: #fc7614;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1.87px;
  color: #fff;
  border: none;
  margin-top: 24px;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: #fc7614;
  }
`;
