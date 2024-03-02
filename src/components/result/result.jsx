import styled from "styled-components";
import thanks from "../../assets/images/illustration-thank-you.svg";
function Result(props) {
  return (
    <Maincard>
      <img src={thanks} alt="process" />;
      <div>
        <Rated>You selected {props.number} out of 5</Rated>
      </div>
      <Thanks>Thank you!</Thanks>
      <Text>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Text>
    </Maincard>
  );
}

export default Result;
const Maincard = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 327px;
  height: 360px;
  padding: 34px 24px 37px;
  border-radius: 15px;
  background-image: radial-gradient(circle at 50% 0, #232a34, #181e27 90%);
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 168px;
    height: 32px;
    border-radius: 22.5px;
    background-color: #262e38;
    margin-top: 24px;
  }
`;
const Rated = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.57;
  color: #fc7614;
}
`;
const Thanks = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  margin-top: 24px;
`;
const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: #969fad;
  margin-top: 10px;
`;
