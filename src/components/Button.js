import styled from "styled-components";

export const ButtonContainer = styled.button`
text-transform: Capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color:${(probs) =>
  probs.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${(probs) => (probs.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
border-radius: 0.5rem;
padding: 0.2rem, 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
  background: ${(prob) =>
    prob.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: var(--mainBlue);
}
&;focus{
    outline:none
}
`;