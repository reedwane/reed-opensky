import styled from "styled-components";
import {
  errorColor,
  primaryColor,
  secondaryColor,
  textwhite,
} from "styles/variables/styleVariables";

export const LoginWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  @media screen and (min-width: 992px) {
    padding: 5% 0;
    width: 70%;
  }

  img {
    width: 100%;
    border-radius: 20px 20px 0 0;
    border: 1px solid ${secondaryColor};
    object-fit: cover;
  }

  form {
    font-weight: 500;
    color: ${primaryColor};
    background-color: ${textwhite};
    position: relative;
    top: -4em;
    border-radius: 20px;
    padding: 1em 0;
    border: 1px solid ${secondaryColor};

    label {
      display: block;
      margin: 5% 10%;
      text-align: left;
    }

    input {
      display: block;
      width: 100%;
      height: 2em;
      margin: 0 auto;
      text-indent: 7%;
      border: 1px solid ${primaryColor};
      border-radius: 5px;
      outline: none;
    }

    .fa-eye,
    .fa-eye-slash {
      position: relative;
      top: -1.7em;
      left: 90%;
    }

    .error,
    .submit-error {
      color: ${errorColor};
      font-size: 0.7rem;
      line-height: 90%;
    }

    button {
      width: 30%;
      height: 3em;
      color: ${textwhite};
      border: none;
      border-radius: 10px;
      background-color: ${primaryColor};
    }

    .submit-error {
      margin-top: 1em;
      display: block;
    }
  }

  .form-content {
    @media screen and (min-width: 600px) {
      max-height: 400px;
      display: flex;
      flex-wrap: wrap;

      img,
      form {
        width: 50%;
      }

      img {
        border-radius: 20px 0 0 20px;
      }

      form {
        top: 0;
        border-radius: 0 20px 20px 0;
        height: 100%;
      }
    }
  }
`;
