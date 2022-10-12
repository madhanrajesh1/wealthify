import styled from "styled-components";

const Wrappers = styled.div`
  /* table  */
  height: 100vh;
  overflow: auto;

  .doctor-heading {
    border-collapse: collapse;
    width: max(400px, 80%);
    margin: 0 auto;
  }
  tr:has(th) {
    position: sticky;
    top: 0;
  }
  .doctor-heading th {
    text-align: center;
    padding: 1rem 0;
    background-color: #a1c334;
  }
  .doctor-heading td {
    padding: 0.75rem 0;
    text-align: center;
  }
  .doctor-heading tr:nth-child(odd) {
    background-color: #c9cbc5;
  }
  .btn {
    background-color: var(--primary-700);
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    color: white;
    cursor: pointer;
  }
`;

export default Wrappers;
